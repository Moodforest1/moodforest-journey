export default function Home() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const residencyUpdates = [
    {
      type: "Schedule",
      title: "Morning Breath & Mobility",
      description:
        "Begin the day with guided mobility, breath regulation, and restorative activation.",
    },
    {
      type: "Reflection",
      title: "Evening Reflection Circle",
      description:
        "Tonight’s reflective session begins at 8 PM near the meditation deck.",
    },
    {
      type: "Facilitator Note",
      title: "Forest Walk",
      description:
        "A guided restorative walk focused on nervous system downregulation and sensory recovery.",
    },
  ];

  const healthCards = [
    {
      title: "Cognitive Strength",
      value: "Awaiting Reflection",
      description: "Clarity, steadiness & restorative sleep",
    },
    {
      title: "Metabolic Fitness",
      value: "Awaiting Reflection",
      description: "Energy regulation & glycemic steadiness",
    },
    {
      title: "Cardiac Health",
      value: "Awaiting Reflection",
      description: "Lipid balance & cardiovascular resilience",
    },
    {
      title: "Inflammation Control",
      value: "Awaiting Reflection",
      description: "Systemic inflammatory load & recovery",
    },
    {
      title: "Nutritional Status",
      value: "Awaiting Reflection",
      description: "Vitamin reserves & nutritional recovery",
    },
    {
      title: "Physical Function",
      value: "Awaiting Reflection",
      description: "Movement, stamina & functional recovery",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#edf2ed",
        padding: isMobile ? "18px" : "24px",
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
            background: "rgba(255,255,255,0.65)",
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
              fontSize: isMobile ? "48px" : "62px",
              lineHeight: "1.04",
              margin: 0,
              marginBottom: "18px",
              fontWeight: 700,
            }}
          >
            Welcome back,
            <br />
            Aparna.
          </h1>

          <div
            style={{
              color: "#6b7b71",
              fontSize: "15px",
              marginBottom: "22px",
            }}
          >
            Bio-Reset • 7 Day Residency
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
            Your preventive health journey continues through reflection,
            restorative continuity, emotional steadiness, and guided metabolic
            recovery.
          </p>
        </div>

        {/* NEXT STEP */}

        <div
          style={{
            background: "linear-gradient(180deg,#f7fbf8 0%,#edf5ef 100%)",
            borderRadius: "34px",
            padding: "34px",
            border: "1px solid #dbe6de",
            marginBottom: "28px",
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
              fontSize: isMobile ? "34px" : "44px",
              fontWeight: 700,
              marginBottom: "16px",
              lineHeight: "1.12",
            }}
          >
            Residency In Progress
          </div>

          <div
            style={{
              color: "#61756a",
              lineHeight: "1.9",
              fontSize: "17px",
              marginBottom: "28px",
            }}
          >
            Continue participating in restorative practices, guided reflective
            experiences, and metabolic recovery continuity.
          </div>

          <button
            style={{
              background: "#244837",
              color: "white",
              border: "none",
              borderRadius: "999px",
              padding: "16px 28px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            View Residency Flow
          </button>
        </div>

        {/* HEALTH SNAPSHOT */}

        <div
          style={{
            background: "rgba(255,255,255,0.65)",
            borderRadius: "34px",
            padding: "34px",
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
              marginBottom: "28px",
            }}
          >
            Health Snapshot
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "28px",
            }}
          >
            {healthCards.map((card, index) => (
              <div key={index}>
                <div
                  style={{
                    fontSize: "18px",
                    marginBottom: "12px",
                    fontWeight: 600,
                  }}
                >
                  {card.title}
                </div>

                <div
                  style={{
                    fontSize: isMobile ? "30px" : "38px",
                    lineHeight: "1.1",
                    marginBottom: "14px",
                    fontWeight: 700,
                  }}
                >
                  {card.value}
                </div>

                <div
                  style={{
                    color: "#7a8b81",
                    lineHeight: "1.8",
                    fontSize: "15px",
                  }}
                >
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* JOURNEY TIMELINE */}

        <div
          style={{
            background: "rgba(255,255,255,0.68)",
            borderRadius: "34px",
            padding: isMobile ? "26px" : "34px",
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
              marginBottom: "28px",
            }}
          >
            Journey Timeline
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              gap: isMobile ? "22px" : "12px",
            }}
          >
            {[
              "Enrollment",
              "Diagnostics",
              "Residency",
              "Recovery",
              "Longitudinal Continuity",
            ].map((step, index) => {
              const active = step === "Residency";

              return (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "999px",
                      background: active ? "#244837" : "#c8d5cc",
                      flexShrink: 0,
                    }}
                  />

                  <div
                    style={{
                      color: active ? "#244837" : "#819287",
                      fontWeight: active ? 700 : 500,
                      lineHeight: "1.5",
                    }}
                  >
                    {step}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RESIDENCY CONTINUITY */}}

        <div
          style={{
            marginBottom: "120px",
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
            Residency Continuity
          </div>

          {residencyUpdates.map((update, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.72)",
                borderRadius: "28px",
                padding: isMobile ? "22px" : "28px",
                border: "1px solid #dde7df",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#819287",
                  marginBottom: "14px",
                }}
              >
                {update.type}
              </div>

              <div
                style={{
                  fontSize: isMobile ? "28px" : "34px",
                  lineHeight: "1.18",
                  fontWeight: 700,
                  marginBottom: "14px",
                }}
              >
                {update.title}
              </div>

              <div
                style={{
                  color: "#61756a",
                  lineHeight: "1.9",
                  fontSize: "16px",
                }}
              >
                {update.description}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM NAVIGATION */}

        <div
          style={{
            position: "fixed",
            bottom: "18px",
            left: "50%",
            transform: "translateX(-50%)",
            width: isMobile ? "92%" : "720px",
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(18px)",
            border: "1px solid #dde7df",
            borderRadius: "999px",
            padding: "14px 10px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            boxShadow: "0 10px 32px rgba(31,45,38,0.08)",
          }}
        >
          {[
            "Journey",
            "Reflect",
            "Dossier",
            "Support",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                fontSize: "14px",
                color: index === 0 ? "#244837" : "#74877d",
                fontWeight: index === 0 ? 700 : 500,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
