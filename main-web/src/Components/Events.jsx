import React, { useState } from "react";

// ================= EVENTS =================

import pubgEvents from "../assets/Events/pupgEvents.png"
import ffEvents from "../assets/Events/freefireEvents.png"
import codEvents from "../assets/Events/codEvents.png"

const events = [
  {
    title: "PUBG Tournament 2026",
    date: "29 December 2026",
    image: pubgEvents,
    category: "PUBG",
    status: "Upcoming",
    players: 120,
    prize: "$10,000",
    description: "Battle for survival in an intense PUBG esports tournament.",
    accentColor: "#22c55e",
    bgGlow: "rgba(34,197,94,0.15)",
  },
  {
    title: "Free Fire Championship",
    date: "24 November 2025",
    image: ffEvents,
    category: "Free Fire",
    status: "Completed",
    players: 80,
    prize: "$5,000",
    description: "Experience fast-paced action in the Free Fire Championship.",
    accentColor: "#06b6d4",
    bgGlow: "rgba(6,182,212,0.15)",
  },
  {
    title: "Call of Duty Championship",
    date: "24 March 2025",
    image: codEvents,
    category: "Call of Duty",
    status: "Completed",
    players: 100,
    prize: "$7,500",
    description: "Engage in high-intensity combat at the Call of Duty Championship.",
    accentColor: "#facc15",
    bgGlow: "rgba(250,204,21,0.15)",
  },
];

const barData = events.map((e) => ({ name: e.category, players: e.players }));
const pieData = events.map((e) => ({ name: e.category, value: e.players }));
const COLORS = ["#22c55e", "#06b6d4", "#facc15"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0a0c14f2] border border-green-500/30 rounded-lg px-4 py-2 text-green-400 font-semibold">
        {payload[0].name}: {payload[0].value}
      </div>
    );
  }
  return null;
};

export default function Events() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Upcoming", "Completed"];
  const filtered =
    activeFilter === "All"
      ? events
      : events.filter((e) => e.status === activeFilter);

  return (
    <section className="relative min-h-screen bg-[#060810] py-20 overflow-hidden font-sans">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="text-green-500 tracking-[4px] uppercase text-xs font-bold mb-4">
            Competitive Gaming
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            ESPORTS{" "}
            <span className="stroke-green-500">
              EVENTS
            </span>
          </h1>
          <p className="text-gray-500 mt-4">
            Join competitive gaming tournaments and experience the thrill of esports battles
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 text-xs font-bold tracking-widest rounded border transition-all duration-200
                ${
                  activeFilter === f
                    ? "bg-green-500/10 border-green-500 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-green-400 hover:border-green-500/40"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* EVENTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filtered.map((event, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-[#0d1117] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                boxShadow:
                  hoveredCard === index
                    ? `0 20px 60px ${event.bgGlow}`
                    : "none",
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#0d1117]" />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="text-[10px] px-3 py-1 bg-black/60 border border-white/20 text-white rounded">
                    {event.category}
                  </span>
                  <span
                    className={`text-[10px] px-3 py-1 rounded border ${
                      event.status === "Upcoming"
                        ? "bg-yellow-400/10 border-yellow-400 text-yellow-400"
                        : "bg-white/5 border-white/10 text-white"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-1">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  📅 {event.date}
                </p>
                <p className="text-gray-400 text-sm mb-5">
                  {event.description}
                </p>

                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">
                      Players
                    </p>
                    <p
                      className="font-bold text-lg"
                      style={{ color: event.accentColor }}
                    >
                      {event.players}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">
                      Prize
                    </p>
                    <p className="font-bold text-white text-lg">
                      {event.prize}
                    </p>
                  </div>

                  <button
                    className={`px-4 py-2 text-xs font-bold rounded transition-all ${
                      event.status === "Upcoming"
                        ? "bg-green-500 text-black"
                        : "bg-white/5 border border-white/10 text-gray-400"
                    }`}
                  >
                    {event.status === "Upcoming"
                      ? "REGISTER"
                      : "RESULTS"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}