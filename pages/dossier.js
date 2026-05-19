import { useRouter } from 'next/router'

export default function Dossier() {

  const router = useRouter()

  const { mf_token } = router.query

  const iframeUrl =
    `YOUR_DOSSIER_EMBED_URL?mf_token=${mf_token || ''}`

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
      />

    </div>
  )
}