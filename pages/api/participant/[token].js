export default async function handler(req, res) {

  const { token } = req.query

  // TEMPORARY MOCK FILTER
  // Later we fetch directly from Zoho API

  const participants = [
    {
      token: "mf_A7k29Qx",
      name: "Aparna",
      journeyState: "In Residency",
      assessmentUrl: "https://example.com/assessment",
      reportUrl: "https://example.com/report"
    }
  ]

  const participant = participants.find(
    p => p.token === token
  )

  if (!participant) {
    return res.status(404).json({
      error: "Participant not found"
    })
  }

  res.status(200).json(participant)
}