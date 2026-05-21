import { useRouter } from 'next/router'

export default function CFA() {

  const router = useRouter()

  const { mf_token, phase } = router.query

  // Prevent iframe rendering before query params load
  if (!mf_token || !phase) {
    return null
  }

  const iframeUrl =
    `https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/Cognitive_Flow_Assessment/vpFXQWs4VqRJ8nkNRTOdgW8qVat6Z2u2D4QPMM0VveKq619fQKOxDW0WGDtHYdyJZ1yepZXJN4V31vCGUzHbDCPmgdSeDUxaXwF1?mf_token=${mf_token}&Assessment_Phase=${phase}`

  return (

    <div className="min-h-screen bg-[#edf4ef] text-[#203128] px-5 py-8">

      <div className="max-w-2xl mx-auto">

        {/* MINIMAL CONTINUITY HEADER */}

        <section className="mb-6">

          <div className="text-[11px] tracking-[0.22em] uppercase text-[#71857a] font-semibold mb-3">
            Moodforest Continuity
          </div>

          <h1 className="text-[28px] leading-[1.15] font-bold text-[#1f2d25] mb-4">
            Continuity Reflection
          </h1>

          <p className="text-[15px] leading-[1.8] text-[#62756b]">
            Please complete your next scheduled reflection.
          </p>

        </section>

        {/* EMBEDDED FORM */}

        <section>

          <div className="bg-white rounded-[30px] overflow-hidden border border-[#dbe6de] shadow-[0_16px_34px_rgba(31,45,38,0.05)]">

            <iframe
              height="900px"
              width="100%"
              frameBorder="0"
              scrolling="auto"
              src={iframeUrl}
              className="w-full"
            ></iframe>

          </div>

        </section>

      </div>

    </div>
  )
}