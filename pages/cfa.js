import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function CFA() {

  const router = useRouter()

  if (!router.isReady) {
    return null
  }

  const { mf_token } = router.query

  useEffect(() => {

    const target =
  `https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-perma/Cognitive_Flow_Assessment/vpFXQWs4VqRJ8nkNRTOdgW8qVat6Z2u2D4QPMM0VveKq619fQKOxDW0WGDtHYdyJZ1yepZXJN4V31vCGUzHbDCPmgdSeDUxaXwF1?mf_token=${mf_token || ''}`

    const timer = setTimeout(() => {
      window.location.href = target
    }, 1800)

    return () => clearTimeout(timer)

  }, [mf_token])

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#efede7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px',
        fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif'
      }}
    >

      <div
        style={{
          maxWidth: '620px',
          textAlign: 'center'
        }}
      >

        <div
          style={{
            fontSize: '12px',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#738277',
            marginBottom: '24px'
          }}
        >
          Moodforest Continuity
        </div>

        <div
          style={{
            fontSize: '44px',
            lineHeight: '1.15',
            fontWeight: '700',
            color: '#203127',
            marginBottom: '24px'
          }}
        >
          Your reflective space is opening
        </div>

        <div
          style={{
            fontSize: '18px',
            lineHeight: '1.9',
            color: '#66756c'
          }}
        >
          Take a quiet moment to observe your cognitive flow,
          emotional steadiness, restorative rhythm,
          and future orientation.
        </div>

      </div>

    </div>
  )
}