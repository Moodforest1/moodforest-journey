import { useRouter } from 'next/router'

export default function Dossier() {

  const router = useRouter()
  const { mf_token } = router.query

  const iframeUrl =
    `https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/page-embed/Longitudinal_Dossier/k3eHP612p6SFmdTJkM05xAhNHz2qMmOCpsAJBtMA7yDCEgjjSdr7ntnUBzkeyvRp1upXWO0UzgWC8QX9zEmtOrs2gkzVvbu05Y3n?mf_token=${mf_token || ''}&v=10`

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: '#efede7'
      }}
    >

      <iframe
        src={iframeUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        allow="fullscreen"
      />

    </div>
  )
}