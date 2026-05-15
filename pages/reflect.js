import { useRouter } from 'next/router'

export default function ReflectPage() {

  const router = useRouter()
  const { mf_token } = router.query

  const formUrl =
    `https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/Cognitive_Flow_Assessment/vpFXQWs4VqRJ8nkNRTOdgW8qVat6Z2u2D4QPMM0VveKq619fQKOxDW0WGDtHYdyJZ1yepZXJN4V31vCGUzHbDCPmgdSeDUxaXwF1?mf_token=${mf_token || ''}`

  return (
    <div className="min-h-screen bg-[#edf4ef] text-[#203128] px-5 py-10">
      <div className="max-w-2xl mx-auto">

        {/* HERO */}
        <section className="bg-white/80 border border-[#dbe6de] rounded-[34px] px-8 py-10 shadow-[0_18px_42px_rgba(31,45,38,0.05)]">

          <div className="text-[11px] tracking-[0.24em] uppercase text-[#71857a] font-semibold mb-5">
            Flow in Mind · Vitality in Body
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-[1.12] text-[#1f2d25] mb-6">
            A gentle reflection on cognitive flow, emotional steadiness, and restorative recovery.
          </h1>

          <p className="text-[17px] leading-[1.9] text-[#62756b] mb-8">
            This brief reflection explores:
            <br />
            • mental clarity
            <br />
            • emotional resilience
            <br />
            • stress recovery
            <br />
            • restorative rhythm
            <br />
            • overall vitality
            <br />
            <br />
            Most people complete it in about 3–5 minutes.
          </p>

          <div className="bg-[#f5faf7] border border-[#dbe6de] rounded-2xl px-5 py-4">
            <div className="text-sm leading-[1.8] text-[#5f7368]">
              No sign-up, identity verification, or payment required.
            </div>
          </div>

        </section>

        {/* EMBEDDED REFLECTION FORM */}
        <section className="mt-8">

          <div className="bg-white rounded-[30px] overflow-hidden border border-[#dbe6de] shadow-[0_16px_34px_rgba(31,45,38,0.05)]">

            <iframe
              height="900px"
              width="100%"
              frameBorder="0"
              scrolling="auto"
              src={formUrl}
              className="w-full"
            ></iframe>

          </div>

        </section>

      </div>
    </div>
  )
}