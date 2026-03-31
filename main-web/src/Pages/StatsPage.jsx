import React, { useEffect, useRef, useState } from "react";

// Google Fonts injection
// const fontLink = document.createElement("link");
// fontLink.rel = "stylesheet";
// fontLink.href =
//   "https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Barlow:wght@400;500;600&display=swap";
// document.head.appendChild(fontLink);

// Keyframe injection (only what Tailwind can't express)
const style = document.createElement("style");
style.textContent = `
  body { font-family: 'Barlow', sans-serif; }
  .font-orbitron { font-family: 'Orbitron', sans-serif; }

  @keyframes cardIn {
    from { opacity: 0; transform: translateY(28px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes barFill {
    from { width: 0%; }
    to   { width: 75%; }
  }
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes gridMove {
    from { background-position: 0 0; }
    to   { background-position: 48px 48px; }
  }
  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 6px rgba(0,240,255,0.25); }
    50%       { box-shadow: 0 0 18px rgba(0,240,255,0.65); }
  }

  .card-anim { animation: cardIn 0.55s cubic-bezier(0.23,1,0.32,1) both; }
  .bar-anim  { animation: barFill 1.4s cubic-bezier(0.23,1,0.32,1) 0.5s both; }
  .ticker-anim { animation: ticker 24s linear infinite; }
  .grid-anim   { animation: gridMove 28s linear infinite; }
  .tag-anim    { animation: glowPulse 3s ease-in-out infinite; }

  .card-top-cyan::before  { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#00f0ff,transparent); }
  .card-top-rose::before  { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#ff2d78,transparent); }
  .card-top-amber::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#f0b429,transparent); }

  .card-hover-cyan:hover  { border-color: rgba(0,240,255,0.5) !important; box-shadow: 0 0 32px rgba(0,240,255,0.08); }
  .card-hover-rose:hover  { border-color: rgba(255,45,120,0.5) !important; box-shadow: 0 0 32px rgba(255,45,120,0.08); }
  .card-hover-amber:hover { border-color: rgba(240,180,41,0.5) !important; box-shadow: 0 0 32px rgba(240,180,41,0.08); }

  .value-cyan  { text-shadow: 0 0 24px rgba(0,240,255,0.6); }
  .value-rose  { text-shadow: 0 0 24px rgba(255,45,120,0.6); }
  .value-amber { text-shadow: 0 0 24px rgba(240,180,41,0.6); }

  .bar-cyan  { background: linear-gradient(90deg, transparent, #00f0ff); }
  .bar-rose  { background: linear-gradient(90deg, transparent, #ff2d78); }
  .bar-amber { background: linear-gradient(90deg, transparent, #f0b429); }

  .plus-cyan  { color: #00f0ff; }
  .plus-rose  { color: #ff2d78; }
  .plus-amber { color: #f0b429; }
`;
document.head.appendChild(style);

// Count-up hook
const useCountUp = (target, duration = 1800, delay = 0) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        setCount(Math.floor(eased * target));
        if (p < 1) requestAnimationFrame(tick);
        else setCount(target);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);
  return count;
};

// SVG icons
const IconGamepad = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-5 h-5"
  >
    <rect x="2" y="6" width="20" height="12" rx="4" />
    <path d="M8 12h4M10 10v4M16 11h.01M18 13h.01" />
  </svg>
);
const IconUsers = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-5 h-5"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconTrophy = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-5 h-5"
  >
    <path d="M6 9H4a2 2 0 0 1-2-2V5h4M18 9h2a2 2 0 0 0 2-2V5h-4" />
    <path d="M6 5h12v7a6 6 0 0 1-12 0V5z" />
    <path d="M12 18v3M8 21h8" />
  </svg>
);

const STATS = [
  {
    label: "TOTAL GAMERS",
    value: 6,
    Icon: IconGamepad,
    color: "cyan",
    delay: 0,
  },
  {
    label: "TOTAL PLAYERS",
    value: 500,
    Icon: IconUsers,
    color: "rose",
    delay: 130,
  },
  {
    label: "TOURNAMENTS",
    value: 8,
    Icon: IconTrophy,
    color: "amber",
    delay: 260,
  },
];

const StatCard = ({ label, value, Icon, color, delay }) => {
  const count = useCountUp(value, 1800, delay + 300);

  return (
    <div
      className={`card-anim card-hover-${color} relative w-64 rounded border border-white/[0.07] bg-white/[0.03] backdrop-blur-md transition-colors duration-300 cursor-default overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`card-top-${color}`} />
      <div className="px-6 py-5 flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/50">
          <Icon />
        </div>
        <div
          className={`font-orbitron text-5xl font-black text-white leading-none tracking-tight value-${color} flex items-start gap-0.5`}
        >
          {count.toLocaleString()}
          <span className={`plus-${color} text-lg mt-1.5 font-bold`}>+</span>
        </div>
        <p className="font-orbitron text-[0.6rem] tracking-[0.2em] text-white/35 uppercase text-center">
          {label}
        </p>
        <div className="w-full h-px bg-white/[0.06] rounded-full overflow-hidden">
          <div
            className={`bar-anim h-full rounded-full bar-${color}`}
            style={{ animationDelay: `${delay + 500}ms` }}
          />
        </div>
      </div>
    </div>
  );
};

const StatsPage = () => (
  <div className="relative md:py-16 py-8 bg-[#050810] flex items-center justify-center overflow-hidden">
    {/* Animated grid */}
    <div
      className="grid-anim absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,240,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.035) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
    {/* Vignette */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 25%, #050810 80%)",
      }}
    />
    {/* Scanlines */}
    <div
      className="absolute inset-0 pointer-events-none opacity-30"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(0,0,0,0.18) 3px, rgba(0,0,0,0.18) 4px)",
      }}
    />

    {/* Content */}
    <div className="relative z-10 w-full max-w-5xl px-4 py-4 flex flex-col items-center gap-10">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-orbitron text-5xl font-black text-white tracking-widest uppercase leading-none mt-1">
          Arena{" "}
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "1.5px #00f0ff",
              filter: "drop-shadow(0 0 10px rgba(0,240,255,0.5))",
            }}
          >
            Metrics
          </span>
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-5 justify-center">
        {STATS.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* Ticker */}
      <div className="w-full max-w-3xl border border-white/[0.06] rounded-sm overflow-hidden flex items-center font-orbitron text-[0.6rem] tracking-widest">
        <span className="bg-cyan-400 text-[#050810] font-bold px-3 py-2 shrink-0 uppercase">
          System
        </span>
        <div className="overflow-hidden w-full">
          <p className="ticker-anim whitespace-nowrap text-white/30 px-4 py-2 inline-block">
            Season 7 Active &nbsp;///&nbsp; Ranked Queues Open &nbsp;///&nbsp;
            Next Tournament in 3 Days &nbsp;///&nbsp; Prize Pool: $25,000
            &nbsp;///&nbsp; Season 7 Active &nbsp;///&nbsp; Ranked Queues Open
            &nbsp;///&nbsp; Next Tournament in 3 Days &nbsp;///&nbsp; Prize
            Pool: $25,000
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default StatsPage;
