/* =========================
REFLECT PAGE — FULL REPLACEMENT
========================= */

import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ReflectPage() {

const router = useRouter()

useEffect(() => {
window.scrollTo(0, 0)
}, [])

const formUrl =
'https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/CFA_Public/OyU3E66ewrZ4bbAY35A3nOvhX7S3mHPj0FvddVnqg0VmnNmF5qatNJOqOQrXaYJFXF2tOBxQsMD64yAJYrV8eBEfNYFeye0eNzzX'

return (


<div className="min-h-screen bg-[#edf4ef] text-[#203128] px-4 py-8">

  <div className="max-w-2xl mx-auto">

    {/* HERO */}

    <section className="mb-8 bg-white rounded-[28px] border border-[#e7efe9] shadow-[0_16px_34px_rgba(31,45,38,0.04)] p-7">

      <div className="text-[10px] tracking-[0.16em] uppercase text-[#71857a] font-semibold mb-3">
        Flow in Mind · Vitality in Body
      </div>

      <h1 className="text-[30px] leading-[1.08] font-bold text-[#1f2d25] mb-5">
        Keeping track of mood helps.
      </h1>

      <div className="text-[14px] leading-[1.95] text-[#62756b] space-y-4 mb-6">

        <p>
          Explore your patterns of wellbeing, stress recovery and future outlook.
        </p>

        <p>
          Most people complete it in about 3–5 minutes.
        </p>

      </div>

      <div className="text-[13px] leading-[1.85] text-[#64776d] border-t border-[#e7efe9] pt-5">

        Instant and anonymous — no login, identity or payment required.

      </div>

    </section>

    {/* FORM */}

    <section className="mt-2">

      <div className="w-full overflow-hidden">

        <iframe
          key={formUrl}
          height="2200px"
          width="100%"
          frameBorder="0"
          scrolling="no"
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
