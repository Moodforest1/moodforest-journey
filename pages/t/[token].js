import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function MoodforestJourneyPage() {

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
        Loading Journey...
      </div>
    )
  }

  const timeline = [

    {
      label: "Initial Reflection",
      completed: true,
    },

    {
      label: "Residency",
      completed: true,
    },

    {
      label: participant.nextStep,
      completed: false,
    },
  ]

  const reports = [

    {
      title: "Preventive Health Profile",
      subtitle: "Mind, Body & Biomarker Continuity",
    },

    {
      title: "Cognitive Flow Reflection",
      subtitle: "Reflection & Cognitive Narrative",
    },
  ]

  return (

    <div className="min-h-screen bg-[#f5f7f4] text-[#1f2937] px-6 py-10">

      <div className="max-w-5xl mx-auto space-y-10">

        {/* HERO */}

        <section className="bg-white rounded-3xl shadow-sm border border-[#e5e7eb] p-10">

          <div className="space-y-5">

            <div className="inline-flex items-center rounded-full bg-[#eef5ee] px-4 py-2 text-sm text-[#3b5d44]">
              Flow in Mind • Vitality in Body
            </div>

            <div>

              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1e293b]">
                Welcome back, {participant.name}
              </h1>

              <p className="mt-4 text-lg leading-relaxed text-[#4b5563] max-w-3xl">
                Your Moodforest journey continues through reflection,
                restorative recovery, and longitudinal vitality tracking.
              </p>

            </div>

            <div className="text-sm text-[#94a3b8]">
              Token: {participant.token}
            </div>

            <div className="pt-3 flex flex-wrap gap-4">

              <a
                href={`https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-perma/Cognitive_Flow_Assessment/vpFXQWs4VqRJ8nkNRTOdgW8qVat6Z2u2D4QPMM0VveKq619fQKOxDW0WGDtHYdyJZ1yepZXJN4V31vCGUzHbDCPmgdSeDUxaXwF1?Access_Token=${participant.token}`}
                target="_blank"
                className="rounded-2xl bg-[#1f4d3b] text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition inline-block"
              >
                Continue Reflection
              </a>

              <a
                href={`/reports/${participant.token}`}
                className="rounded-2xl border border-[#d1d5db] bg-white px-6 py-3 text-sm font-medium text-[#374151] hover:bg-[#f9fafb] transition inline-block"
              >
                View Latest Report
              </a>

            </div>
          </div>
        </section>

        {/* SCORE CARDS */}

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-8 border border-[#e5e7eb] shadow-sm">

            <div className="text-sm uppercase tracking-wide text-[#6b7280]">
              Mind / Flow
            </div>

            <div className="mt-4 text-5xl font-semibold text-[#1e293b]">
              {participant.flow}
              <span className="text-2xl text-[#6b7280]"> /100</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#4b5563]">
              {participant.cognitiveState}
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#e5e7eb] shadow-sm">

            <div className="text-sm uppercase tracking-wide text-[#6b7280]">
              Body Vitality
            </div>

            <div className="mt-4 text-5xl font-semibold text-[#1e293b]">
              {participant.vitality}
              <span className="text-2xl text-[#6b7280]"> /100</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#4b5563]">
              Metabolic resilience, inflammation balance,
              cardio health, and vitality.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#e5e7eb] shadow-sm">

            <div className="text-sm uppercase tracking-wide text-[#6b7280]">
              Current Momentum
            </div>

            <div className="mt-4 text-3xl font-semibold text-[#1f4d3b] leading-tight">
              {participant.momentum}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#4b5563]">
              Longitudinal trends suggest meaningful recovery progression.
            </p>

          </div>
        </section>

        {/* JOURNEY */}

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-3xl p-8 border border-[#e5e7eb] shadow-sm">

            <h2 className="text-2xl font-semibold text-[#1e293b]">
              Your Journey
            </h2>

            <div className="mt-8 space-y-5">

              {timeline.map((item, index) => (

                <div key={index} className="flex items-center gap-4">

                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      item.completed
                        ? "bg-[#1f4d3b] border-[#1f4d3b]"
                        : "border-[#9ca3af]"
                    }`}
                  >
                    {item.completed && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>

                  <div className="text-base text-[#374151]">
                    {item.label}
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#e5e7eb] shadow-sm">

            <div className="text-sm uppercase tracking-wide text-[#6b7280]">
              Next Step
            </div>

            <h2 className="mt-3 text-3xl font-semibold text-[#1e293b] leading-tight">
              {participant.nextStep}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#4b5563]">
              Continue your recovery journey through reflective assessment
              and longitudinal follow-up.
            </p>

            <div className="mt-8">

              <a
                href={`https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-perma/Cognitive_Flow_Assessment/vpFXQWs4VqRJ8nkNRTOdgW8qVat6Z2u2D4QPMM0VveKq619fQKOxDW0WGDtHYdyJZ1yepZXJN4V31vCGUzHbDCPmgdSeDUxaXwF1?Access_Token=${participant.token}`}
                target="_blank"
                className="rounded-2xl bg-[#1f4d3b] text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition inline-block"
              >
                Begin Follow-up Reflection
              </a>

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}