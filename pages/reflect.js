import { useRouter } from 'next/router'

export default function ReflectPage() {

  const router = useRouter()

  const formUrl =
    'https://creatorapp.zohopublic.in/madhur_moodforest755/moodforest-app/form-embed/CFA_Public/OyU3E66ewrZ4bbAY35A3nOvhX7S3mHPj0FvddVnqg0VmnNmF5qatNJOqOQrXaYJFXF2tOBxQsMD64yAJYrV8eBEfNYFeye0eNzzX'

  return (

    <div className="min-h-screen bg-[#edf4ef] text-[#203128] px-4 py-5">

      <div className="max-w-xl mx-auto">


        {/* HERO */}

        <section className="mb-8">

          <div className="text-[10px] tracking-[0.22em] uppercase text-[#71857a] font-semibold mb-3">
            Flow in Mind · Vitality in Body
          </div>

          <h1 className="text-[30px] leading-[1.08] font-bold text-[#1f2d25] mb-5">
            A brief reflection on emotional wellbeing, restorative balance and cognitive flow.
          </h1>

          <div className="text-[14px] leading-[1.95] text-[#62756b] space-y-4 mb-6">

            <p>
              Explore your patterns of whole person wellbeing including stress recovery and future outlook.
            </p>

            <p>
              Most people complete it in about 3–5 minutes.
            </p>

          </div>

          <div className="text-[13px] leading-[1.85] text-[#64776d] border-t border-[#dbe6de] pt-5">

            Completely anonymous — no login, identity or payment required. Instant report.

          </div>

        </section>


        {/* FORM */}

        <section className="-mx-4">

  <div className="w-full overflow-hidden">

    <iframe
      height="1120px"
      width="100%"
      frameBorder="0"
      scrolling="auto"
      src={formUrl}
      className="w-full bg-transparent"
      style={{
      
      }}
    ></iframe>

  </div>

</section>


      </div>

    </div>
  )
}