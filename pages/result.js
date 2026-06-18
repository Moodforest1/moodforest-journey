/* =========================
RESULT PAGE — FULL REPLACEMENT
========================= */

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function ResultPage() {

const router = useRouter()

useEffect(() => {
window.scrollTo(0, 0)
}, [])

const [showQuestionForm, setShowQuestionForm] = useState(false)
const [showJourneyForm, setShowJourneyForm] = useState(false)

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

<div className="min-h-screen bg-[#f3f5f2] text-[#203128] px-4 py-8 overflow-x-hidden">

  <div className="w-full max-w-5xl mx-auto px-1 md:px-6">

    {/* REPORT */}

    <section className="mb-8 bg-white rounded-[28px] border border-[#e7efe9] shadow-[0_10px_24px_rgba(31,45,38,0.035)] p-4 md:p-8">

      <div className="text-[10px] tracking-[0.14em] uppercase text-[#74887d] font-semibold mb-3">
        Current Mood Quotient
      </div>

      <div className="text-[42px] font-bold leading-none text-[#244837] mb-2">
        {score} / 100
      </div>

      <div className="text-[15px] font-medium text-[#274838] mb-5">
        {state}
      </div>

      <div className="text-[13px] leading-[1.8] text-[#74887d] mb-7">
        This is not a diagnosis or fixed identity — simply a reflective snapshot of how things feel.
      </div>

      <div className="w-full h-[7px] bg-[#dfe8e1] rounded-full overflow-hidden mb-8">

        <div
          className="h-full rounded-full bg-[#274838]"
          style={{ width: `${score}%` }}
        />

      </div>


      {/* DOMAIN SCORES */}

      <div className="space-y-4 mb-8">

        <div className="flex items-center justify-between text-[14px] text-[#42574d]">
          <div>Cognitive Clarity</div>
          <div className="font-medium">{clarity} / 25</div>
        </div>

        <div className="flex items-center justify-between text-[14px] text-[#42574d]">
          <div>Emotional Resilience</div>
          <div className="font-medium">{emotional} / 25</div>
        </div>

        <div className="flex items-center justify-between text-[14px] text-[#42574d]">
          <div>Somatic Balance</div>
          <div className="font-medium">{somatic} / 15</div>
        </div>

        <div className="flex items-center justify-between text-[14px] text-[#42574d]">
          <div>Meaning & Engagement</div>
          <div className="font-medium">{meaning} / 20</div>
        </div>

        <div className="flex items-center justify-between text-[14px] text-[#42574d]">
          <div>Future Outlook</div>
          <div className="font-medium">{future} / 15</div>
        </div>

      </div>


      {/* SYNTHESIS */}

      <div className="border-t border-[#e7efe9] pt-6 mb-7">

        <div className="text-[10px] tracking-[0.14em] uppercase text-[#74887d] font-semibold mb-4">
          Integrated Interpretation
        </div>

        <div className="text-[14px] leading-[1.95] text-[#64776d] whitespace-pre-line">
          {reflection}
        </div>

      </div>


      {/* MIND-BODY CONTEXT */}

      <div className="border-t border-[#e7efe9] pt-6">

        <div className="text-[10px] tracking-[0.14em] uppercase text-[#74887d] font-semibold mb-4">
          Mind–Body Context
        </div>

        <div className="text-[14px] leading-[1.95] text-[#64776d]">
          {biomarker}
        </div>

      </div>

    </section>



     {/* JOURNEY HOME */}

<section className="mb-8 bg-white rounded-[28px] border border-[#e7efe9] shadow-[0_10px_24px_rgba(31,45,38,0.035)] p-4 md:p-8">

  <div className="text-[10px] tracking-[0.14em] uppercase text-[#74887d] font-semibold mb-4">
    Continue Your Journey
  </div>

  <div className="text-[14px] leading-[1.9] text-[#64776d] mb-6">

    Your Mood Quotient reflects how things feel today.

    <br /><br />

    For many people, mood is influenced by sleep, inflammation, metabolic health, nutrition, recovery capacity and daily habits.

    <br /><br />

    Create your private Journey Home to save today's baseline, track future Mood Quotient assessments and access additional wellbeing resources over time.

  </div>

  <button
    onClick={() => setShowJourneyForm(!showJourneyForm)}
    className="inline-flex items-center justify-center rounded-full bg-[#274838] text-white px-5 py-3 text-[13px] font-semibold hover:opacity-95 transition"
  >
    Create Journey Home
  </button>

  {showJourneyForm && (

    <div className="mt-5 w-full overflow-hidden max-w-full">

      <iframe
        height="460px"
        width="100%"
        frameBorder="0"
        scrolling="no"
        allowTransparency="true"
        src={`https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/Journey_Continuity/6VVUAhPr5jeVrEeBpvW9b17WaxH4j3PHJ0Ku5wFSVwY4k8C1Pm6Me05nJ4dvmxwJPUdZe9nFOZsFmmHOK5q8F4Nzr0uVCN2Y2Htp?cfa_id=${router.query.cfa_id || ""}`}
        className="w-full max-w-full bg-transparent"
        style={{
          transformOrigin: 'top left'
        }}
      ></iframe>

    </div>

  )}

</section>

{/* EXPLORE MOODFOREST */}

<section className="bg-white rounded-[28px] border border-[#e7efe9] shadow-[0_10px_24px_rgba(31,45,38,0.035)] p-4 md:p-8">

  <div className="text-[10px] tracking-[0.14em] uppercase text-[#74887d] font-semibold mb-4">
    Interested In Understanding More?
  </div>

  <div className="text-[14px] leading-[1.9] text-[#64776d] mb-6">

    Mood and wellbeing are often influenced by biological factors such as sleep, inflammation, nutrition, metabolic health and recovery capacity.

    <br /><br />

    Explore how Moodforest combines Mood Quotient, Baseline Mapping and SuperFasting within a whole-person wellbeing pathway.

  </div>

  <a
    href="https://www.moodforest.co/bookings.html"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-full border border-[#274838] text-[#274838] px-5 py-3 text-[13px] font-semibold hover:bg-[#f1f6f3] transition"
  >
    Explore Moodforest
  </a>

</section>
    

  </div>

</div>

)
}