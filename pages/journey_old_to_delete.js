import { useRouter } from 'next/router'

export default function JourneyHome() {

  const router = useRouter()

  const { mf_token } = router.query

  const iframeUrl =
    `https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/page-perma/Journey_Home/Cq6s8WhunK6wUwu5C71Kgbf1xtyFf8mkfgT1CZp77HSX7M8NYN7Rhdkz3XTGMPT9mk2NEbmzTnasJrR5ueETxh2OOjuJk5e3HvDP?mf_token=${mf_token || ''}&v=5`

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