import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 px-6 ${
      scrolled ? "bg-[#05070c]/90 backdrop-blur-xl border-b border-[#00e0ff]/20" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between h-[72px]">
        <NavLink to="/" className="flex items-center gap-2.5 no-underline group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00e0ff] to-[#b77eff] flex items-center justify-center shadow-lg shadow-[#00e0ff]/30 group-hover:scale-105 transition-transform">
            <i className="fas fa-code text-[#0a0c12] text-sm"></i>
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight text-white">
            Faraz<span className="text-[#00e0ff]">.</span>
          </span>
        </NavLink>

        <nav className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `font-display font-semibold text-sm px-4 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#00e0ff] text-black shadow-md shadow-[#00e0ff]/40"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#05070c]/95 backdrop-blur-xl border-t border-[#00e0ff]/20 px-6 pb-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-3 font-display font-semibold border-b border-white/5 ${
                  isActive ? "text-[#00e0ff]" : "text-gray-300"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}