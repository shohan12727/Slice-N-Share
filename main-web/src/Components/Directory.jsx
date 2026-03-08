import { motion } from "framer-motion";
import { Link } from "react-router";
import ScrollToTopButton from "./ScrollToTopButton";

const Directory = () => {
  return (
    <>
      <ScrollToTopButton />
      <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
        {/* Background Glow */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-600 opacity-20 blur-[180px] rounded-full"></div>

        {/* Header */}
        <div className="relative text-center pt-20 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Esports Directory
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
            Discover elite players or connect with esports teams, organizations,
            and sponsors.
          </p>
        </div>

        {/* Cards */}
        <div className="relative flex flex-1 flex-col md:flex-row gap-8 px-6 md:px-20 py-16">
          {/* Player Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="flex-1 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center text-center shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
              Find Players
            </h2>

            <p className="text-gray-400 max-w-sm mb-10">
              Explore competitive players, build teams, and recruit talent for
              your esports organization.
            </p>

            <Link
              to="/playerDirectory"
              className="px-10 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 transition shadow-[0_0_25px_rgba(0,255,255,0.5)]"
            >
              Browse Players
            </Link>
          </motion.div>

          {/* Company Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="flex-1 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center text-center shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
              Find Companies
            </h2>

            <p className="text-gray-400 max-w-sm mb-10">
              Discover esports teams, sponsors, and organizations looking for
              players and partnerships.
            </p>

            <Link
              to="/companyDirectory"
              className="px-10 py-4 border-2 border-blue-400 text-blue-400 font-bold rounded-xl hover:bg-blue-400 hover:text-black transition shadow-[0_0_20px_rgba(0,100,255,0.5)]"
            >
              Browse Companies
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Directory;
