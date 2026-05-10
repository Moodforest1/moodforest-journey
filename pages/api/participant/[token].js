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

    const zohoResponse = await axios.post(
      "https://www.zohoapis.in/creator/v2.1/data/madhur_moodforest755/moodforest-app/form/Participant_Master/getRecords",
      {
        criteria: `(Access_Token=="${token}")`
      },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`
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
      accessToken: participant.Access_Token || ""
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