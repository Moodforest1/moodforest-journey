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

<div className="min-h-screen bg-[#f4f1eb] text-[#203128] px-4 py-8">

  <div className="max-w-2xl mx-auto">

    {/* HERO */}

    <section className="mb-8 bg-white rounded-[28px] border border-[#ebe7de] shadow-[0_10px_24px_rgba(31,45,38,0.035)] p-7">

      <div className="text-[10px] tracking-[0.16em] uppercase text-[#71857a] font-semibold mb-3">
        Mood Quotient · Monthly Reflection
      </div>

      <h1 className="text-[30px] leading-[1.08] font-bold text-[#1f2d25] mb-5">
        Understanding your patterns can change how you heal.
      </h1>

      <div className="text-[14px] leading-[1.95] text-[#62756b] space-y-5 mb-6">

        <p>
          Mood Quotient (MQ) is a gentle monthly reflection designed to help you better understand patterns in mood, stress recovery, vitality, and future outlook over time.
        </p>

        <p>
          Many people discover that simply tracking these patterns regularly creates greater emotional clarity, self-awareness, and healthier decision-making.
        </p>

        <p>
          Most people complete it in about 3–5 minutes.
        </p>

      </div>

      <div className="text-[13px] leading-[1.85] text-[#64776d] border-t border-[#ebe7de] pt-5">

        Instant and anonymous — no login, identity, diagnosis, or payment required.

      </div>

    </section>

    {/* MICROCOPY + GUIDANCE */}

    <section className="mb-6">

      <div className="text-[12px] text-[#74887d] leading-[1.8] px-1 mb-5">

        There are no right or wrong answers — simply reflect honestly on how things feel for you right now.

      </div>

      <div className="bg-white border border-[#ebe7de] rounded-[22px] p-5 shadow-[0_6px_18px_rgba(31,45,38,0.03)]">

        <div className="text-[10px] tracking-[0.14em] uppercase text-[#738277] font-semibold mb-3">
          Before You Begin
        </div>

        <div className="text-[13px] leading-[1.9] text-[#66756c]">

          • Your personalized Mood Quotient report becomes available immediately after submission.

          <br /><br />

          • Please allow pop-ups if prompted and return to the top of the page after submitting your reflection.

          <br /><br />

          • If something doesn’t work as expected, you may call or WhatsApp us at <span className="font-semibold text-[#274838]">+91 86025 25887</span>.

        </div>

      </div>

    </section>

    {/* FORM */}

    <section>

      <div className="w-full overflow-hidden">

        <iframe
          key={formUrl}
          height="1120px"
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