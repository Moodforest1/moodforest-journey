import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "participants.json");

const STAGES = {
  1: "Initial Reflection",
  2: "Residency",
  3: "Follow-up Reflection",
  4: "Quarterly Follow-up",
};

function determineStage(flow, vitality) {
  const avg = (flow + vitality) / 2;

  if (avg >= 80) return 4;
  if (avg >= 65) return 3;
  if (avg >= 45) return 2;

  return 1;
}

function determineMomentum(flow, vitality) {
  const avg = (flow + vitality) / 2;

  if (avg >= 80) return "Thriving Continuity";
  if (avg >= 65) return "Recovery Accelerating";
  if (avg >= 45) return "Building Momentum";

  return "Needs Restorative Attention";
}

function determineCognitiveState(flow) {
  if (flow >= 85) return "Flourishing";
  if (flow >= 70) return "Steady";
  if (flow >= 55) return "Strained";
  if (flow >= 40) return "Fatigued";

  return "Disconnected";
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
  const {
  token,

  flow,
  vitality,

  stage,

  Cognitive_Flow_Score,
  Body_Vitality_Score,
} = req.body;

    if (!token) {
      return res.status(400).json({
        error: "Token required",
      });
    }

    const rawData = fs.readFileSync(dataFilePath);
    const participants = JSON.parse(rawData);

    const participant = participants[token];

    if (!participant) {
      return res.status(404).json({
        error: "Participant not found",
      });
    }

    const nextFlow =
  flow ??
  Cognitive_Flow_Score ??
  participant.flow ??
  50;
    const nextVitality =
  vitality ??
  Body_Vitality_Score ??
  participant.vitality ??
  50;

    const newStage =
  stage ??
  determineStage(nextFlow, nextVitality);

    const existingTimeline = participant.timeline || [];

    const alreadyExists = existingTimeline.find(
      (t) => t.stage === newStage
    );

    let updatedTimeline = [...existingTimeline];

    if (!alreadyExists) {
      updatedTimeline.push({
        stage: newStage,
        label: STAGES[newStage],
        completedAt: new Date().toISOString(),
      });
    }

    participants[token] = {
      ...participant,

      flow: nextFlow,
      vitality: nextVitality,

      mindFlow: nextFlow,
      bodyVitality: nextVitality,

      overallMomentum: determineMomentum(
        nextFlow,
        nextVitality
      ),

      cognitiveState: determineCognitiveState(nextFlow),

      stage: newStage,

      stageLabel: STAGES[newStage],

      timeline: updatedTimeline,

      nextStep:
        newStage < 4
          ? STAGES[newStage + 1]
          : "Continue Longitudinal Continuity",

      updatedAt: new Date().toISOString(),
    };

    fs.writeFileSync(
      dataFilePath,
      JSON.stringify(participants, null, 2)
    );

    return res.status(200).json({
      success: true,
      participant: participants[token],
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to update participant",
    });
  }
}