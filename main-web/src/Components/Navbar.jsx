import { useState } from "react";
import { NavLink } from "react-router";
import logo from "../assets/main-logo-2.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Tournament", path: "/tournament" },
  { label: "Find", path: "/directory" },
  { label: "Events", path: "/events" },
  { label: "News", path: "/news" },
  { label: "Contact Us", path: "/contact-us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-transparent">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1E90FF] to-[#8A2BE2] opacity-70" />

      <div className="mx-auto max-w-7xl px-6 h-[68px] flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <NavLink to="/" className="flex items-center gap-3 flex-shrink-0 group">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="font-['Bebas_Neue'] text-2xl text-white">
            Slice N Share
          </span>
        </NavLink>

        {/* ── Center Nav Links (desktop) ── */}
        <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.07em] transition-colors duration-200 group
                  ${isActive ? "text-white" : "text-white/80 hover:text-white"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}

                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-[#1E90FF] to-[#8A2BE2] transition-all duration-300 ease-in-out
                        ${isActive
                          ? "w-4/5 opacity-100"
                          : "w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100"
                        }`}
                    />

                    {/* Glow dot */}
                    <span
                      className={`absolute bottom-[1px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1E90FF] shadow-[0_0_8px_2px_#1E90FF] transition-all duration-200
                        ${isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                        }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── Right: CTA + Hamburger ── */}
        <div className="flex items-center gap-3">
          <NavLink
            to="#"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-lg bg-gradient-to-r from-[#1E90FF] to-[#8A2BE2] text-white text-[0.78rem] font-bold uppercase tracking-[0.08em] shadow-[0_2px_14px_rgba(30,144,255,0.3)] hover:shadow-[0_4px_22px_rgba(138,43,226,0.5)] hover:-translate-y-px transition-all duration-200"
          >
           LogIn
          </NavLink>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] rounded bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[2px] rounded bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] rounded bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 pb-4 border-t border-white/10 bg-[#0a0a0f]/95">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <NavLink
                to={path}
                end={path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `relative w-full text-left py-3 text-[0.85rem] font-semibold uppercase tracking-[0.07em] transition-colors duration-200 group block
                  ${isActive ? "text-white" : "text-white/50 hover:text-white"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#1E90FF] to-[#8A2BE2] transition-all duration-300
                        ${isActive ? "w-12 opacity-100" : "w-0 opacity-0 group-hover:w-12 group-hover:opacity-100"}`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}