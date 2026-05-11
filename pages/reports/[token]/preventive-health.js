import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function PreventiveHealthProfile() {

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
        Loading Preventive Profile...
      </div>
    )
  }

  const domains = [

    {
      title: "Cardio Lipids",
      score: 72,
      insight: "Cardiovascular markers show improving balance and resilience.",
    },

    {
      title: "Metabolic Resilience",
      score: 68,
      insight: "Metabolic patterns suggest moderate adaptive recovery potential.",
    },

    {
      title: "Inflammation Regulation",
      score: 63,
      insight: "Inflammatory balance may improve further through restorative recovery.",
    },

    {
      title: "Vitamin Status",
      score: 74,
      insight: "Nutritional reserve and micronutrient support appear stable.",
    },

    {
      title: "Lower Function",
      score: 59,
      insight: "Physical steadiness and restorative strength remain recoverable.",
    },

    {
      title: "Belly Balance",
      score: 65,
      insight: "Digestive and abdominal regulation show moderate continuity.",
    },
  ]

  return (

    <div className="min-h-screen bg-[#f5f7f4] text-[#1f2937] px-6 py-10">

      <div className="max-w-6xl mx-auto space-y-10">

        {/* HERO */}

        <section className="bg-white rounded-3xl border border-[#e5e7eb] p-10 shadow-sm">

          <div className="space-y-5">

            <div className="inline-flex items-center rounded-full bg-[#eef5ee] px-4 py-2 text-sm text-[#3b5d44]">
              Preventive Health Profile
            </div>

            <div>

              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1e293b]">
                Body Vitality Continuity
              </h1>

              <p className="mt-4 text-lg leading-relaxed text-[#4b5563] max-w-3xl">
                Longitudinal biomarker interpretation and restorative
                vitality guidance for {participant.name}.
              </p>

            </div>

            <div className="text-sm text-[#94a3b8]">
              Token: {participant.token}
            </div>

          </div>
        </section>

        {/* VITALITY SUMMARY */}

        <section className="bg-[#eef5ee] rounded-3xl border border-[#dbe7dc] p-10">

          <div className="max-w-4xl">

            <div className="text-sm uppercase tracking-wide text-[#6b7280]">
              Current Vitality State
            </div>

            <h2 className="mt-3 text-4xl font-semibold text-[#1e293b]">
              Body Vitality: {participant.vitality}/100
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#4b5563]">
              Your current longitudinal biomarker patterns suggest gradual
              recovery progression with meaningful restorative potential.
            </p>

          </div>
        </section>

        {/* DOMAIN GRID */}

        <section>

          <div className="mb-6">

            <h2 className="text-2xl font-semibold text-[#1e293b]">
              Vitality Domains
            </h2>

            <p className="mt-2 text-[#6b7280]">
              Preventive interpretation across metabolic, inflammatory,
              cardiovascular, and restorative domains.
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

        {/* LONGITUDINAL GUIDANCE */}

        <section className="bg-white rounded-3xl border border-[#e5e7eb] p-10 shadow-sm">

          <div className="max-w-4xl">

            <div className="text-sm uppercase tracking-wide text-[#6b7280]">
              Longitudinal Guidance
            </div>

            <h2 className="mt-3 text-3xl font-semibold text-[#1e293b]">
              Recovery is often gradual, rhythmic, and cumulative.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#4b5563]">
              Longitudinal vitality patterns suggest that sustained restorative
              practices, reflective continuity, sleep regulation, movement,
              nutrition, and emotional steadiness may continue improving
              biomarker resilience over time.
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