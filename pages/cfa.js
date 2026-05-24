import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

export default function CFA() {

const router = useRouter()

const mf_token = router.query.mf_token || ''
const phase = router.query.phase || 'Pre'

const iframeRef = useRef(null)

const [showCompletion, setShowCompletion] = useState(false)

const iframeUrl =
`https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/Cognitive_Flow_Assessment/vpFXQWs4VqRJ8nkNRTOdgW8qVat6Z2u2D4QPMM0VveKq619fQKOxDW0WGDtHYdyJZ1yepZXJN4V31vCGUzHbDCPmgdSeDUxaXwF1?mf_token=${mf_token}&Assessment_Phase=${phase}`

useEffect(() => {

```
const iframe = iframeRef.current

if (!iframe) return

let initialLoadComplete = false

const handleLoad = () => {

  if (!initialLoadComplete) {
    initialLoadComplete = true
    return
  }

  setTimeout(() => {
    setShowCompletion(true)
  }, 1200)
}

iframe.addEventListener('load', handleLoad)

return () => {
  iframe.removeEventListener('load', handleLoad)
}
```

}, [])

return (

```
<div className="min-h-screen bg-[#edf4ef] text-[#203128] px-4 py-5">

  <div className="max-w-xl mx-auto">

    {!showCompletion && (
      <>
        {/* HERO */}

        <section className="mb-8">

          <div className="text-[10px] tracking-[0.22em] uppercase text-[#71857a] font-semibold mb-3">
            Moodforest Continuity
          </div>

          <h1 className="text-[30px] leading-[1.08] font-bold text-[#1f2d25] mb-5">
            Continuity Reflection
          </h1>

          <div className="text-[14px] leading-[1.95] text-[#62756b] space-y-4 mb-6">

            <p>
              Please complete your next scheduled reflection.
            </p>

            <p>
              Most people complete it in about 3–5 minutes.
            </p>

          </div>

          <div className="text-[13px] leading-[1.85] text-[#64776d] border-t border-[#dbe6de] pt-5">

            Your responses become part of your longitudinal continuity journey.

          </div>

        </section>

        {/* FORM */}

        <section className="-mx-4">

          <div className="w-full overflow-hidden">

            <iframe
              ref={iframeRef}
              key={iframeUrl}
              height="1120px"
              width="100%"
              frameBorder="0"
              scrolling="yes"
              src={iframeUrl}
              className="w-full bg-transparent"
              style={{
                display: "block",
              }}
            ></iframe>

          </div>

        </section>
      </>
    )}

    {showCompletion && (
      <div className="bg-white rounded-[30px] border border-[#dbe6de] shadow-[0_16px_34px_rgba(31,45,38,0.05)] p-8 mt-10">

        <div className="text-[10px] tracking-[0.22em] uppercase text-[#71857a] font-semibold mb-3">
          Reflection Received
        </div>

        <h2 className="text-[28px] leading-[1.12] font-bold text-[#1f2d25] mb-5">
          Your reflection has been received.
        </h2>

        <div className="text-[15px] leading-[1.9] text-[#62756b] mb-8">

          Thank you for continuing your longitudinal continuity journey with Moodforest.

        </div>

        <a
          href={"https://journey.moodforest.co/?mf_token=" + mf_token}
          className="inline-block rounded-full bg-[#274838] text-white px-6 py-3 text-[14px] font-semibold no-underline"
        >
          Return to Journey Home
        </a>

      </div>
    )}

  </div>

</div>
```

)
}
