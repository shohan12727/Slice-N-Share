import React from "react";

import pubgEvents from "../assets/Events/pupgEvents.png";
import freefireEvents from "../assets/Events/freefireEvents.png";
import codEvents from "../assets/Events/codEvents.png";

const events = [
  {
    title: "PUBG Tournament 2026",
    date: "29 December 2026",
    image: pubgEvents,
    category: "PUBG",
    status: "Upcoming",
    description:
      "Battle for survival in an intense PUBG esports tournament. Squad up, strategize, and compete against top players for ultimate victory and exciting rewards.",
  },
  {
    title: "Free Fire Championship",
    date: "24 November 2025",
    image: freefireEvents,
    category: "Free Fire",
    status: "Completed",
    description:
      "Experience fast-paced action in the Free Fire Championship. Join elite players in explosive matches filled with strategy, skill, and thrilling gameplay moments.",
  },
  {
  title: "Call of Duty Championship",
  date: "24 March 2025",
  image: codEvents,
  category: "Call of Duty",
  status: "Completed",
  description:
    "Engage in high-intensity combat at the Call of Duty Championship. Elite teams battle across tactical maps using precision gunplay, coordinated strategies, and split-second decision-making to dominate the battlefield.",
}
];

const Events = () => {
  return (
    <section className="min-h-screen bg-[#0b0f19] py-15">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-500 animate-gradient">
  ESPORTS EVENTS
</h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Join competitive gaming tournaments and experience the thrill of esports battles
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative h-[350px] overflow-hidden rounded-2xl bg-black shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-green-500/10"
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

              {/* Top Tags */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-green-500/90 px-3 py-1 text-xs font-semibold rounded-full text-black">
                  {event.category}
                </span>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  event.status === "Upcoming"
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-700 text-white"
                }`}>
                  {event.status}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                
                {/* Title */}
                <h3 className="text-xl font-bold tracking-wide">
                  {event.title}
                </h3>

                {/* Date */}
                <p className="mt-1 text-sm text-gray-300">
                  {event.date}
                </p>

                {/* Hover Content */}
                <div className="mt-4 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-gray-200">
                    {event.description}
                  </p>

                  <button className="mt-5 inline-block rounded-lg bg-green-500 px-5 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Glow Border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition duration-300 group-hover:ring-green-400/40" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;