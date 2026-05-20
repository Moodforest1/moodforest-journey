import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ResultPage() {

  const router = useRouter()

  const [showJourneyForm, setShowJourneyForm] = useState(false)

  const [showQuestionForm, setShowQuestionForm] = useState(false)

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


        {/* NEXT STEPS */}

        <section className="bg-white/70 border border-[#dbe6de] rounded-[30px] px-8 py-8 shadow-[0_16px_34px_rgba(31,45,38,0.05)] mb-8">

          <div className="text-[12px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-5">
            Where Would You Like To Go From Here?
          </div>

          <div className="text-[16px] leading-[1.95] text-[#64776d] mb-10">

            Many people choose to pause here and reflect further, while others explore deeper questions around recovery, emotional steadiness, vitality, and cognitive flow.

          </div>


          {/* VIDEO OPTION */}

          <div className="bg-[#f6faf7] border border-[#dbe6de] rounded-[26px] px-6 py-7 mb-6">

            <div className="text-[11px] tracking-[0.18em] uppercase text-[#7b8f84] font-semibold mb-4">
              Reflective Video
            </div>

            <div className="text-[16px] leading-[1.95] text-[#64776d] mb-6">
              Watch a short 5-minute reflection on cognitive flow, restorative recovery, emotional steadiness, and whole-person vitality.
            </div>

            <div className="flex justify-center">

              <div className="w-full max-w-[340px] rounded-[22px] overflow-hidden border border-[#dbe6de] shadow-[0_10px_24px_rgba(31,45,38,0.06)]">

                <iframe
                  width="100%"
                  height="605"
                  src="https://www.youtube.com/embed/Btsc55GIljI"
                  title="Moodforest Reflection"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full"
                ></iframe>

              </div>

            </div>

          </div>


          {/* QUESTION OPTION */}

          <div className="bg-[#f6faf7] border border-[#dbe6de] rounded-[26px] px-6 py-7 mb-8">

            <div className="text-[11px] tracking-[0.18em] uppercase text-[#7b8f84] font-semibold mb-4">
              Question & Reflection
            </div>

            <div className="text-[16px] leading-[1.95] text-[#64776d] mb-6">

              If something in this reflection resonated with you, you’re welcome to ask a question about recovery, vitality, emotional steadiness, or cognitive flow. Moodforest will continue the conversation gently through WhatsApp.

            </div>

            <button
              onClick={() => setShowQuestionForm(!showQuestionForm)}
              className="inline-flex items-center justify-center rounded-full border border-[#274838] text-[#274838] px-7 py-4 text-sm font-semibold hover:bg-[#f1f6f3] transition"
            >
              Continue the Conversation
            </button>

            {showQuestionForm && (

              <div className="mt-8 rounded-[26px] overflow-hidden border border-[#dbe6de] shadow-[0_10px_24px_rgba(31,45,38,0.06)]">

                <iframe
                  height="400px"
                  width="100%"
                  frameBorder="0"
                  scrolling="auto"
                  allowTransparency="true"
                  src="https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/Participant_Questions/JjmDbJkyvyASDCO9zzb9zYZ9mn8QWHjauV9uEg9YVj8aJnKAKO84tgBsfx8rmtn06sCEFmvzYX4ErCfJu3N96NuRgOJfYjm5Xtye"
                  className="w-full bg-white"
                ></iframe>

              </div>

            )}

          </div>

{/* CONTINUITY INVITATION */}

<div className="border-t border-[#dbe6de] pt-8">

  <div className="text-[12px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-5">
    A Gradual Journey Toward Restorative Vitality
  </div>

  <div className="text-[16px] leading-[1.95] text-[#64776d] mb-8">

    Some people simply pause here for reflection.

    <br /><br />

    Others gradually choose to explore deeper restorative continuity, emotional steadiness, physiological vitality, preventive recovery, and whole-person flourishing over time.

  </div>


  {/* STAGE 1 */}

  <div className="bg-[#f6faf7] border border-[#dbe6de] rounded-[24px] px-6 py-6 mb-5">

    <div className="text-[18px] font-semibold text-[#274838] mb-3">
      Reflective Continuity
    </div>

    <div className="text-[15px] leading-[1.9] text-[#64776d]">

      Initial onboarding, reflective continuity, psychological understanding, and guided cognitive flow exploration.

    </div>

  </div>


  {/* STAGE 2 */}

  <div className="bg-[#f6faf7] border border-[#dbe6de] rounded-[24px] px-6 py-6 mb-5">

    <div className="text-[18px] font-semibold text-[#274838] mb-3">
      Bio-Vitality Understanding
    </div>

    <div className="text-[15px] leading-[1.9] text-[#64776d]">

      Body measurements, biomarkers, preventive vitality understanding, physiological rhythms, and guided consultation.

    </div>

  </div>


  {/* STAGE 3 */}

  <div className="bg-[#f6faf7] border border-[#dbe6de] rounded-[24px] px-6 py-6 mb-8">

    <div className="text-[18px] font-semibold text-[#274838] mb-3">
      Restorative Residency
    </div>

    <div className="text-[15px] leading-[1.9] text-[#64776d]">

      A gradual restorative residency experience centered around recovery rhythms, emotional steadiness, metabolic restoration, fasting support, and preventive vitality.

    </div>

  </div>


  {/* SOFTENER */}

  <div className="text-[15px] leading-[1.9] text-[#64776d] mb-8">

    There is no expectation to move beyond reflection unless it feels meaningful or appropriate for you.

  </div>


  {/* CTA */}

  <button
    onClick={() => setShowJourneyForm(!showJourneyForm)}
    className="inline-flex items-center justify-center rounded-full bg-[#274838] text-white px-8 py-4 text-sm font-semibold shadow-[0_10px_24px_rgba(39,72,56,0.16)] hover:opacity-95 transition"
  >
    Begin My Moodforest Journey
  </button>


  {/* EMBEDDED FORM */}

  {showJourneyForm && (

    <div className="mt-8 rounded-[28px] overflow-hidden border border-[#dbe6de] shadow-[0_10px_24px_rgba(31,45,38,0.06)]">

      <iframe
        height="400px"
        width="100%"
        frameBorder="0"
        scrolling="auto"
        allowTransparency="true"
        src="https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/Journey_Continuity/6VVUAhPr5jeVrEeBpvW9b17WaxH4j3PHJ0Ku5wFSVwY4k8C1Pm6Me05nJ4dvmxwJPUdZe9nFOZsFmmHOK5q8F4Nzr0uVCN2Y2Htp"
        className="w-full bg-white"
      ></iframe>

    </div>

  )}

</div>


{/* SHARE REFLECTION */}

<div className="border-t border-[#dbe6de] pt-8 mt-10">

  <div className="text-[12px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-5">
    Share Reflection
  </div>

  <div className="text-[16px] leading-[1.95] text-[#64776d] mb-6">

    If this reflection felt meaningful, you may wish to gently share it with someone you care about.

    <br /><br />

    The reflection is completely anonymous — no login, identity verification, or payment required.

  </div>

  <a
    href={`https://wa.me/?text=${encodeURIComponent(
      "I came across this reflective Cognitive Flow Assessment from Moodforest and thought you might find it meaningful.\n\nIt is completely anonymous — no login, identity verification, or payment required.\n\nhttps://journey.moodforest.org/cfa"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-full border border-[#274838] text-[#274838] px-7 py-4 text-sm font-semibold hover:bg-[#f1f6f3] transition"
  >
    Share Moodforest Reflection
  </a>

</div>

</section>
        {/* WHOLE-PERSON PREVENTIVE VITALITY */}

        <section className="bg-gradient-to-b from-[#f7fbf8] to-[#edf5ef] border border-[#dbe6de] rounded-[30px] px-8 py-8 shadow-[0_16px_34px_rgba(31,45,38,0.05)]">

          <div className="text-[12px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-5">
            Whole-Person Preventive Vitality
          </div>

          <div className="text-[16px] leading-[1.95] text-[#64776d] space-y-5">

            <p>
              Cognitive flow, emotional steadiness, restorative recovery, inflammation rhythms, physiological vitality, sleep quality, metabolic resilience, and long-term flourishing are often deeply interconnected.
            </p>

            <p>
              Moodforest gradually integrates reflective continuity with whole-person preventive vitality understanding over time.
            </p>

          </div>

        </section>

      </div>

    </div>
  )
}