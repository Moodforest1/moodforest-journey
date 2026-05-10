import axios from "axios"

async function getAccessToken() {

  const response = await axios.post(
    "https://accounts.zoho.in/oauth/v2/token",
    null,
    {
      params: {
        refresh_token: process.env.ZOHO_REFRESH_TOKEN,
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: "refresh_token"
      }
    }
  )

  return response.data.access_token
}

export default async function handler(req, res) {

  const { token } = req.query

  try {

    const accessToken = await getAccessToken()

    console.log(process.env.ZOHO_API_DOMAIN) 
    const zohoResponse = await axios.get(
      `${process.env.ZOHO_API_DOMAIN}/creator/v2.1/data/${process.env.ZOHO_OWNER_NAME}/${process.env.ZOHO_APP_NAME}/report/${process.env.ZOHO_REPORT_NAME}`,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`
        },
        params: {
          criteria: `(Access_Token=="${token}")`
        }
      }
    )

    const records = zohoResponse.data.data || []

    console.log(JSON.stringify(records, null, 2))

    const participant = records[0]

    if (!participant) {
      return res.status(404).json({
        error: "Participant not found"
      })
    }

    res.status(200).json({
      name: participant.Full_Name || "",
      journeyState: participant.Journey_State || "",
      assessmentUrl: participant.Assessment_URL || "",
      reportUrl: participant.Report_URL || ""
    })

  } catch (error) {

    console.error(
      JSON.stringify(error.response?.data || error.message, null, 2)
    )

    res.status(500).json({
      error: error.response?.data || error.message
    })
  }
}