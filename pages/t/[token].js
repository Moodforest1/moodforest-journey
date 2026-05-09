export async function getServerSideProps(context) {

  const { token } = context.params

  const res = await fetch(
  `https://journey.moodforest.co/api/participant/${token}`
)

  if (!res.ok) {
    return {
      notFound: true
    }
  }

  const participant = await res.json()

  return {
    props: {
      participant
    }
  }
}

export default function JourneyPage({ participant }) {

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef2ec",
        padding: "40px",
        fontFamily: "sans-serif"
      }}
    >

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "white",
          borderRadius: "32px",
          padding: "40px"
        }}
      >

        <p
          style={{
            letterSpacing: "3px",
            color: "#7b8b7f",
            fontSize: "12px"
          }}
        >
          YOUR JOURNEY
        </p>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: 1,
            color: "#163126"
          }}
        >
          Welcome back,
          <br />
          {participant.name}.
        </h1>

        <p
          style={{
            marginTop: "24px",
            color: "#5d6d61",
            fontSize: "22px",
            lineHeight: 1.6
          }}
        >
          Your preventive health journey continues through reflection,
          restorative continuity, emotional steadiness, and guided recovery.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap"
          }}
        >

          <a
            href={participant.assessmentUrl}
            style={{
              background: "#234434",
              color: "white",
              padding: "18px 28px",
              borderRadius: "999px",
              textDecoration: "none"
            }}
          >
            Complete Reflection
          </a>

          <a
            href={participant.reportUrl}
            style={{
              border: "1px solid #d8dfd7",
              background: "white",
              color: "#234434",
              padding: "18px 28px",
              borderRadius: "999px",
              textDecoration: "none"
            }}
          >
            View Dossier
          </a>

        </div>

      </div>

    </div>
  )
}