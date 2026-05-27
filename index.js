export default function FreeFireTournamentWebsite() { const matches = [ { team1: 'TEAM BLACK', team2: 'FIRE LEGENDS', time: '7:00 PM', }, { team1: 'ELITE SQUAD', team2: 'NIGHT HUNTERS', time: '8:00 PM', }, ]

const leaderboard = [ { name: 'TEAM BLACK', points: 45 }, { name: 'FIRE LEGENDS', points: 39 }, { name: 'NIGHT HUNTERS', points: 31 }, ]

return ( <div className="min-h-screen bg-black text-white font-sans overflow-hidden"> {/* Hero Section */} <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-yellow-500/20 to-black"> <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_60%)]"></div>

<h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-lg z-10 animate-pulse">
      FREE FIRE TOURNAMENT
    </h1>

    <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl z-10">
      Bangladesh Biggest Custom Room Battle — Join now and dominate the battleground.
    </p>

    <div className="mt-8 flex gap-4 flex-wrap justify-center z-10">
      <button className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold hover:scale-105 transition duration-300">
        Register Now
      </button>

      <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-2xl font-bold hover:bg-yellow-400 hover:text-black transition duration-300">
        Tournament Rules
      </button>
    </div>
  </section>

  {/* Tournament Info */}
  <section className="py-16 px-6 md:px-16 grid md:grid-cols-4 gap-6">
    <div className="bg-zinc-900 rounded-3xl p-6 border border-yellow-400/20 shadow-xl">
      <h2 className="text-2xl font-bold text-yellow-400">Date</h2>
      <p className="mt-3 text-gray-300">20 June 2026</p>
    </div>

    <div className="bg-zinc-900 rounded-3xl p-6 border border-yellow-400/20 shadow-xl">
      <h2 className="text-2xl font-bold text-yellow-400">Prize Pool</h2>
      <p className="mt-3 text-gray-300">৳10,000</p>
    </div>

    <div className="bg-zinc-900 rounded-3xl p-6 border border-yellow-400/20 shadow-xl">
      <h2 className="text-2xl font-bold text-yellow-400">Mode</h2>
      <p className="mt-3 text-gray-300">Squad Battle Royale</p>
    </div>

    <div className="bg-zinc-900 rounded-3xl p-6 border border-yellow-400/20 shadow-xl">
      <h2 className="text-2xl font-bold text-yellow-400">Entry Fee</h2>
      <p className="mt-3 text-gray-300">৳200 Per Squad</p>
    </div>
  </section>

  {/* Registration Form */}
  <section className="py-16 px-6 md:px-16">
    <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">
      Squad Registration
    </h2>

    <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-3xl border border-yellow-400/20 shadow-2xl space-y-5">
      <input
        type="text"
        placeholder="Squad Name"
        className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none"
      />

      <input
        type="text"
        placeholder="Leader UID"
        className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none"
      />

      <input
        type="text"
        placeholder="WhatsApp Number"
        className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none"
      />

      <input
        type="file"
        className="w-full p-4 rounded-xl bg-black border border-zinc-700 outline-none"
      />

      <button className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition duration-300">
        Submit Registration
      </button>
    </div>
  </section>

  {/* Match Schedule */}
  <section className="py-16 px-6 md:px-16 bg-zinc-950">
    <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">
      Match Schedule
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {matches.map((match, index) => (
        <div
          key={index}
          className="bg-zinc-900 p-6 rounded-3xl border border-yellow-400/20"
        >
          <h3 className="text-2xl font-bold text-white">
            {match.team1} VS {match.team2}
          </h3>
          <p className="text-yellow-400 mt-2">Time: {match.time}</p>
        </div>
      ))}
    </div>
  </section>

  {/* Leaderboard */}
  <section className="py-16 px-6 md:px-16">
    <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">
      Live Leaderboard
    </h2>

    <div className="max-w-3xl mx-auto bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-400/20">
      {leaderboard.map((team, index) => (
        <div
          key={index}
          className="flex items-center justify-between px-6 py-5 border-b border-zinc-800"
        >
          <div className="flex items-center gap-4">
            <span className="text-yellow-400 text-xl font-bold">
              #{index + 1}
            </span>
            <h3 className="font-bold text-lg">{team.name}</h3>
          </div>

          <span className="text-yellow-400 font-bold text-xl">
            {team.points} pts
          </span>
        </div>
      ))}
    </div>
  </section>

  {/* Winner Section */}
  <section className="py-20 px-6 text-center bg-gradient-to-r from-yellow-500/10 to-black">
    <h2 className="text-5xl font-extrabold text-yellow-400 mb-6">
      TOURNAMENT WINNER
    </h2>

    <div className="max-w-xl mx-auto bg-zinc-900 rounded-3xl p-10 border border-yellow-400/30 shadow-2xl">
      <div className="w-28 h-28 bg-yellow-400 rounded-full mx-auto mb-6"></div>
      <h3 className="text-3xl font-bold">TEAM BLACK</h3>
      <p className="text-gray-400 mt-3">Champion of the Season</p>
    </div>
  </section>

  {/* Rules */}
  <section className="py-16 px-6 md:px-16 bg-zinc-950">
    <h2 className="text-4xl font-bold text-yellow-400 text-center mb-10">
      Tournament Rules
    </h2>

    <div className="max-w-3xl mx-auto space-y-4 text-gray-300 text-lg">
      <p>• No hacks or cheats allowed.</p>
      <p>• All players must join the room on time.</p>
      <p>• Teaming with other squads is prohibited.</p>
      <p>• Any toxic behavior may result in a ban.</p>
      <p>• Admin decisions are final.</p>
    </div>
  </section>

  {/* WhatsApp Contact */}
  <section className="py-20 px-6 text-center">
    <h2 className="text-4xl font-bold text-yellow-400 mb-4">
      Join WhatsApp Group
    </h2>

    <p className="text-gray-300 mb-6">
      Contact Admin: 01908340269
    </p>

    <a
      href="https://wa.me/8801908340269"
      target="_blank"
      className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300 inline-block"
    >
      Open WhatsApp
    </a>
  </section>

  {/* Footer */}
  <footer className="border-t border-zinc-800 py-6 text-center text-gray-500">
    © 2026 Free Fire Tournament | Designed by YEASIN
  </footer>
</div>

) }
