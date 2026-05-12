import fs from "fs";
import path from "path";

const dataFilePath = path.join(
  process.cwd(),
  "data",
  "participants.json"
);

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { name, flow, vitality } = req.body;

    const rawData = fs.readFileSync(dataFilePath);

    const participants = JSON.parse(rawData);

    const token =
      "mf_" +
      Math.random().toString(36).substring(2, 8);

    participants[token] = {
      name,

      flow: flow || 50,
      vitality: vitality || 50,

      mindFlow: flow || 50,
      bodyVitality: vitality || 50,

      overallMomentum: "Beginning Recovery Journey",

      cognitiveState: "Reflective Awareness Emerging",

      stage: 1,

      stageLabel: "Initial Reflection",

      timeline: [
        {
          stage: 1,
          label: "Initial Reflection",
          completedAt: new Date().toISOString(),
        },
      ],

      nextStep: "Residency",

      updatedAt: new Date().toISOString(),
    };

    fs.writeFileSync(
      dataFilePath,
      JSON.stringify(participants, null, 2)
    );

    return res.status(200).json({
      success: true,
      token,
      participant: participants[token],
      journeyUrl: `https://journey.moodforest.co/t/${token}`,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to create participant",
    });
  }
}