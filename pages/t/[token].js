import { useRouter } from "next/router"

export default function JourneyPage() {

  const router = useRouter()
  const { token } = router.query

  const assessmentUrl =
    `const assessmentUrl =
  `https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-perma/Cognitive_Flow_Assessment/vpFXQWs4VqRJ8nkNRTOdgW8qVat6Z2u2D4QPMM0VveKq619fQKOxDW0WGDtHYdyJZ1yepZXJN4V31vCGUzHbDCPmgdSeDUxaXwF1?Access_Token=${token}`

  const reportUrl =
    `https://creatorapp.zoho.in/madhur_moodforest755/moodforest-app/#Report:Archived_Reports1`

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F6F4EE",
        padding: "40px 24px",
        fontFamily: "Arial, sans-serif",
        color: "#18322A"
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            fontSize: "42px",
            fontWeight: "700",
            lineHeight: "1.1",
            marginBottom: "24px"
          }}
        >
          Welcome back.
        </div>

        <div
          style={{
            fontSize: "20px",
            lineHeight: "1.7",
            marginBottom: "48px",
            color: "#4B5B55"
          }}
        >
          Your preventive health journey continues through reflection,
          restorative continuity, emotional steadiness, and guided recovery.
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          <a
            href={assessmentUrl}
            target="_blank"
            style={{
              backgroundColor: "#18322A",
              color: "white",
              padding: "18px",
              borderRadius: "999px",
              textDecoration: "none",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "600"
            }}
          >
            Complete Reflection
          </a>

          <a
            href={reportUrl}
            target="_blank"
            style={{
              backgroundColor: "white",
              color: "#18322A",
              padding: "18px",
              borderRadius: "999px",
              textDecoration: "none",
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "600",
              border: "1px solid #D9D4C7"
            }}
          >
            View Report
          </a>
        </div>
      </div>
    </div>
  )
}