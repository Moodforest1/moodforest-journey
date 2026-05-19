import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function CFA() {

  const router = useRouter()

  const { mf_token } = router.query

  useEffect(() => {

    if (!router.isReady) return

    const targetUrl =
      `https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-perma/Cognitive_Flow_Assessment/vpFXQWs4VqRJ8nkNRTOdgW8qVat6Z2u2D4QPMM0VveKq619fQKOxDW0WGDtHYdyJZ1yepZXJN4V31vCGUzHbDCPmgdSeDUxaXwF1?mf_token=${mf_token || ''}`

    window.location.href = targetUrl

  }, [router.isReady, mf_token])

  return (

    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#edf4ef',
        fontFamily: 'Inter, sans-serif',
        color: '#274838',
        fontSize: '18px',
      }}
    >
      Opening your reflection journey...
    </div>

  )
}