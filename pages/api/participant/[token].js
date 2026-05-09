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

    const zohoResponse = await axios.get(
      `${process.env.ZOHO_API_DOMAIN}/creator/v2/data/${process.env.ZOHO_OWNER_NAME}/${process.env.ZOHO_APP_NAME}/report/${process.env.ZOHO_REPORT_NAME}`,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`
        }
      }
    )

    const records = zohoResponse.data.data || []

    console.log(records[0])

    const participant = records.find(
      p => p.Access_Token === token
    )

    if (!participant) {
      return res.status(404).json({
        error: "Participant not found"
      })
    }

    res.status(200).json(participant)

  } catch (error) {

    console.error(error.response?.data || error.message)

    res.status(500).json({
  error: error.response?.data || error.message
})
  }
}