import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ReportsPage() {

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
        Loading Reports...
      </div>
    )
  }

  const reports = [

    {
      title: "Preventive Health Profile",
      type: "Comprehensive Dossier",
      date: "May 2026",
      status: "Latest",
    },

    {
      title: "Cognitive Flow Reflection",
      type: "Narrative Reflection",
      date: "May 2026",
      status: "Latest",
    },

    {
      title: "Residency Progress Review",
      type: "Longitudinal Continuity",
      date: "April 2026",
      status: "Archived",
    },
  ]

    const recoveryTimeline = [

    {
      phase: "PRE Assessment",
      status: "Completed",
      date: "April 2026",
    },

    {
      phase: "Residency",
      status: "Completed",
      date: "April 2026",
    },

    {
      phase: "POST Recovery Reflection",
      status: "Completed",
      date: "May 2026",
    },

    {
      phase: "Follow-up Reflection",
      status: "Upcoming",
      date: "June 2026",
    },
  ]
  return (

    <div className="min-h-screen bg-[#f5f7f4] px-6 py-10 text-[#1f2937]">

      <div className="max-w-5xl mx-auto space-y-10">

        {/* HERO */}

        <section className="bg-white rounded-3xl border border-[#e5e7eb] p-10 shadow-sm">

          <div className="space-y-5">

            <div className="inline-flex items-center rounded-full bg-[#eef5ee] px-4 py-2 text-sm text-[#3b5d44]">
              Longitudinal Continuity
            </div>

            <div>

              <h1 className="text-4xl font-semibold tracking-tight text-[#1e293b]">
                {participant.name}'s Reports
              </h1>

              <p className="mt-4 text-lg leading-relaxed text-[#4b5563] max-w-3xl">
                Your longitudinal reflections, recovery guidance,
                and preventive health continuity.
              </p>
            </div>

            <div className="text-sm text-[#94a3b8]">
              Token: {participant.token}
            </div>
          </div>
        </section>

        {/* CURRENT SCORES */}

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl border border-[#e5e7eb] p-8 shadow-sm">

            <div className="text-sm uppercase tracking-wide text-[#6b7280]">
              Mind / Flow
            </div>

            <div className="mt-4 text-5xl font-semibold text-[#1e293b]">
              {participant.flow}
              <span className="text-2xl text-[#6b7280]"> /100</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#e5e7eb] p-8 shadow-sm">

            <div className="text-sm uppercase tracking-wide text-[#6b7280]">
              Body Vitality
            </div>

            <div className="mt-4 text-5xl font-semibold text-[#1e293b]">
              {participant.vitality}
              <span className="text-2xl text-[#6b7280]"> /100</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-[#e5e7eb] p-8 shadow-sm">

            <div className="text-sm uppercase tracking-wide text-[#6b7280]">
              Current Momentum
            </div>

            <div className="mt-4 text-3xl font-semibold text-[#1f4d3b]">
              {participant.momentum}
            </div>
          </div>
        </section>
        {/* LONGITUDINAL TIMELINE */}

        <section className="bg-white rounded-3xl border border-[#e5e7eb] p-8 shadow-sm">

          <div>

            <h2 className="text-2xl font-semibold text-[#1e293b]">
              Recovery Timeline
            </h2>

            <p className="mt-2 text-[#6b7280]">
              Your longitudinal restorative journey across reflection,
              residency, and recovery continuity.
            </p>
          </div>

          <div className="mt-10 space-y-6">

            {recoveryTimeline.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-5"
              >

                <div className="mt-1 w-5 h-5 rounded-full bg-[#1f4d3b]"></div>

                <div className="flex-1">

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                    <div className="text-lg font-semibold text-[#1e293b]">
                      {item.phase}
                    </div>

                    <div className={`text-sm px-4 py-2 rounded-full w-fit ${
                      item.status === "Upcoming"
                        ? "bg-[#f3f4f6] text-[#6b7280]"
                        : "bg-[#eef5ee] text-[#1f4d3b]"
                    }`}>
                      {item.status}
                    </div>
                  </div>

                  <div className="mt-2 text-sm text-[#94a3b8]">
                    {item.date}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </section>

        {/* REPORT ARCHIVE */}

        <section className="bg-white rounded-3xl border border-[#e5e7eb] p-8 shadow-sm">

          <div>

            <h2 className="text-2xl font-semibold text-[#1e293b]">
              Report Archive
            </h2>

            <p className="mt-2 text-[#6b7280]">
              Longitudinal recovery records and reflective continuity.
            </p>
          </div>

          <div className="mt-8 space-y-5">

            {reports.map((report, index) => (

              <div
                key={index}
                className="rounded-2xl border border-[#e5e7eb] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:bg-[#fafaf9] transition"
              >

                <div>

                  <div className="text-xl font-semibold text-[#1e293b]">
                    {report.title}
                  </div>

                  <div className="mt-2 text-sm text-[#6b7280]">
                    {report.type}
                  </div>

                  <div className="mt-3 text-sm text-[#94a3b8]">
                    {report.date}
                  </div>
                </div>

                <div className="flex items-center gap-4">

                  <div className={`text-sm px-4 py-2 rounded-full ${
                    report.status === "Latest"
                      ? "bg-[#eef5ee] text-[#1f4d3b]"
                      : "bg-[#f3f4f6] text-[#6b7280]"
                  }`}>
                    {report.status}
                  </div>

                  <a
href={
  report.title === "Preventive Health Profile"
    ? `/reports/${participant.token}/preventive-health`

    : report.title === "Cognitive Flow Reflection"
    ? `/reports/${participant.token}/cognitive-flow`

    : `/reports/${participant.token}`
}
  className="rounded-xl border border-[#d1d5db] bg-white px-5 py-2 text-sm font-medium text-[#374151] hover:bg-[#f9fafb] transition inline-block"
>
  Open Report
</a>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* CURRENT STATE */}

        <section className="bg-[#eef5ee] rounded-3xl border border-[#dbe7dc] p-10">

          <div className="max-w-4xl">

            <div className="text-sm uppercase tracking-wide text-[#6b7280]">
              Current Cognitive State
            </div>

            <h2 className="mt-3 text-4xl font-semibold text-[#1e293b] leading-tight">
              {participant.cognitiveState}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#4b5563]">
              Longitudinal assessment patterns suggest continued progress in
              restorative recovery, emotional steadiness, and reflective clarity.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-white rounded-2xl p-6 border border-[#dbe7dc]">

                <div className="text-sm uppercase tracking-wide text-[#6b7280]">
                  Mind / Flow
                </div>

                <div className="mt-3 text-3xl font-semibold text-[#1e293b]">
                  {participant.flow}/100
                </div>

              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#dbe7dc]">

                <div className="text-sm uppercase tracking-wide text-[#6b7280]">
                  Body Vitality
                </div>

                <div className="mt-3 text-3xl font-semibold text-[#1e293b]">
                  {participant.vitality}/100
                </div>

              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#dbe7dc]">

                <div className="text-sm uppercase tracking-wide text-[#6b7280]">
                  Recovery Momentum
                </div>

                <div className="mt-3 text-xl font-semibold text-[#1f4d3b]">
                  {participant.momentum}
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* REFLECTION */}

        <section className="bg-[#eef5ee] rounded-3xl border border-[#dbe7dc] p-10">

          <div className="max-w-3xl">

            <div className="text-sm uppercase tracking-wide text-[#6b7280]">
              Recovery Reflection
            </div>

            <h2 className="mt-3 text-3xl font-semibold text-[#1e293b] leading-tight">
              {participant.cognitiveState}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#4b5563]">
              Your longitudinal patterns suggest continued restorative
              improvement through reflection, consistency, and vitality support.
            </p>

            <div className="mt-8">

              <a
                href={`/t/${participant.token}`}
                className="rounded-2xl bg-[#1f4d3b] text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition inline-block"
              >
                Return to Journey
              </a>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}