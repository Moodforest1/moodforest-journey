export default function UpdateTest() {

  async function updateParticipant() {

   const response = await fetch("/api/update-participant", {
  method: "POST",

  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify({
    token: "mf_TEST123",

    flow: 78,
    vitality: 74,

    stage: 3,
  }),
});

const data = await response.json();

console.log(data);

alert("Participant updated!");
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#f5f7f4]">

      <button
        onClick={updateParticipant}
        className="rounded-2xl bg-[#1f4d3b] text-white px-8 py-4 text-lg font-medium"
      >
        Simulate Assessment Update
      </button>

    </div>
  )
}