export default function MoodforestJourneyPage() {
  const participant = {
    name: "Vipin",
    flow: 72,
    vitality: 61,
    momentum: "Building Momentum",
    nextStep: "Follow-up Reflection",
  };

  const timeline = [
    { label: "Initial Reflection", completed: true },
    { label: "Residency", completed: true },
    { label: "Follow-up Reflection", completed: false },
  ];

  const reports = [
    {
      title: "Preventive Health Profile",
      subtitle: "Mind, Body & Biomarker Continuity",
      link: "#",
    },
    {
      title: "Cognitive Flow Reflection",
      subtitle: "Reflection & Cognitive Narrative",
      link: "#",
    },
  ];

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
                Your Moodforest journey continues through reflection, restorative recovery,
                and longitudinal vitality tracking.
              </p>
            </div>

            <div className="pt-3 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-[#1f4d3b] text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition">
                Continue Reflection
              </button>

              <button className="rounded-2xl border border-[#d1d5db] bg-white px-6 py-3 text-sm font-medium text-[#374151] hover:bg-[#f9fafb] transition">
                View Latest Report
              </button>
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
              Cognitive clarity, emotional resilience, and restorative rhythm.
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
              Metabolic resilience, inflammation balance, cardio health, and vitality.
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

        {/* TIMELINE + NEXT STEP */}
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
              Continue your recovery journey through reflective assessment and longitudinal follow-up.
            </p>

            <div className="mt-8">
              <button className="rounded-2xl bg-[#1f4d3b] text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition">
                Begin Follow-up Reflection
              </button>
            </div>
          </div>
        </section>

        {/* REPORTS */}
        <section className="bg-white rounded-3xl p-8 border border-[#e5e7eb] shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-[#1e293b]">
                Your Reports
              </h2>

              <p className="mt-2 text-[#6b7280]">
                Longitudinal reflections, biomarker continuity, and recovery guidance.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#e5e7eb] p-6 hover:bg-[#fafaf9] transition"
              >
                <div className="text-lg font-semibold text-[#1e293b]">
                  {report.title}
                </div>

                <div className="mt-2 text-sm text-[#6b7280]">
                  {report.subtitle}
                </div>

                <button className="mt-6 rounded-xl border border-[#d1d5db] px-4 py-2 text-sm font-medium text-[#374151] hover:bg-[#f9fafb] transition">
                  Open Report
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* INVITE */}
        <section className="bg-[#eef5ee] rounded-3xl p-10 border border-[#dbe7db]">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-wide text-[#55705f]">
              Continuity & Care
            </div>

            <h2 className="mt-3 text-3xl font-semibold text-[#1f2937] leading-tight">
              Invite your loved-ones to Moodforest.
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-[#4b5563]">
              Gift them a complimentary Cognitive Flow Check — because clarity,
              vitality, and emotional steadiness matter most when shared.
            </p>

            <div className="mt-8">
              <button className="rounded-2xl bg-white border border-[#d1d5db] px-6 py-3 text-sm font-medium text-[#374151] hover:bg-[#f9fafb] transition">
                Invite Someone
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
