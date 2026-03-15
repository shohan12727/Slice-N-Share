// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const players = [
//   {
//     id: 1,
//     username: "ShadowStrike",
//     realName: "Alex Chen",
//     game: "Valorant",
//     role: "Duelist",
//     region: "North America",
//     rank: "Immortal 3",
//     wins: 1243,
//     tourneys: 12,
//     earnings: "$4,500",
//     looking: ["teammates", "team"],
//     discord: true,
//     email: true,
//     call: false,
//   },
//   {
//     id: 2,
//     username: "FrostByte",
//     realName: "Maria Ivanova",
//     game: "CS2",
//     role: "AWPer/Sniper",
//     region: "Europe",
//     rank: "Global Elite",
//     wins: 3421,
//     tourneys: 34,
//     earnings: "$22,000",
//     looking: ["sponsorship", "team"],
//     discord: true,
//     email: true,
//     call: true,
//   },
//   {
//     id: 3,
//     username: "BlazeFury",
//     realName: "Jake Williams",
//     game: "Fortnite",
//     role: "Flex",
//     region: "North America",
//     rank: "Champion",
//     wins: 892,
//     tourneys: 8,
//     earnings: "$12,000",
//     looking: ["sponsorship", "funding"],
//     discord: false,
//     email: true,
//     call: false,
//   },
//   {
//     id: 4,
//     username: "VoidReaper",
//     realName: "Kian Park",
//     game: "PUBG",
//     role: "Fragger",
//     region: "Asia",
//     rank: "Conqueror",
//     wins: 2100,
//     tourneys: 21,
//     earnings: "$9,800",
//     looking: ["team", "funding"],
//     discord: true,
//     email: true,
//     call: true,
//   },
//   {
//     id: 5,
//     username: "NeonWraith",
//     realName: "Sofia Reyes",
//     game: "Free Fire",
//     role: "Support",
//     region: "Latin America",
//     rank: "Heroic",
//     wins: 670,
//     tourneys: 6,
//     earnings: "$3,200",
//     looking: ["teammates", "sponsorship"],
//     discord: true,
//     email: false,
//     call: false,
//   },
//   {
//     id: 6,
//     username: "IronClad",
//     realName: "Tariq Hassan",
//     game: "Call of Duty",
//     role: "Entry Fragger",
//     region: "Middle East",
//     rank: "Top 250",
//     wins: 1850,
//     tourneys: 17,
//     earnings: "$7,400",
//     looking: ["team", "teammates"],
//     discord: true,
//     email: true,
//     call: false,
//   },
// ];

// const allGames = ["All Games", ...new Set(players.map((p) => p.game))];
// const allRegions = ["All Regions", ...new Set(players.map((p) => p.region))];
// const allRoles = ["All Roles", ...new Set(players.map((p) => p.role))];

// const lookingIcons = {
//   teammates: "👥",
//   team: "🎮",
//   sponsorship: "💰",
//   funding: "💎",
// };

// const PlayerAvatar = ({ username }) => {
//   const initials = username.slice(0, 2).toUpperCase();
//   return (
//     <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-black text-xl select-none">
//       {initials}
//     </div>
//   );
// };

// const StatBox = ({ icon, value, label }) => (
//   <div className="flex flex-col items-center justify-center px-4 py-3 rounded-xl bg-white/5 border border-white/8 min-w-[90px] flex-1">
//     <span className="text-cyan-400 text-lg mb-1">{icon}</span>
//     <span className="text-white font-extrabold text-base leading-none">{value}</span>
//     <span className="text-gray-500 text-xs mt-1">{label}</span>
//   </div>
// );

// const PlayerCard = ({ player, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, scale: 0.95 }}
//     transition={{ duration: 0.45, delay: index * 0.07 }}
//     className="group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/[0.03] transition-all duration-400 overflow-hidden"
//   >
//     {/* Top glow on hover */}
//     <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/60 transition-all duration-500" />

//     <div className="p-6 flex flex-col gap-5 flex-1">
//       {/* Header */}
//       <div className="flex items-start gap-4">
//         <PlayerAvatar username={player.username} />
//         <div className="flex-1 min-w-0">
//           <h3 className="text-white font-extrabold text-xl tracking-wide truncate">{player.username}</h3>
//           <p className="text-gray-500 text-sm">{player.realName}</p>
//           <div className="flex flex-wrap gap-2 mt-2">
//             <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-400/40 text-cyan-400">
//               {player.game}
//             </span>
//             <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-400/40 text-blue-400">
//               {player.role}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Region & Rank */}
//       <div className="flex items-center gap-5 text-sm">
//         <span className="flex items-center gap-1.5 text-gray-400">
//           <span>📍</span> {player.region}
//         </span>
//         <span className="flex items-center gap-1.5 text-gray-400">
//           <span>🏅</span> {player.rank}
//         </span>
//       </div>

//       {/* Stats */}
//       <div className="flex gap-2">
//         <StatBox icon="🏆" value={player.wins.toLocaleString()} label="Wins" />
//         <StatBox icon="🎯" value={player.tourneys} label="Tourneys" />
//         <StatBox icon="💵" value={player.earnings} label="Earnings" />
//       </div>

//       {/* Looking For */}
//       <div className="flex flex-wrap gap-2">
//         {player.looking.map((tag) => (
//           <span
//             key={tag}
//             className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-400"
//           >
//             {lookingIcons[tag]} {tag}
//           </span>
//         ))}
//       </div>

//       {/* Contact Buttons */}
//       <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5 mt-auto">
//         {player.discord && (
//           <button className="flex items-center gap-2 px-5 py-2 rounded-xl border border-cyan-400/50 text-cyan-400 text-sm font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
//             <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.1.127 18.11a19.876 19.876 0 0 0 5.99 3.03.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.027c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
//             </svg>
//             Discord
//           </button>
//         )}
//         {player.email && (
//           <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-400 text-sm font-medium hover:text-white hover:bg-white/5 transition-all duration-300">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//             </svg>
//             Email
//           </button>
//         )}
//         {player.call && (
//           <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-400 text-sm font-medium hover:text-white hover:bg-white/5 transition-all duration-300">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//             </svg>
//             Call
//           </button>
//         )}
//       </div>
//     </div>
//   </motion.div>
// );

// const PlayerDirectory = () => {
//   const [search, setSearch] = useState("");
//   const [game, setGame] = useState("All Games");
//   const [region, setRegion] = useState("All Regions");
//   const [role, setRole] = useState("All Roles");

//   const filtered = players.filter((p) => {
//     const q = search.toLowerCase();
//     const matchSearch =
//       !q ||
//       p.username.toLowerCase().includes(q) ||
//       p.game.toLowerCase().includes(q) ||
//       p.role.toLowerCase().includes(q) ||
//       p.realName.toLowerCase().includes(q);
//     const matchGame = game === "All Games" || p.game === game;
//     const matchRegion = region === "All Regions" || p.region === region;
//     const matchRole = role === "All Roles" || p.role === role;
//     return matchSearch && matchGame && matchRegion && matchRole;
//   });

//   const selectClass =
//     "bg-white/5 border border-white/10 text-gray-300 text-sm rounded-xl px-4 py-2.5 pr-8 appearance-none cursor-pointer hover:border-cyan-400/40 focus:outline-none focus:border-cyan-400/60 transition-all duration-200 backdrop-blur-sm";

//   return (
//     <div className="min-h-screen pt-5 md:pt-15 bg-black text-white">

//       {/* ── Page Header ── */}
//       <div className="relative px-6 md:px-10 pt-15  pb-4 border-b border-white/5">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,255,255,0.05),transparent_60%)]" />
//         <div className="relative max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center">
//               <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//               </svg>
//             </div>
//             <h1 className="text-2xl  md:text-3xl font-extrabold tracking-tight">
//               <span className="text-white">Player </span>
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 Directory
//               </span>
//             </h1>
//           </div>
//           <span className="text-gray-500 text-sm font-medium">
//             {filtered.length} player{filtered.length !== 1 ? "s" : ""}
//           </span>
//         </div>
//       </div>

//       {/* ── Search & Filters ── */}
//       <div className="px-6 md:px-10 py-6 border-b border-white/5 bg-white/[0.02]">
//         <div className="max-w-7xl mx-auto flex flex-col gap-4">
//           {/* Search bar */}
//           <div className="relative">
//             <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search players by name, game, or role..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.07] transition-all duration-300"
//             />
//             {search && (
//               <button
//                 onClick={() => setSearch("")}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
//               >
//                 ✕
//               </button>
//             )}
//           </div>

//           {/* Filters row */}
//           <div className="flex flex-wrap gap-3">
//             {/* Game */}
//             <div className="relative">
//               <select value={game} onChange={(e) => setGame(e.target.value)} className={selectClass}>
//                 {allGames.map((g) => <option key={g} value={g}>{g}</option>)}
//               </select>
//               <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>

//             {/* Region */}
//             <div className="relative">
//               <select value={region} onChange={(e) => setRegion(e.target.value)} className={selectClass}>
//                 {allRegions.map((r) => <option key={r} value={r}>{r}</option>)}
//               </select>
//               <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>

//             {/* Role */}
//             <div className="relative">
//               <select value={role} onChange={(e) => setRole(e.target.value)} className={selectClass}>
//                 {allRoles.map((r) => <option key={r} value={r}>{r}</option>)}
//               </select>
//               <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>

//             {/* Clear filters */}
//             {(game !== "All Games" || region !== "All Regions" || role !== "All Roles" || search) && (
//               <button
//                 onClick={() => { setGame("All Games"); setRegion("All Regions"); setRole("All Roles"); setSearch(""); }}
//                 className="px-4 py-2.5 rounded-xl text-cyan-400 border border-cyan-400/30 text-sm font-medium hover:bg-cyan-400/10 transition-all duration-200"
//               > 
//                 Clear All
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ── Player Grid ── */}
//       <div className="px-6 md:px-10 py-8 max-w-7xl mx-auto">
//         <AnimatePresence mode="wait">
//           {filtered.length > 0 ? (
//             <motion.div
//               key="grid"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
//             >
//               {filtered.map((player, i) => (
//                 <PlayerCard key={player.id} player={player} index={i} />
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div
//               key="empty"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="flex flex-col items-center justify-center py-24 text-center"
//             >
//               <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-3xl">
//                 🔍
//               </div>
//               <p className="text-white font-bold text-xl mb-2">No players found</p>
//               <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default PlayerDirectory;



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const players = [
  {
    id: 1,
    username: "ShadowStrike",
    realName: "Alex Chen",
    game: "Valorant",
    role: "Duelist",
    region: "North America",
    rank: "Immortal 3",
    wins: 1243,
    tourneys: 12,
    earnings: "$4,500",
    looking: ["teammates", "team"],
    discord: true,
    email: true,
    call: false,
  },
  {
    id: 2,
    username: "FrostByte",
    realName: "Maria Ivanova",
    game: "CS2",
    role: "AWPer/Sniper",
    region: "Europe",
    rank: "Global Elite",
    wins: 3421,
    tourneys: 34,
    earnings: "$22,000",
    looking: ["sponsorship", "team"],
    discord: true,
    email: true,
    call: true,
  },
  {
    id: 3,
    username: "BlazeFury",
    realName: "Jake Williams",
    game: "Fortnite",
    role: "Flex",
    region: "North America",
    rank: "Champion",
    wins: 892,
    tourneys: 8,
    earnings: "$12,000",
    looking: ["sponsorship", "funding"],
    discord: false,
    email: true,
    call: false,
  },
  {
    id: 4,
    username: "VoidReaper",
    realName: "Kian Park",
    game: "PUBG",
    role: "Fragger",
    region: "Asia",
    rank: "Conqueror",
    wins: 2100,
    tourneys: 21,
    earnings: "$9,800",
    looking: ["team", "funding"],
    discord: true,
    email: true,
    call: true,
  },
  {
    id: 5,
    username: "NeonWraith",
    realName: "Sofia Reyes",
    game: "Free Fire",
    role: "Support",
    region: "Latin America",
    rank: "Heroic",
    wins: 670,
    tourneys: 6,
    earnings: "$3,200",
    looking: ["teammates", "sponsorship"],
    discord: true,
    email: false,
    call: false,
  },
  {
    id: 6,
    username: "IronClad",
    realName: "Tariq Hassan",
    game: "Call of Duty",
    role: "Entry Fragger",
    region: "Middle East",
    rank: "Top 250",
    wins: 1850,
    tourneys: 17,
    earnings: "$7,400",
    looking: ["team", "teammates"],
    discord: true,
    email: true,
    call: false,
  },
];

const allGames = ["All Games", ...new Set(players.map((p) => p.game))];
const allRegions = ["All Regions", ...new Set(players.map((p) => p.region))];
const allRoles = ["All Roles", ...new Set(players.map((p) => p.role))];

const lookingLabels = {
  teammates: "Teammates",
  team: "Team",
  sponsorship: "Sponsorship",
  funding: "Funding",
};

const PlayerAvatar = ({ username }) => {
  const initials = username.slice(0, 2).toUpperCase();
  return (
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400 font-black text-xl select-none">
      {initials}
    </div>
  );
};

const StatBox = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center px-4 py-3 rounded-xl bg-white/5 border border-white/8 min-w-[90px] flex-1">
    <span className="text-white font-extrabold text-base leading-none">{value}</span>
    <span className="text-gray-500 text-xs mt-1">{label}</span>
  </div>
);

// ── Summary Stats Banner ──
const SummaryStats = () => {
  const totalPlayers = players.length;
  const activeGames = new Set(players.map((p) => p.game)).size;
  const totalRegions = new Set(players.map((p) => p.region)).size;

  const stats = [
    {
      value: totalPlayers,
      label: "Total Players",
      description: "Registered competitive players across all titles",
    },
    {
      value: activeGames,
      label: "Active Games",
      description: "Titles currently represented in the directory",
    },
    {
      value: totalRegions,
      label: "Regions",
      description: "Global regions with active player presence",
    },
  ];

  return (
    <div className="px-6 md:px-10 py-8 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-5">
          Directory Overview
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/40 transition-all duration-500" />
              <span className="text-4xl font-extrabold text-white leading-none">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-cyan-400">
                {stat.label}
              </span>
              <p className="text-xs text-gray-500 leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PlayerCard = ({ player, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.45, delay: index * 0.07 }}
    className="group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/[0.03] transition-all duration-400 overflow-hidden"
  >
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/60 transition-all duration-500" />

    <div className="p-6 flex flex-col gap-5 flex-1">
      {/* Header */}
      <div className="flex items-start gap-4">
        <PlayerAvatar username={player.username} />
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-extrabold text-xl tracking-wide truncate">{player.username}</h3>
          <p className="text-gray-500 text-sm">{player.realName}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-400/40 text-cyan-400">
              {player.game}
            </span>
            <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-400/40 text-blue-400">
              {player.role}
            </span>
          </div>
        </div>
      </div>

      {/* Region & Rank — text only, no emoji */}
      <div className="flex items-center gap-5 text-sm">
        <span className="text-gray-400">{player.region}</span>
        <span className="w-1 h-1 rounded-full bg-gray-700" />
        <span className="text-gray-400">{player.rank}</span>
      </div>

      {/* Stats */}
      <div className="flex gap-2">
        <StatBox value={player.wins.toLocaleString()} label="Wins" />
        <StatBox value={player.tourneys} label="Tourneys" />
        <StatBox value={player.earnings} label="Earnings" />
      </div>

      {/* Looking For */}
      <div className="flex flex-wrap gap-2">
        {player.looking.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-400"
          >
            {lookingLabels[tag]}
          </span>
        ))}
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5 mt-auto">
        {player.discord && (
          <button className="flex items-center gap-2 px-5 py-2 rounded-xl border border-cyan-400/50 text-cyan-400 text-sm font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.1.127 18.11a19.876 19.876 0 0 0 5.99 3.03.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.027c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
            Discord
          </button>
        )}
        {player.email && (
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-400 text-sm font-medium hover:text-white hover:bg-white/5 transition-all duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </button>
        )}
        {player.call && (
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-gray-400 text-sm font-medium hover:text-white hover:bg-white/5 transition-all duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call
          </button>
        )}
      </div>
    </div>
  </motion.div>
);

const PlayerDirectory = () => {
  const [search, setSearch] = useState("");
  const [game, setGame] = useState("All Games");
  const [region, setRegion] = useState("All Regions");
  const [role, setRole] = useState("All Roles");

  const filtered = players.filter((p) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      p.username.toLowerCase().includes(q) ||
      p.game.toLowerCase().includes(q) ||
      p.role.toLowerCase().includes(q) ||
      p.realName.toLowerCase().includes(q);
    const matchGame = game === "All Games" || p.game === game;
    const matchRegion = region === "All Regions" || p.region === region;
    const matchRole = role === "All Roles" || p.role === role;
    return matchSearch && matchGame && matchRegion && matchRole;
  });

  const selectClass =
    "bg-white/5 border border-white/10 text-gray-300 text-sm rounded-xl px-4 py-2.5 pr-8 appearance-none cursor-pointer hover:border-cyan-400/40 focus:outline-none focus:border-cyan-400/60 transition-all duration-200 backdrop-blur-sm";

  return (
    <div className="min-h-screen pt-5 md:pt-15 bg-black text-white">

      {/* ── Page Header ── */}
      <div className="relative px-6 md:px-10 pt-15 pb-8 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,255,255,0.05),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                <span className="text-white">Player </span>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Directory
                </span>
              </h1>
            </div>
            <span className="text-gray-500 text-sm font-medium">
              {filtered.length} player{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
            Browse and connect with competitive players from around the world. Filter by game, region, or role to find teammates, form a team, or discover talent open to sponsorship and funding opportunities.
          </p>
        </div>
      </div>

      {/* ── Summary Stats Banner ── */}
      <SummaryStats />

      {/* ── Search & Filters ── */}
      <div className="px-6 md:px-10 py-6 border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto flex flex-col gap-4">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search players by name, game, or role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.07] transition-all duration-300"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <select value={game} onChange={(e) => setGame(e.target.value)} className={selectClass}>
                {allGames.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="relative">
              <select value={region} onChange={(e) => setRegion(e.target.value)} className={selectClass}>
                {allRegions.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <div className="relative">
              <select value={role} onChange={(e) => setRole(e.target.value)} className={selectClass}>
                {allRoles.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {(game !== "All Games" || region !== "All Regions" || role !== "All Roles" || search) && (
              <button
                onClick={() => { setGame("All Games"); setRegion("All Regions"); setRole("All Roles"); setSearch(""); }}
                className="px-4 py-2.5 rounded-xl text-cyan-400 border border-cyan-400/30 text-sm font-medium hover:bg-cyan-400/10 transition-all duration-200"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Player Grid ── */}
      <div className="px-6 md:px-10 py-8 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
            >
              {filtered.map((player, i) => (
                <PlayerCard key={player.id} player={player} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-white font-bold text-xl mb-2">No players found</p>
              <p className="text-gray-500 text-sm">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PlayerDirectory;