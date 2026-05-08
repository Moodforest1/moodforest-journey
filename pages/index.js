export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef3ee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        color: "#244837",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          letterSpacing: "0.2em",
          fontSize: "12px",
          marginBottom: "18px",
        }}
      >
        MOODFOREST
      </div>

      <h1
        style={{
          fontSize: "56px",
          margin: 0,
          fontWeight: 700,
        }}
      >
        Journey OS
      </h1>

      <p
        style={{
          marginTop: "18px",
          fontSize: "18px",
          color: "#61756a",
        }}
      >
        Longitudinal continuity for preventive health.
      </p>
    </div>
  );
}