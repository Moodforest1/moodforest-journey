export default function ReflectPage() {
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
              src="https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/Cognitive_Flow_Assessment/vpFXQWs4VqRJ8nkNRTOdgW8qVat6Z2u2D4QPMM0VveKq619fQKOxDW0WGDtHYdyJZ1yepZXJN4V31vCGUzHbDCPmgdSeDUxaXwF1"
              className="w-full"
            ></iframe>

          </div>

        </section>


        {/* CONTINUITY */}
        <section className="mt-8 bg-white/70 border border-[#dbe6de] rounded-[30px] px-8 py-8 shadow-[0_16px_34px_rgba(31,45,38,0.05)]">

          <div className="text-[12px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-5">
            Why Moodforest
          </div>

          <div className="text-[16px] leading-[1.95] text-[#64776d] space-y-5">

            <p>
              Many people continue functioning externally while quietly carrying persistent cognitive fatigue, emotional overload, and restorative imbalance internally.
            </p>

            <p>
              Moodforest is designed as a calm preventive health continuity experience centered around reflection, recovery rhythm, emotional steadiness, and longitudinal vitality.
            </p>

            <p>
              Awareness is often the first step toward steadier recovery.
            </p>

          </div>

        </section>


        {/* INVITE */}
        <section className="mt-8 bg-gradient-to-b from-[#f7fbf8] to-[#edf5ef] border border-[#dbe6de] rounded-[30px] px-8 py-8 shadow-[0_16px_34px_rgba(31,45,38,0.05)]">

          <div className="text-[12px] tracking-[0.18em] uppercase text-[#74887d] font-semibold mb-5">
            Share Reflection
          </div>

          <h2 className="text-[28px] leading-[1.35] font-bold text-[#244837] mb-5">
            Preventive health begins with awareness.
          </h2>

          <p className="text-[16px] leading-[1.95] text-[#64776d] mb-8">
            If this reflection feels meaningful, you can gently share it with someone you care about.
          </p>

          <a
            href='https://wa.me/?text=I%20recently%20came%20across%20Moodforest%20and%20thought%20of%20you.%0A%0AIt%20offers%20a%20gentle%20reflection%20experience%20focused%20on%20mental%20clarity,%20emotional%20steadiness,%20stress%20recovery,%20and%20overall%20vitality.%0A%0ASometimes%20we%20carry%20more%20stress%20than%20we%20realize.%0A%0AYou%20can%20explore%20your%20Cognitive%20Flow%20Reflection%20here:%0Ahttps://journey.moodforest.co/reflect%0A%0AIt%20only%20takes%20a%20few%20minutes%20and%20provides%20immediate%20personalized%20insights.%0A%0ANo%20sign-up,%20identity%20verification,%20or%20payment%20required.'
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#274838] text-white px-7 py-4 text-sm font-semibold shadow-[0_10px_24px_rgba(39,72,56,0.16)] hover:opacity-95 transition"
          >
            Invite Someone You Care About
          </a>

        </section>

      </div>
    </div>
  )
}