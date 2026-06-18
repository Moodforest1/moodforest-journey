/* =========================
REFLECT PAGE — FULL REPLACEMENT
========================= */

import { useEffect } from 'react'

export default function ReflectPage() {

useEffect(() => {
window.scrollTo(0, 0)
}, [])

const formUrl =
'https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/CFA_Public/OyU3E66ewrZ4bbAY35A3nOvhX7S3mHPj0FvddVnqg0VmnNmF5qatNJOqOQrXaYJFXF2tOBxQsMD64yAJYrV8eBEfNYFeye0eNzzX'

return (

<div className="min-h-screen bg-[#f4f1eb] text-[#203128] px-2 md:px-4 py-8">

  <div className="max-w-5xl mx-auto">

    {/* HERO */}

    <section className="mb-6 bg-white rounded-[28px] border border-[#ebe7de] shadow-[0_10px_24px_rgba(31,45,38,0.035)] p-7">

      <div className="text-[10px] tracking-[0.16em] uppercase text-[#71857a] font-semibold mb-3">
        Mood Quotient
      </div>

      <h1 className="text-[30px] leading-[1.08] font-bold text-[#1f2d25] mb-5">
        Understanding mood is often the first step toward understanding health.
      </h1>

      <div className="text-[14px] leading-[1.95] text-[#62756b] space-y-5">

        <p>
          Mood Quotient (MQ) is a brief reflection that explores patterns in mood,
          stress recovery, vitality and future outlook.
        </p>

        <p>
          For many people, these experiences are influenced not only by life
          circumstances, but also by sleep, nutrition, inflammation and metabolic health.
        </p>

        <p>
          Most people complete it in about 3–5 minutes.
        </p>

      </div>

    </section>

    {/* REPORT NOTE */}

    <div className="text-[12px] text-[#74887d] mb-4 px-1">
      Your personalized Mood Quotient report will be available immediately after submission.
    </div>

    {/* FORM */}

    <section>

      <div className="w-full overflow-hidden">

        <iframe
          key={formUrl}
          height="1250px"
          width="100%"
          frameBorder="0"
          scrolling="auto"
          loading="eager"
          src={formUrl}
          className="w-full bg-transparent"
          style={{
            display: "block",
          }}
        ></iframe>

      </div>

    </section>

  </div>

</div>

)
}