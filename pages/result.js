import { useRouter } from 'next/router'

export default function ResultPage() {

  const router = useRouter()

  const {
    score = "0",
    state = "Reflective",
    insight = "Awareness is often the first step toward steadier recovery.",
    reflection = ""
  } = router.query

  return (
    <div className="min-h-screen bg-[#edf4ef] text-[#203128] px-5 py-10">

      <div className="max-w-2xl mx-auto">

        {/* HERO */}

        <section className="bg-white/80 border border-[#dbe6de] rounded-[34px] px-8 py-10 shadow-[0_18px_42px_rgba(31,45,38,0.05)] mb-8">

          <div className="text-[11px] tracking-[0.24em] uppercase text-[#71857a] font-semibold mb-5">
            Flow in Mind · Vitality in Body
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-[1.12] text-[#1f2d25] mb-6">
            Your Cognitive State:
            <br />
            {state}
          </h1>

          <p className="text-[17px] leading-[1.9] text-[#62756b]">
            {insight}
          </p>

        </section>


        {/* FLOW SCORE */}

        <section className="bg-white border border-[#dbe6de] rounded-[30px] px-8 py-8 shadow-[0_16px_34px_rgba(31,45,38,0.05)] mb-8">

          <div className="text-[12px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-5">
            Cognitive Flow
          </div>

          <div className="text-[64px] font-bold leading-none text-[#244837] mb-5">
            {score} / 100
          </div>

          <div className="w-full h-[10px] bg-[#e3ece5] rounded-full overflow-hidden mb-5">

            <div
              className="h-full rounded-full bg-[#274838]"
              style={{ width: `${score}%` }}
            />

          </div>

          <p className="text-[16px] leading-[1.9] text-[#64776d]">
            Awareness is often the first step toward steadier recovery.
          </p>

        </section>


        {/* DOMAIN REFLECTION */}

        <section className="bg-white/80 border border-[#dbe6de] rounded-[30px] px-8 py-8 shadow-[0_16px_34px_rgba(31,45,38,0.05)] mb-8">

          <div className="text-[12px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-5">
            Mind / Flow Reflection
          </div>

          <div className="text-[16px] leading-[2] text-[#64776d] whitespace-pre-line">
            {reflection}
          </div>

        </section>


        {/* EMOTIONAL CONTINUITY */}

        <section className="bg-white/70 border border-[#dbe6de] rounded-[30px] px-8 py-8 shadow-[0_16px_34px_rgba(31,45,38,0.05)] mb-8">

          <div className="text-[12px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-5">
            Reflective Continuity
          </div>

          <div className="text-[16px] leading-[1.95] text-[#64776d] space-y-5">

            <p>
              Many people continue functioning externally while quietly carrying persistent cognitive fatigue, emotional overload, and restorative imbalance internally.
            </p>

            <p>
              Awareness is often the first step toward steadier recovery.
            </p>

          </div>

        </section>


        {/* CONTINUE JOURNEY */}

        <section className="bg-gradient-to-b from-[#f7fbf8] to-[#edf5ef] border border-[#dbe6de] rounded-[30px] px-8 py-8 shadow-[0_16px_34px_rgba(31,45,38,0.05)]">

          <div className="text-[12px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-5">
            Continue Your Journey
          </div>

          <h2 className="text-[30px] leading-[1.35] font-bold text-[#244837] mb-5">
            Would you like to continue your Moodforest journey?
          </h2>

          <p className="text-[16px] leading-[1.95] text-[#64776d] mb-8">
            You can continue tracking your reflective continuity, emotional steadiness, and restorative recovery over time through a private Moodforest journey link.
          </p>

          <a
            href={`https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-perma/Journey_Continuity/2RgDEBzbrnkfkgv6HWPVC1zsqggMN4PsUBZRdfAbKPs3MvRqnea9rrbqCgAFBqCZHGRgAhTb9Q73FXAuO3XrEVdJ8rwuVDy68Bsg?score=${score}&state=${state}&insight=${insight}`}
            className="inline-flex items-center justify-center rounded-full bg-[#274838] text-white px-7 py-4 text-sm font-semibold shadow-[0_10px_24px_rgba(39,72,56,0.16)] hover:opacity-95 transition"
          >
            Continue My Journey
          </a>

        </section>

      </div>

    </div>
  )
}