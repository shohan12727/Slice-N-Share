import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaTwitch } from "react-icons/fa";
import logo from "../assets/logo-image.png"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Column 1: Logo */}
        <div className="flex flex-col items-start space-y-4">
         
          <div className="w-40 h-16      rounded-lg flex items-center justify-center text-sm text-gray-400">
            <img src={logo} alt="logo" className="w-40" />
          </div>

          <p className="text-sm text-gray-400">
            Ultimate esports hub for tournaments, teams, and live action.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitch />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Tournaments</a></li>
            <li><a href="#" className="hover:text-white">Teams</a></li>
            <li><a href="#" className="hover:text-white">Leaderboard</a></li>
            <li><a href="#" className="hover:text-white">News</a></li>
          </ul>
        </div>

        {/* Column 3: Contact / Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Stay Updated
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Subscribe to get the latest esports updates.
          </p>

          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-500"
            />

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Esports Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
