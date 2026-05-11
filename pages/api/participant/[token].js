export default function handler(req, res) {

  const { token } = req.query

  const participants = {

    "mf_TEST123": {
      name: "Vipin",
      flow: 72,
      vitality: 61,
      momentum: "Building Momentum",
      nextStep: "Follow-up Reflection",
      cognitiveState: "Recovery Stabilizing"
    },

    "mf_SARAH001": {
      name: "Sarah",
      flow: 84,
      vitality: 76,
      momentum: "Good Health Momentum",
      nextStep: "Post Recovery Reflection",
      cognitiveState: "Restorative Momentum"
    },

    "mf_ARJUN001": {
      name: "Arjun",
      flow: 58,
      vitality: 52,
      momentum: "Needs Attention",
      nextStep: "Initial Recovery Cycle",
      cognitiveState: "Cognitive Fatigue Present"
    }
  }

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