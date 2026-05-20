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

    <div className="min-h-screen bg-[#edf4ef] text-[#203128] px-4 py-5">

      <div className="max-w-xl mx-auto">


        {/* HERO */}

        <section className="mb-7">

          <div className="text-[10px] tracking-[0.22em] uppercase text-[#71857a] font-semibold mb-3">
            Flow in Mind · Vitality in Body
          </div>

          <h1 className="text-[30px] leading-[1.08] font-bold text-[#1f2d25] mb-4">
            Your Cognitive State:
            <br />
            {state}
          </h1>

          <p className="text-[14px] leading-[1.8] text-[#62756b]">
            {insight}
          </p>

        </section>


        {/* SCORE */}

        <section className="mb-8">

          <div className="text-[10px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-3">
            Cognitive Flow
          </div>

          <div className="text-[48px] font-bold leading-none text-[#244837] mb-4">
            {score} / 100
          </div>

          <div className="w-full h-[7px] bg-[#dfe8e1] rounded-full overflow-hidden mb-4">

            <div
              className="h-full rounded-full bg-[#274838]"
              style={{ width: `${score}%` }}
            />

          </div>

          
        </section>


        {/* REFLECTION */}

        <section className="mb-10">

          <div className="text-[10px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
            Mind / Flow Reflection
          </div>

          <div className="text-[14px] leading-[2] text-[#64776d] whitespace-pre-line">
            {reflection}
          </div>

        </section>


        {/* NEXT STEPS */}

        <section className="mb-10">

          <div className="text-[10px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
            Where Would You Like To Go From Here?
          </div>

          <div className="text-[14px] leading-[1.9] text-[#64776d] mb-7">

            Some people simply pause here for reflection, while others choose to explore deeper questions around recovery, vitality, emotional steadiness, and cognitive flow.

          </div>


          {/* VIDEO */}

<div className="mb-9 -mx-4">

  <div className="px-4">

    <div className="text-[10px] tracking-[0.18em] uppercase text-[#7b8f84] font-semibold mb-4">
      Reflective Video
    </div>

    <div className="text-[14px] leading-[1.85] text-[#64776d] mb-5">
      Watch a short reflection on cognitive flow, restorative recovery, emotional steadiness, and whole-person vitality.
    </div>

  </div>

  <div className="overflow-hidden bg-black">

    <div className="relative w-full pt-[68%]">

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

          <div className="border-t border-[#dbe6de] pt-7 mb-8">

            <div className="text-[10px] tracking-[0.18em] uppercase text-[#7b8f84] font-semibold mb-4">
              Question & Reflection
            </div>

            <div className="text-[14px] leading-[1.9] text-[#64776d] mb-5">

              If something in this reflection resonated with you, you’re welcome to ask a question or continue the conversation gently with the Moodforest team through WhatsApp.

            </div>

            <button
              onClick={() => setShowQuestionForm(!showQuestionForm)}
              className="inline-flex items-center justify-center rounded-full border border-[#274838] text-[#274838] px-5 py-3 text-[13px] font-semibold hover:bg-[#f1f6f3] transition"
            >
              Continue the Conversation
            </button>

            {showQuestionForm && (

              <div className="mt-5 overflow-hidden rounded-[12px]">

                <iframe
                  height="340px"
                  width="100%"
                  frameBorder="0"
                  scrolling="auto"
                  allowTransparency="true"
                  src="https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/Participant_Questions/JjmDbJkyvyASDCO9zzb9zYZ9mn8QWHjauV9uEg9YVj8aJnKAKO84tgBsfx8rmtn06sCEFmvzYX4ErCfJu3N96NuRgOJfYjm5Xtye"
                  className="w-full bg-transparent"
                ></iframe>

              </div>

            )}

          </div>


          {/* JOURNEY */}

          <div className="border-t border-[#dbe6de] pt-7 mb-8">

            <div className="text-[10px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
              A Gradual Journey Toward Restorative Vitality
            </div>

            <div className="text-[14px] leading-[1.9] text-[#64776d] mb-6">

              Others gradually choose to explore deeper restorative continuity, emotional steadiness, preventive vitality, physiological rhythms, and whole-person flourishing over time.

            </div>


            {/* STAGES */}

            <div className="space-y-5 mb-6">

              <div>

                <div className="text-[15px] font-semibold text-[#274838] mb-2">
                  Psycho-Profiling
                </div>

                <div className="text-[14px] leading-[1.85] text-[#64776d]">
                  Free continuity and psychological understanding over time.
                </div>

              </div>


              <div>

                <div className="text-[15px] font-semibold text-[#274838] mb-2">
                  Biomarker Profiling
                </div>

                <div className="text-[14px] leading-[1.85] text-[#64776d]">
                  Preventive vitality understanding, physiology, and guided consultation.
                </div>

              </div>


              <div>

                <div className="text-[15px] font-semibold text-[#274838] mb-2">
                  7-Day Bio-Residency
                </div>

                <div className="text-[14px] leading-[1.85] text-[#64776d]">
                  Recovery rhythms, cardio-metabolic restoration, fasting support, and whole-person vitality.
                </div>

              </div>

            </div>


            
            <button
              onClick={() => setShowJourneyForm(!showJourneyForm)}
              className="inline-flex items-center justify-center rounded-full bg-[#274838] text-white px-5 py-3 text-[13px] font-semibold hover:opacity-95 transition"
            >
              Begin My Moodforest Journey
            </button>


            {showJourneyForm && (

              <div className="mt-5 overflow-hidden rounded-[12px]">

                <iframe
                  height="340px"
                  width="100%"
                  frameBorder="0"
                  scrolling="auto"
                  allowTransparency="true"
                  src="https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/Journey_Continuity/6VVUAhPr5jeVrEeBpvW9b17WaxH4j3PHJ0Ku5wFSVwY4k8C1Pm6Me05nJ4dvmxwJPUdZe9nFOZsFmmHOK5q8F4Nzr0uVCN2Y2Htp"
                  className="w-full bg-transparent"
                ></iframe>

              </div>

            )}

          </div>


          {/* SHARE */}

          <div className="border-t border-[#dbe6de] pt-7">

            <div className="text-[10px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
              Share Reflection
            </div>

            <div className="text-[14px] leading-[1.9] text-[#64776d] mb-5">

              If this reflection felt meaningful, you may wish to gently share it with someone you care about.

              <br /><br />

              The reflection is completely anonymous — no login, identity or payment required.

            </div>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                "I came across this reflective Cognitive Flow Assessment from Moodforest and thought you might find it meaningful.\n\nIt is completely anonymous — no login, identity verification, or payment required.\n\nhttps://journey.moodforest.org/cfa"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#274838] text-[#274838] px-5 py-3 text-[13px] font-semibold hover:bg-[#f1f6f3] transition"
            >
              Share Moodforest Reflection
            </a>

          </div>

        </section>


        {/* WHOLE PERSON */}

        <section className="border-t border-[#dbe6de] pt-7 pb-4">

          <div className="text-[10px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
            Whole-Person Preventive Vitality
          </div>

          <div className="text-[14px] leading-[1.9] text-[#64776d] space-y-5">

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