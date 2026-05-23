```jsx
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ResultPage() {

  const router = useRouter()

  const [showJourneyForm, setShowJourneyForm] = useState(false)
  const [showQuestionForm, setShowQuestionForm] = useState(false)
  const [showMore, setShowMore] = useState(false)

  const {
    score = "0",
    state = "Reflective",
    reflection = "",
    biomarker = "",
    clarity = "0",
    emotional = "0",
    somatic = "0",
    meaning = "0",
    future = "0"
  } = router.query

  return (

    <div className="min-h-screen bg-[#edf4ef] text-[#203128] px-4 py-5 overflow-x-hidden">

      <div className="max-w-xl mx-auto">


        {/* HERO */}

        <section className="mb-8">

          <h1 className="text-[30px] leading-[1.08] font-bold text-[#1f2d25] mb-5">
            Your Current State:
            <br />
            {state}
          </h1>

        </section>



        {/* INITIAL REFLECTION */}

        <section className="mb-12">

          <div className="text-[10px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-3">
            Current Wellbeing Pattern
          </div>

          <div className="text-[48px] font-bold leading-none text-[#244837] mb-2">
            {score} / 100
          </div>

          <div className="text-[15px] font-semibold text-[#274838] mb-6">
            {state}
          </div>

          <div className="w-full h-[7px] bg-[#dfe8e1] rounded-full overflow-hidden mb-8">

            <div
              className="h-full rounded-full bg-[#274838]"
              style={{ width: score + '%' }}
            />

          </div>


          {/* REFLECTION */}

          <div className="border-t border-[#dbe6de] pt-6 mb-8">

            <div className="text-[10px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
              Reflection
            </div>

            <div className="text-[14px] leading-[1.95] text-[#64776d] whitespace-pre-line">
              {reflection}
            </div>

          </div>


          {/* EXPLORE */}

          <div className="flex justify-center pt-2">

            <button
              onClick={() => setShowMore(true)}
              className="inline-flex items-center justify-center rounded-full bg-[#274838] text-white px-6 py-3 text-[13px] font-semibold hover:opacity-95 transition"
            >
              Explore Further
            </button>

          </div>

        </section>



        {/* SECOND LAYER */}

        {showMore && (

        <section className="mb-10 animate-fadeIn">


          {/* VIDEO */}

          <div className="mb-12 border-t border-[#dbe6de] pt-8">

            <div className="text-[10px] tracking-[0.18em] uppercase text-[#7b8f84] font-semibold mb-4">
              A Gentle Introduction
            </div>

            <div className="text-[14px] leading-[1.9] text-[#64776d] mb-6">

              A short introduction to Moodforest's whole-person approach to psychological and physiological wellbeing.

            </div>

            <div className="overflow-hidden rounded-[18px] bg-black">

              <div className="relative w-full aspect-video">

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



          {/* DEEPER INSIGHTS */}

          <div className="border-t border-[#dbe6de] pt-8 mb-10">

            <div className="text-[10px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-5">
              Deeper Insights
            </div>


            {/* DOMAIN SCORES */}

            <div className="space-y-4 mb-8">

              <div className="flex items-center justify-between text-[14px] text-[#42574d]">
                <div>Cognitive Clarity</div>
                <div className="font-semibold">{clarity} / 25</div>
              </div>

              <div className="flex items-center justify-between text-[14px] text-[#42574d]">
                <div>Emotional Resilience</div>
                <div className="font-semibold">{emotional} / 25</div>
              </div>

              <div className="flex items-center justify-between text-[14px] text-[#42574d]">
                <div>Somatic Balance</div>
                <div className="font-semibold">{somatic} / 15</div>
              </div>

              <div className="flex items-center justify-between text-[14px] text-[#42574d]">
                <div>Meaning & Engagement</div>
                <div className="font-semibold">{meaning} / 20</div>
              </div>

              <div className="flex items-center justify-between text-[14px] text-[#42574d]">
                <div>Future Outlook</div>
                <div className="font-semibold">{future} / 15</div>
              </div>

            </div>


            {/* BIOMARKERS */}

            <div className="border-t border-[#dbe6de] pt-6">

              <div className="text-[10px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
                Biomarker Context
              </div>

              <div className="text-[14px] leading-[1.95] text-[#64776d]">
                {biomarker}
              </div>

            </div>

          </div>



          {/* QUESTIONS */}

          <div className="border-t border-[#dbe6de] pt-8 mb-10">

            <div className="text-[10px] tracking-[0.18em] uppercase text-[#7b8f84] font-semibold mb-4">
              Questions & Conversation
            </div>

            <div className="text-[14px] leading-[1.9] text-[#64776d] mb-5">

              If something here resonated with you, you're welcome to continue the conversation with the Moodforest team through WhatsApp.

            </div>

            <button
              onClick={() => setShowQuestionForm(!showQuestionForm)}
              className="inline-flex items-center justify-center rounded-full border border-[#274838] text-[#274838] px-5 py-3 text-[13px] font-semibold hover:bg-[#f1f6f3] transition"
            >
              Continue the Conversation
            </button>


            {showQuestionForm && (

              <div className="mt-5 w-full overflow-hidden max-w-full">

                <iframe
                  height="460px"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  src="https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/Participant_Questions/JjmDbJkyvyASDCO9zzb9zYZ9mn8QWHjauV9uEg9YVj8aJnKAKO84tgBsfx8rmtn06sCEFmvzYX4ErCfJu3N96NuRgOJfYjm5Xtye"
                  className="w-full max-w-full bg-transparent"
                  style={{
                    transformOrigin: 'top left'
                  }}
                ></iframe>

              </div>

            )}

          </div>



          {/* JOURNEY */}

          <div className="border-t border-[#dbe6de] pt-8 mb-10">

            <div className="text-[10px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
              The Moodforest Journey
            </div>

            <div className="text-[14px] leading-[1.9] text-[#64776d] mb-7">

              For those who wish to continue further, Moodforest unfolds across three stages of deeper understanding and restoration.

            </div>



            {/* STAGES */}

            <div className="space-y-7 mb-7">


              <div>

                <div className="text-[15px] font-semibold text-[#274838] mb-1">
                  1. Psychological Understanding
                </div>

                <div className="text-[11px] uppercase tracking-[0.12em] text-[#8a9a91] mb-3">
                  Always Free
                </div>

                <div className="text-[14px] leading-[1.85] text-[#64776d]">
                  Ongoing continuity, reflection, and deeper self-understanding over time.
                </div>

              </div>



              <div>

                <div className="text-[15px] font-semibold text-[#274838] mb-1">
                  2. Biomarker Profiling
                </div>

                <div className="text-[11px] uppercase tracking-[0.12em] text-[#8a9a91] mb-3">
                  Home Sample Collection
                </div>

                <div className="text-[14px] leading-[1.85] text-[#64776d]">
                  Biomarker interpretation and guided consultation around whole-person wellbeing.
                </div>

              </div>



              <div>

                <div className="text-[15px] font-semibold text-[#274838] mb-1">
                  3. 7-Day Bio-Residency
                </div>

                <div className="text-[11px] uppercase tracking-[0.12em] text-[#8a9a91] mb-3">
                  With Optional Guided Fasting
                </div>

                <div className="text-[14px] leading-[1.85] text-[#64776d]">
                  A deeper restorative process designed for physiological reset and whole-person recovery.
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

              <div className="mt-5 w-full overflow-hidden max-w-full">

                <iframe
                  height="460px"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  src="https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/Journey_Continuity/6VVUAhPr5jeVrEeBpvW9b17WaxH4j3PHJ0Ku5wFSVwY4k8C1Pm6Me05nJ4dvmxwJPUdZe9nFOZsFmmHOK5q8F4Nzr0uVCN2Y2Htp"
                  className="w-full max-w-full bg-transparent"
                  style={{
                    transformOrigin: 'top left'
                  }}
                ></iframe>

              </div>

            )}

          </div>



          {/* SHARE */}

          <div className="border-t border-[#dbe6de] pt-8">

            <div className="text-[10px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-4">
              Share Moodforest
            </div>

            <div className="text-[14px] leading-[1.9] text-[#64776d] mb-5">

              If this felt meaningful, you may wish to gently share it with someone you care about.

              <br /><br />

              It is completely anonymous — no login, identity verification, or payment required.

            </div>

            <a
              href={
  "https://wa.me/?text=" +
  encodeURIComponent(
    "I came across this reflective Cognitive Flow Assessment from Moodforest and thought you might find it meaningful.\n\nIt is completely anonymous — no login, identity verification, or payment required.\n\nhttps://journey.moodforest.org/cfa"
  )
}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#274838] text-[#274838] px-5 py-3 text-[13px] font-semibold hover:bg-[#f1f6f3] transition"
            >
              Share with Someone
            </a>

          </div>

        </section>

        )}

      </div>

    </div>

  )
}
```
