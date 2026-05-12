import participants from '../../../data/participants.json'

export default function handler(req, res) {

  const { token } = req.query

  const participant = participants[token]

  if (!participant) {

    return res.status(404).json({
      error: "Participant not found"
    })
  }

  res.status(200).json({
    token,
    ...participant
  })
}