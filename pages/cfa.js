/* =========================
CFA PAGE — FULL REPLACEMENT
========================= */

import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function CFA() {

const router = useRouter()

useEffect(() => {
window.scrollTo(0, 0)
}, [])

const mf_token = router.query.mf_token || ''
const phase = router.query.phase || 'Pre'

/* =========================================
PHASE COPY
========================================= */

let eyebrow = "Moodforest Continuity"
let title = "Continuity Reflection"
let description =
  "Please complete your next scheduled reflection."

if (phase === "Pre") {
  eyebrow = "Mood Quotient Check-In"

  title = "Let’s understand how you are doing right now."

  description =
    "This reflection establishes your personal continuity baseline and helps future changes in wellbeing become more meaningful over time."
}

if (phase === "Post") {
  eyebrow = "Recovery Check-In"

  title = "Let’s see how things have evolved."

  description =
    "This reflection helps understand how mood, recovery, and vitality may have changed since your previous check-in."
}

if (phase === "Followup") {
  eyebrow = "Continuity Check-In"

  title = "Let’s continue tracking your journey."

  description =
    "Longitudinal reflections help reveal patterns in wellbeing, recovery, and future outlook over time."
}

/* =========================================
FORM URL
========================================= */

const iframeUrl =
"https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/Cognitive_Flow_Assessment/vpFXQWs4VqRJ8nkNRTOdgW8qVat6Z2u2D4QPMM0VveKq619fQKOxDW0WGDtHYdyJZ1yepZXJN4V31vCGUzHbDCPmgdSeDUxaXwF1?mf_token=" +
mf_token +
"&Assessment_Phase=" +
phase

return (

<div className="min-h-screen bg-[#edf4ef] text-[#203128] px-4 py-8">

  <div className="max-w-2xl mx-auto">

    {/* HERO */}

    <section className="mb-8 bg-white rounded-[28px] border border-[#e7efe9] shadow-[0_10px_24px_rgba(31,45,38,0.035)] p-7">

      <div className="text-[10px] tracking-[0.16em] uppercase text-[#71857a] font-semibold mb-3">
        {eyebrow}
      </div>

      <h1 className="text-[30px] leading-[1.08] font-bold text-[#1f2d25] mb-5">
        {title}
      </h1>

      <div className="text-[14px] leading-[1.95] text-[#62756b] space-y-4 mb-5">

        <p>
          {description}
        </p>

        <p>
          Most people complete it in about 3–5 minutes.
        </p>

      </div>

      <div className="text-[12px] text-[#74887d] leading-[1.8] border-t border-[#e7efe9] pt-5">

        There are no right or wrong answers — simply reflect as honestly as you can right now.

      </div>

    </section>

    {/* FORM */}

    <section className="mb-8">

      <div className="w-full overflow-hidden">

        <iframe
          key={iframeUrl}
          height="1250px"
          width="100%"
          frameBorder="0"
          scrolling="yes"
          src={iframeUrl}
          className="w-full bg-transparent"
          style={{
            display: "block"
          }}
        ></iframe>

      </div>

    </section>

  </div>

</div>

)
}