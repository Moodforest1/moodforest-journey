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

    <div className="min-h-screen bg-[#edf4ef] text-[#203128] px-3 py-5">

      <div className="max-w-2xl mx-auto space-y-5">


        {/* HERO */}

        <section className="bg-white/85 border border-[#dbe6de] rounded-[24px] px-5 py-7 shadow-[0_10px_24px_rgba(31,45,38,0.04)]">

          <div className="text-[10px] tracking-[0.22em] uppercase text-[#71857a] font-semibold mb-4">
            Flow in Mind · Vitality in Body
          </div>

          <h1 className="text-[34px] leading-[1.08] font-bold text-[#1f2d25] mb-5">
            Your Cognitive State:
            <br />
            {state}
          </h1>

          <p className="text-[15px] leading-[1.85] text-[#62756b]">
            {insight}
          </p>

        </section>


        {/* FLOW SCORE */}

        <section className="bg-white border border-[#dbe6de] rounded-[22px] px-5 py-6 shadow-[0_10px_24px_rgba(31,45,38,0.04)]">

          <div className="text-[11px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
            Cognitive Flow
          </div>

          <div className="text-[52px] font-bold leading-none text-[#244837] mb-4">
            {score} / 100
          </div>

          <div className="w-full h-[8px] bg-[#e3ece5] rounded-full overflow-hidden mb-4">

            <div
              className="h-full rounded-full bg-[#274838]"
              style={{ width: `${score}%` }}
            />

          </div>

          <p className="text-[15px] leading-[1.85] text-[#64776d]">
            Awareness is often the first step toward steadier recovery.
          </p>

        </section>


        {/* REFLECTION */}

        <section className="bg-white/85 border border-[#dbe6de] rounded-[22px] px-5 py-6 shadow-[0_10px_24px_rgba(31,45,38,0.04)]">

          <div className="text-[11px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
            Mind / Flow Reflection
          </div>

          <div className="text-[15px] leading-[1.95] text-[#64776d] whitespace-pre-line">
            {reflection}
          </div>

        </section>


        {/* NEXT STEPS */}

        <section className="bg-white/75 border border-[#dbe6de] rounded-[22px] px-5 py-6 shadow-[0_10px_24px_rgba(31,45,38,0.04)]">

          <div className="text-[11px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
            Where Would You Like To Go From Here?
          </div>

          <div className="text-[15px] leading-[1.9] text-[#64776d] mb-7">

            Some people simply pause here for reflection, while others choose to explore deeper questions around recovery, vitality, emotional steadiness, and cognitive flow.

          </div>


          {/* VIDEO */}

          <div className="bg-[#f7faf8] border border-[#dfe8e1] rounded-[18px] px-4 py-5 mb-5">

            <div className="text-[10px] tracking-[0.18em] uppercase text-[#7b8f84] font-semibold mb-4">
              Reflective Video
            </div>

            <div className="text-[15px] leading-[1.85] text-[#64776d] mb-5">
              Watch a short reflection on cognitive flow, restorative recovery, emotional steadiness, and whole-person vitality.
            </div>

            <div className="rounded-[16px] overflow-hidden border border-[#dbe6de]">

              <div className="relative w-full pt-[56.25%]">

                <iframe
                  src="https://www.youtube.com/embed/Btsc55GIljI"
                  title="Moodforest Reflection"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>

              </div>

            </div>

          </div>


          {/* QUESTION */}

          <div className="bg-[#f7faf8] border border-[#dfe8e1] rounded-[18px] px-4 py-5 mb-8">

            <div className="text-[10px] tracking-[0.18em] uppercase text-[#7b8f84] font-semibold mb-4">
              Question & Reflection
            </div>

            <div className="text-[15px] leading-[1.9] text-[#64776d] mb-5">

              If something in this reflection resonated with you, you’re welcome to continue the conversation gently through WhatsApp.

            </div>

            <button
              onClick={() => setShowQuestionForm(!showQuestionForm)}
              className="inline-flex items-center justify-center rounded-full border border-[#274838] text-[#274838] px-6 py-3.5 text-[14px] font-semibold hover:bg-[#f1f6f3] transition"
            >
              Continue the Conversation
            </button>

            {showQuestionForm && (

              <div className="mt-6 rounded-[16px] overflow-hidden border border-[#dfe8e1]">

                <iframe
                  height="360px"
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


          {/* JOURNEY */}

          <div className="border-t border-[#dbe6de] pt-7">

            <div className="text-[11px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
              A Gradual Journey Toward Restorative Vitality
            </div>

            <div className="text-[15px] leading-[1.9] text-[#64776d] mb-7">

              Others gradually choose to explore deeper restorative continuity, emotional steadiness, preventive vitality, physiological rhythms, and whole-person flourishing over time.

            </div>


            {/* JOURNEY STAGES */}

            <div className="space-y-4 mb-7">

              <div className="bg-[#f7faf8] border border-[#dfe8e1] rounded-[18px] px-4 py-5">

                <div className="text-[16px] font-semibold text-[#274838] mb-2">
                  Reflective Continuity
                </div>

                <div className="text-[14px] leading-[1.85] text-[#64776d]">
                  Initial onboarding, reflective continuity, psychological understanding, and guided cognitive flow exploration.
                </div>

              </div>


              <div className="bg-[#f7faf8] border border-[#dfe8e1] rounded-[18px] px-4 py-5">

                <div className="text-[16px] font-semibold text-[#274838] mb-2">
                  Bio-Vitality Understanding
                </div>

                <div className="text-[14px] leading-[1.85] text-[#64776d]">
                  Biomarkers, body rhythms, preventive vitality understanding, physiological restoration, and guided consultation.
                </div>

              </div>


              <div className="bg-[#f7faf8] border border-[#dfe8e1] rounded-[18px] px-4 py-5">

                <div className="text-[16px] font-semibold text-[#274838] mb-2">
                  Restorative Residency
                </div>

                <div className="text-[14px] leading-[1.85] text-[#64776d]">
                  A restorative residency experience centered around recovery rhythms, metabolic restoration, emotional steadiness, fasting support, and preventive vitality.
                </div>

              </div>

            </div>


            <div className="text-[14px] leading-[1.85] text-[#64776d] mb-6">

              There is no expectation to move beyond reflection unless it feels meaningful or appropriate for you.

            </div>


            <button
              onClick={() => setShowJourneyForm(!showJourneyForm)}
              className="inline-flex items-center justify-center rounded-full bg-[#274838] text-white px-6 py-3.5 text-[14px] font-semibold shadow-[0_8px_20px_rgba(39,72,56,0.12)] hover:opacity-95 transition"
            >
              Begin My Moodforest Journey
            </button>


            {showJourneyForm && (

              <div className="mt-6 rounded-[16px] overflow-hidden border border-[#dfe8e1]">

                <iframe
                  height="360px"
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


          {/* SHARE */}

          <div className="border-t border-[#dbe6de] pt-7 mt-8">

            <div className="text-[11px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
              Share Reflection
            </div>

            <div className="text-[15px] leading-[1.9] text-[#64776d] mb-6">

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
              className="inline-flex items-center justify-center rounded-full border border-[#274838] text-[#274838] px-6 py-3.5 text-[14px] font-semibold hover:bg-[#f1f6f3] transition"
            >
              Share Moodforest Reflection
            </a>

          </div>

        </section>


        {/* WHOLE PERSON */}

        <section className="bg-gradient-to-b from-[#f7fbf8] to-[#edf5ef] border border-[#dbe6de] rounded-[22px] px-5 py-6 shadow-[0_10px_24px_rgba(31,45,38,0.04)]">

          <div className="text-[11px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
            Whole-Person Preventive Vitality
          </div>

          <div className="text-[15px] leading-[1.9] text-[#64776d] space-y-5">

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