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


    {/* VIDEO */}

    <section className="mb-8 bg-white rounded-[28px] border border-[#e7efe9] shadow-[0_10px_24px_rgba(31,45,38,0.035)] p-4 md:p-8">

      <div className="text-[10px] tracking-[0.14em] uppercase text-[#74887d] font-semibold mb-4">
        A Gentle Introduction
      </div>

      <div className="text-[14px] leading-[1.9] text-[#64776d] mb-6">

        A short introduction to how Moodforest approaches whole-person wellbeing.

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

    </section>


    {/* QUESTIONS */}

    <section className="mb-8 bg-white rounded-[28px] border border-[#e7efe9] shadow-[0_10px_24px_rgba(31,45,38,0.035)] p-4 md:p-8">

      <div className="text-[10px] tracking-[0.14em] uppercase text-[#7b8f84] font-semibold mb-4">
        Questions & Conversation
      </div>

      <div className="text-[14px] leading-[1.9] text-[#64776d] mb-5">

        If something here resonated with you, you're welcome to continue the conversation with the Moodforest team.

        <br /><br />

        You may also call or WhatsApp <span className="font-semibold text-[#274838]">+91 86025 25887</span>.

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

    </section>


    {/* CONTINUITY */}

    <section className="mb-8 bg-white rounded-[28px] border border-[#e7efe9] shadow-[0_10px_24px_rgba(31,45,38,0.035)] p-4 md:p-8">

      <div className="text-[10px] tracking-[0.14em] uppercase text-[#74887d] font-semibold mb-4">
        Monthly Continuity
      </div>

      <div className="text-[14px] leading-[1.9] text-[#64776d] mb-6">

        Some people choose to revisit this reflection monthly to better understand the patterns.

        <br /><br />

        If you’d like, you may create a private link for future check-ins.

      </div>

      <button
        onClick={() => setShowJourneyForm(!showJourneyForm)}
        className="inline-flex items-center justify-center rounded-full bg-[#274838] text-white px-5 py-3 text-[13px] font-semibold hover:opacity-95 transition"
      >
        Get Private Link For Next Month
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


    {/* SHARE */}

    <section className="bg-white rounded-[28px] border border-[#e7efe9] shadow-[0_10px_24px_rgba(31,45,38,0.035)] p-4 md:p-8">

      <div className="text-[10px] tracking-[0.14em] uppercase text-[#74887d] font-semibold mb-4">
        Share Moodforest
      </div>

      <div className="text-[14px] leading-[1.9] text-[#64776d] mb-5">

        If this felt meaningful, you may wish to share it with someone you care about.

        <br /><br />

        It is completely anonymous — no login, identity or payment required.

      </div>

      <a
        href={`https://wa.me/?text=${encodeURIComponent(
          "I recently came across Moodforest’s Mood Quotient reflection and thought you might find it meaningful.\n\nIt’s a gentle monthly reflection designed to help people better understand patterns in mood, wellbeing, stress recovery, and future outlook over time.\n\nInstant and anonymous — no login, identity or payment required.\n\nhttps://journey.moodforest.co/reflect"
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-[#274838] text-[#274838] px-5 py-3 text-[13px] font-semibold hover:bg-[#f1f6f3] transition"
      >
        Share with Someone
      </a>

    </section>

  </div>

</div>

)
}