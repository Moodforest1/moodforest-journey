import { useRouter } from 'next/router'

export default function CFA() {

  const router = useRouter()

  const { mf_token } = router.query

  const iframeUrl =
    `https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-perma/Cognitive_Flow_Assessment/vpFXQWs4VqRJ8nkNRTOdgW8qVat6Z2u2D4QPMM0VveKq619fQKOxDW0WGDtHYdyJZ1yepZXJN4V31vCGUzHbDCPmgdSeDUxaXwF1?mf_token=${mf_token || ''}`

  return (

    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        background: '#edf4ef',
      }}
    >

      <iframe
        src={iframeUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        allow="fullscreen"
      />

    </div>
  )
}