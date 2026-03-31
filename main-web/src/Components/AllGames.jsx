import logo from "../assets/main-logo-2.png";
import appex    from "../assets/Allgames/appex_legend.webp";
import freeFire from "../assets/Allgames/freefire.png";
import pupg     from "../assets/Allgames/pupg.webp";

const games = [
  { id: 1, name: "Apex Legends", img: appex,    glow: "drop-shadow-[0_0_10px_rgba(200,164,74,0.9)]",  label: "text-yellow-500/90"  },
  { id: 2, name: "Free Fire",    img: freeFire,  glow: "drop-shadow-[0_0_10px_rgba(255,77,77,0.9)]",   label: "text-red-400/90"     },
  { id: 3, name: "PUBG Mobile",  img: pupg,      glow: "drop-shadow-[0_0_10px_rgba(245,197,24,0.9)]",  label: "text-yellow-300/90"  },
  { id: 4, name: "Apex Legends", img: appex,    glow: "drop-shadow-[0_0_10px_rgba(200,164,74,0.9)]",  label: "text-yellow-500/90"  },
  { id: 5, name: "Free Fire",    img: freeFire,  glow: "drop-shadow-[0_0_10px_rgba(255,77,77,0.9)]",   label: "text-red-400/90"     },
  { id: 6, name: "PUBG Mobile",  img: pupg,      glow: "drop-shadow-[0_0_10px_rgba(245,197,24,0.9)]",  label: "text-yellow-300/90"  },
];

const RADIUS = 200;    // orbit radius in px
const CONTAINER = RADIUS * 2 + 140; // total container size

const AllGames = () => {
  const total = games.length;

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_#0d1b2a_0%,_#050a10_70%)] text-white flex flex-col items-center justify-center overflow-hidden relative">

      {/* ── Ambient glows ──────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.07)_0%,transparent_70%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[820px] h-[820px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.04)_0%,transparent_70%)]" />
      </div>

      {/* ── Title ──────────────────────────────────────── */}
      <div className="text-center mb-14 z-10">
        <h1 className="text-5xl mt-10 font-bold tracking-widest uppercase text-white drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
          Explore Games
        </h1>
      </div>

      {/* ── Orbit stage ────────────────────────────────── */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: CONTAINER, height: CONTAINER }}
      >

        {/* Decorative rings */}
        <div className="absolute inset-10 rounded-full border border-cyan-500/20 animate-[ring-rotate_25s_linear_infinite]" />
        <div className="absolute inset-5  rounded-full border border-dashed border-red-500/10" />
        <div className="absolute inset-0  rounded-full border border-white/5" />

        {/* ── Spinning orbit group ───────────────────────── */}
        <div className="absolute inset-0 animate-[spin-orbit_18s_linear_infinite] hover:[animation-play-state:paused]">
          {games.map((game, index) => {
            const angle = (360 / total) * index;
            const rad   = (angle * Math.PI) / 180;
            const cx = 50 + (RADIUS / (CONTAINER / 2)) * 50 * Math.cos(rad - Math.PI / 2);
            const cy = 50 + (RADIUS / (CONTAINER / 2)) * 50 * Math.sin(rad - Math.PI / 2);

            return (
              <div
                key={game.id}
                className="absolute animate-[counter-spin_18s_linear_infinite]"
                style={{
                  left: `${cx}%`,
                  top:  `${cy}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Card */}
                <div className="group flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md cursor-pointer transition-all duration-300 hover:bg-white/[0.12] hover:border-white/25 hover:scale-110 min-w-[90px]">
                  <img
                    src={game.img}
                    alt={game.name}
                    className={`w-14 h-14 object-contain brightness-150 contrast-110 saturate-150 transition-all duration-300 group-hover:brightness-[1.8] group-hover:saturate-200 ${game.glow}`}
                  />
                  <span className={`text-[10px] font-medium tracking-wider whitespace-nowrap ${game.label}`}>
                    {game.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Center logo ────────────────────────────────── */}
        <div className="relative z-20 w-24 h-24 rounded-full flex items-center justify-center bg-red-500/10 border-2 border-red-500/30 animate-[pulse-glow_2.5s_ease-in-out_infinite]">
          <img
            src={logo}
            alt="Main Logo"
            className="w-16 h-16 object-contain brightness-125 drop-shadow-[0_0_14px_rgba(239,68,68,0.7)]"
          />
        </div>

      </div>
    </div>
  );
};

export default AllGames;