import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CognitiveFlowReflection() {

  const router = useRouter()
  const { token } = router.query

  const [participant, setParticipant] = useState(null)

  useEffect(() => {

    if (!token) return

    fetch(`/api/participant/${token}`)
      .then((res) => res.json())
      .then((data) => {
        setParticipant(data)
      })

  }, [token])

  if (!participant) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f7f4] text-[#1e293b]">
        Loading Cognitive Reflection...
      </div>
    )
  }

  const domains = [

    {
      title: "Cognitive Clarity",
      score: 74,
      insight:
        "Mental processing and attentional steadiness appear progressively stabilizing.",
    },

    {
      title: "Emotional Resilience",
      score: 69,
      insight:
        "Emotional regulation patterns suggest meaningful restorative potential.",
    },

    {
      title: "Somatic Balance",
      score: 64,
      insight:
        "Body-mind restorative rhythms may strengthen through continued recovery.",
    },

    {
      title: "Meaning & Engagement",
      score: 78,
      insight:
        "Purpose orientation and reflective engagement appear relatively preserved.",
    },

    {
      title: "Future Orientation",
      score: 73,
      insight:
        "Future-directed cognition suggests gradual rebuilding of emotional steadiness.",
    },
  ]

  return (

    <div className="min-h-screen bg-[#f5f7f4] text-[#1f2937] px-6 py-10">

      <div className="max-w-6xl mx-auto space-y-10">

        {/* HERO */}

        <section className="bg-white rounded-3xl border border-[#e5e7eb] p-10 shadow-sm">

          <div className="space-y-5">

            <div className="inline-flex items-center rounded-full bg-[#eef5ee] px-4 py-2 text-sm text-[#3b5d44]">
              Cognitive Flow Reflection
            </div>

            <div>

              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1e293b]">
                Mind / Flow Continuity
              </h1>

              <p className="mt-4 text-lg leading-relaxed text-[#4b5563] max-w-3xl">
                Reflective cognitive continuity and emotional recovery
                interpretation for {participant.name}.
              </p>

            </div>

            <div className="text-sm text-[#94a3b8]">
              Token: {participant.token}
            </div>

          </div>
        </section>

        {/* FLOW SUMMARY */}

        <section className="bg-[#eef5ee] rounded-3xl border border-[#dbe7dc] p-10">

          <div className="max-w-4xl">

            <div className="text-sm uppercase tracking-wide text-[#6b7280]">
              Current Cognitive State
            </div>

            <h2 className="mt-3 text-4xl font-semibold text-[#1e293b]">
              {participant.cognitiveState}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#4b5563]">
              Longitudinal reflection patterns suggest continued progress in
              cognitive steadiness, emotional resilience, and restorative clarity.
            </p>

            <div className="mt-8">

              <div className="bg-white rounded-2xl p-6 border border-[#dbe7dc] w-fit">

                <div className="text-sm uppercase tracking-wide text-[#6b7280]">
                  Mind / Flow Score
                </div>

                <div className="mt-3 text-5xl font-semibold text-[#1e293b]">
                  {participant.flow}/100
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* DOMAIN GRID */}

        <section>

          <div className="mb-6">

            <h2 className="text-2xl font-semibold text-[#1e293b]">
              Reflective Domains
            </h2>

            <p className="mt-2 text-[#6b7280]">
              Longitudinal interpretation across cognitive, emotional,
              somatic, and reflective continuity.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {domains.map((domain, index) => (

              <div
                key={index}
                className="bg-white rounded-3xl border border-[#e5e7eb] p-8 shadow-sm"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <div className="text-xl font-semibold text-[#1e293b]">
                      {domain.title}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-[#4b5563]">
                      {domain.insight}
                    </p>

                  </div>

                  <div className="text-3xl font-semibold text-[#1f4d3b]">
                    {domain.score}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </section>

        {/* REFLECTIVE GUIDANCE */}

        <section className="bg-white rounded-3xl border border-[#e5e7eb] p-10 shadow-sm">

          <div className="max-w-4xl">

            <div className="text-sm uppercase tracking-wide text-[#6b7280]">
              Reflective Guidance
            </div>

            <h2 className="mt-3 text-3xl font-semibold text-[#1e293b]">
              Recovery often emerges through steadiness, rhythm, and reflection.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#4b5563]">
              Longitudinal cognitive patterns suggest that reflective continuity,
              emotional regulation, restorative sleep, meaningful connection,
              and gradual vitality rebuilding may continue strengthening
              cognitive flow over time.
            </p>

            <div className="mt-8">

              <a
                href={`/reports/${participant.token}`}
                className="rounded-2xl bg-[#1f4d3b] text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition inline-block"
              >
                Return to Reports
              </a>

            </div>

          </div>
        </section>

      </div>
    </div>
  )
}