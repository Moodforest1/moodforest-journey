export default function handler(req, res) {
  const { token } = req.query

  res.status(200).json({
    token,
    name: "Vipin",
    flow: 72,
    vitality: 61,
    momentum: "Building Momentum",
    nextStep: "Follow-up Reflection"
  })
}