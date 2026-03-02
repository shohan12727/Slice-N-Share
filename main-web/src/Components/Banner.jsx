import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

import banner1 from "../assets/pupg.png";
import banner2 from "../assets/freefire.png";
import banner3 from "../assets/callOfDuty.png";

const slides = [
  {
    image: banner1,
    title: "ENTER THE BATTLEFIELD",
    subtitle: "Compete in elite tournaments and prove you're the ultimate champion.",
    button: "Join Tournament",
    link: "/tournaments",
  },
  {
    image: banner2,
    title: "RISE THROUGH THE RANKS",
    subtitle: "Track your stats, climb leaderboards and dominate the arena.",
    button: "View Leaderboard",
    link: "/leaderboard",
  },
  {
    image: banner3,
    title: "BUILD YOUR DYNASTY",
    subtitle: "Create your squad and conquer championships together.",
    button: "Create Team",
    link: "/teams",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[420px] md:h-[750px] overflow-hidden bg-black">
      
      {/* Background Image with Smooth Fade */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[index].image}
          src={slides[index].image}
          alt="esports banner"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      {/* Neon Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,255,255,0.15),transparent_40%)]"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1 bg-cyan-500/20 border border-cyan-400 text-cyan-400 text-sm rounded-full backdrop-blur-md"
          >
            🔴 LIVE TOURNAMENTS AVAILABLE
          </motion.div>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[index].title}
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 60, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-6xl font-extrabold text-white leading-tight uppercase tracking-wide max-w-3xl"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                {slides[index].title}
              </span>
            </motion.h1>
          </AnimatePresence>

          {/* Subtitle */}
          <motion.p
            key={slides[index].subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 text-gray-300 text-sm md:text-xl max-w-2xl"
          >
            {slides[index].subtitle}
          </motion.p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to={slides[index].link}>
              <button className="px-7 py-3 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition duration-300 shadow-lg shadow-cyan-500/40">
                {slides[index].button}
              </button>
            </Link>

            <Link to="/about">
              <button className="px-7 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300">
                Learn More
              </button>
            </Link>
          </div>

          {/* Slider Dots */}
          <div className="flex gap-3 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-cyan-400 scale-125" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;