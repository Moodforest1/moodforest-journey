import { useRouter } from "next/router";

export default function ParticipantJourney() {
  const router = useRouter();
  const { token } = router.query;

  const participantData = {
    aparna: {
      name: "Aparna",
      state: "In Residency",
      nextStep: "Residency In Progress",
      reflection:
        "Continue participating in restorative practices, guided reflective experiences, and metabolic recovery continuity.",
    },

    ravi: {
      name: "Ravi",
      state: "Recovery Continuity",
      nextStep: "Reflective Continuity",
      reflection:
        "Continue observing emotional steadiness, recovery rhythm, and longitudinal preventive continuity.",
    },

    madhur: {
      name: "Madhur",
      state: "Reflective Continuity",
      nextStep: "Cognitive Recovery",
      reflection:
        "Continue strengthening restorative sleep, emotional steadiness, and cognitive flow continuity.",
    },
  };

  const participant =
    participantData[token] || participantData["aparna"];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#edf2ed",
        padding: "24px",
        fontFamily: "Inter, sans-serif",
        color: "#244837",
      }}
    >
      <div
        style={{
          maxWidth: "920px",
          margin: "0 auto",
        }}
      >
        {/* HEADER */}

        <div
          style={{
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.22em",
              marginBottom: "12px",
            }}
          >
            MOODFOREST
          </div>

          <div
            style={{
              color: "#61756a",
              fontSize: "15px",
            }}
          >
            Preventive Health • Recovery • Cognitive Flow
          </div>
        </div>

        {/* HERO */}

        <div
          style={{
            background: "rgba(255,255,255,0.68)",
            borderRadius: "34px",
            padding: "42px",
            border: "1px solid #dde7df",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#819287",
              marginBottom: "18px",
            }}
          >
            Your Journey
          </div>

          <h1
            style={{
              fontSize: "62px",
              lineHeight: "1.04",
              margin: 0,
              marginBottom: "18px",
              fontWeight: 700,
            }}
          >
            Welcome back,
            <br />
            {participant.name}.
          </h1>

          <div
            style={{
              color: "#6b7b71",
              fontSize: "15px",
              marginBottom: "22px",
            }}
          >
            {participant.state}
          </div>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.9",
              color: "#61756a",
              maxWidth: "720px",
              margin: 0,
            }}
          >
            {participant.reflection}
          </p>
        </div>

        {/* NEXT STEP */}

        <div
          style={{
            background:
              "linear-gradient(180deg,#f7fbf8 0%,#edf5ef 100%)",
            borderRadius: "34px",
            padding: "34px",
            border: "1px solid #dbe6de",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#819287",
              marginBottom: "16px",
            }}
          >
            Next Step
          </div>

          <div
            style={{
              fontSize: "44px",
              fontWeight: 700,
              marginBottom: "16px",
              lineHeight: "1.12",
            }}
          >
            {participant.nextStep}
          </div>

          <div
            style={{
              color: "#61756a",
              lineHeight: "1.9",
              fontSize: "17px",
            }}
          >
            Dynamic participant continuity route loaded from token:
            <br />
            <strong>{token}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}