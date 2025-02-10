import React from "react";

const EsportsTournament = () => {
  return (
    <div className=" mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-yellow-400 text-center">
        INERTIA X ESPORT TOURNAMENT (SQUAD, DUO, SOLO)
      </h1>
      <p className="text-lg text-center mt-2">
        Join the Ultimate Free Fire & BGMI Esports Tournament at INERTIA 2025!
      </p>
      <div className="mt-4">
        <p className="font-semibold">PC AND PHONE PLAYER BOTH ARE ALLOWED</p>
        <p className="text-sm">
          SOLO AND DUO ARE ONLY FOR FULL MAP, NOT FOR CLASH SQUAD OR TDM
        </p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold text-red-500">🔥 Why Participate?</h2>
        <ul className="list-disc list-inside mt-2">
          <li>✅ Exciting Cash Prizes & Rewards – Win big and earn bragging rights!</li>
          <li>✅ Intense Competition – Face off against top players and teams.</li>
          <li>✅ Entry Fee – ₹50 per player (₹200 per team)</li>
          <li>✅ Unforgettable Experience – Be part of one of the biggest esports battles!</li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold text-blue-400">📅 Tournament Date: 21st & 22nd February</h2>
        <p>⏰ TIME: 12:00 PM - 5:00 PM (2:00 PM to 3:00 PM BREAK)</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold text-green-400">🔹 Register Now & Secure Your Spot!</h2>
        <p>For More Info, Join Our Discord Server.</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold text-purple-400">Tournament Rules & Regulations</h2>
        <h3 className="font-semibold mt-2">Eligibility & Registration</h3>
        <ul className="list-disc list-inside text-sm">
          <li>Players must register before the deadline.</li>
          <li>Each team must have 4 players.</li>
          <li>All players must provide correct Free Fire & BGMI UID and in-game name.</li>
          <li>Roster changes must be informed before the tournament starts.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Rules of Conduct</h3>
        <ul className="list-disc list-inside text-sm">
          <li>No cheating, hacking, or using third-party applications.</li>
          <li>No toxic behavior, insults, or harassment.</li>
          <li>Emulators may/may not be allowed (as per tournament rules).</li>
          <li>Players must use their registered accounts.</li>
          <li>Players are responsible for their own network stability.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Disqualification & Penalties</h3>
        <ul className="list-disc list-inside text-sm">
          <li>Use of hacks = Permanent Ban</li>
          <li>Teaming with opponents = Match Disqualification</li>
          <li>Intentional disconnections = No replays</li>
          <li>Multiple rule violations = Team Ban</li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Match Process & Technical Issues</h3>
        <ul className="list-disc list-inside text-sm">
          <li>Players must join the lobby 10 minutes before the match.</li>
          <li>No rematches for individual disconnections.</li>
          <li>If the entire lobby crashes, the match will be restarted.</li>
          <li>The tournament organizer’s decision is final in case of disputes.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold text-yellow-400">Prizes & Rewards</h2>
        <h3 className="font-semibold">Free Fire</h3>
        <ul className="list-disc list-inside text-sm">
          <li>1st Place: ₹800</li>
          <li>2nd Place: ₹400</li>
          <li>3rd Place: ₹200</li>
          <li>Highest Kill: ₹100</li>
        </ul>
        <h3 className="font-semibold mt-2">BGMI</h3>
        <ul className="list-disc list-inside text-sm">
          <li>1st Place: ₹1200</li>
          <li>2nd Place: ₹600</li>
          <li>3rd Place: ₹300</li>
          <li>Highest Kill: ₹100</li>
        </ul>
        <h3 className="font-semibold mt-2">TDM / Clash Squad (BGMI & Free Fire)</h3>
        <p className="text-sm">Prizes will be disclosed on 20th Feb.</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Streaming & Spectating</h3>
        <ul className="list-disc list-inside text-sm">
          <li>The tournament may be live-streamed on NALLA ANGEL YouTube channel.</li>
          <li>No stream sniping allowed.</li>
          <li>Spectators must be approved by organizers.</li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Agreement & Compliance</h3>
        <p className="text-sm">
          By registering, players agree to abide by all rules. Organizers have the right to modify the rules if necessary. All decisions made by the organizers are final.
        </p>
      </div>

 <a href="https://e-ticket-srt.netlify.app/form/67a8f775eb4ebb3b772d8bd6">
    <button
      className="px-6 py-3 rounded-lg text-white font-bold text-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300 shadow-lg mt-2 cursor-pointer"
    >
      Enroll Now
    </button>
    </a>
    </div>
  );
};

export default EsportsTournament;
