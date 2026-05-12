import { useState } from 'react'

export default function OnboardParticipant() {

  const [name, setName] = useState('')
  const [flow, setFlow] = useState('70')
  const [vitality, setVitality] = useState('65')

  const [created, setCreated] = useState(null)

  async function handleSubmit(e) {

    e.preventDefault()

    try {

      const response = await fetch('/api/create-participant', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          name,
          flow,
          vitality
        })
      })

      const data = await response.json()

      console.log(data)

      if (!data.success) {
        alert(data.error || 'Failed to create participant')
        return
      }

      setCreated({
        name: data.participant.name,
        token: data.token,
        journeyUrl: data.journeyUrl,
      })

    } catch (error) {

      console.error(error)

      alert('Something went wrong while creating participant')
    }
  }

  return (

    <div className="min-h-screen bg-[#f5f7f4] px-6 py-10 text-[#1f2937]">

      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-[#e5e7eb] p-10 shadow-sm">

        <div className="space-y-4">

          <div className="inline-flex items-center rounded-full bg-[#eef5ee] px-4 py-2 text-sm text-[#3b5d44]">
            Moodforest Onboarding
          </div>

          <h1 className="text-4xl font-semibold text-[#1e293b]">
            Create Participant Journey
          </h1>

          <p className="text-[#6b7280] leading-relaxed">
            Generate continuity identity, participant token,
            and longitudinal journey access.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          <div>

            <label className="block text-sm font-medium mb-2">
              Participant Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-2xl border border-[#d1d5db] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1f4d3b]"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Initial Mind / Flow Score
            </label>

            <input
              type="number"
              value={flow}
              onChange={(e) => setFlow(e.target.value)}
              className="w-full rounded-2xl border border-[#d1d5db] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1f4d3b]"
            />

          </div>

          <div>

            <label className="block text-sm font-medium mb-2">
              Initial Body Vitality Score
            </label>

            <input
              type="number"
              value={vitality}
              onChange={(e) => setVitality(e.target.value)}
              className="w-full rounded-2xl border border-[#d1d5db] px-4 py-3 outline-none focus:ring-2 focus:ring-[#1f4d3b]"
            />

          </div>

          <button
            type="submit"
            className="rounded-2xl bg-[#1f4d3b] text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-95 transition"
          >
            Generate Journey
          </button>

        </form>

        {created && (

          <div className="mt-10 rounded-3xl bg-[#eef5ee] border border-[#dbe7dc] p-8 space-y-5">

            <div>

              <div className="text-sm uppercase tracking-wide text-[#6b7280]">
                Participant Created
              </div>

              <div className="mt-2 text-2xl font-semibold text-[#1e293b]">
                {created.name}
              </div>

            </div>

            <div>

              <div className="text-sm text-[#6b7280]">
                Token
              </div>

              <div className="mt-1 font-mono text-[#1f4d3b] break-all">
                {created.token}
              </div>

            </div>

            <div>

              <div className="text-sm text-[#6b7280]">
                Journey URL
              </div>

              <a
                href={created.journeyUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-[#1f4d3b] underline break-all"
              >
                {created.journeyUrl}
              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(created.journeyUrl)
                  alert('Journey link copied!')
                }}
                className="mt-4 rounded-xl bg-[#1f4d3b] text-white px-4 py-2 text-sm font-medium hover:opacity-95 transition"
              >
                Copy Journey Link
              </button>

            </div>

          </div>
        )}

      </div>

    </div>
  )
}