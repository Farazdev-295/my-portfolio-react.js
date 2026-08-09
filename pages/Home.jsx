import React from "react";
import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";

const quickSkills = [
  { icon: "fab fa-react", label: "React.js", color: "#61dafb" },
  { icon: "fab fa-node-js", label: "Node.js", color: "#68a063" },
  { icon: "fas fa-database", label: "MongoDB", color: "#4db33d" },
  { icon: "fab fa-css3-alt", label: "Tailwind", color: "#06b6d4" },
];

const stats = [
  { val: "6+", unit: "Months", label: "Professional Experience" },
  { val: "3+", unit: "Projects", label: "Production Deliverables" },
  { val: "15%", unit: "Faster", label: "Performance Optimization" },
  { val: "2+", unit: "Years", label: "Coding Journey" },
];

export default function Home() {
  return (
    <div className="bg-[#05070c]">
      <HeroSection />

      {/* Quick Skills Strip - Responsive */}
      <div className="border-y border-[#00e0ff]/15 py-3 md:py-4 backdrop-blur-sm overflow-x-auto">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2 md:gap-4 px-3 md:px-4">
          {quickSkills.map((skill) => (
            <div
              key={skill.label}
              className="premium-card px-3 py-1.5 md:px-5 md:py-2 rounded-full flex items-center gap-1.5 md:gap-2"
            >
              <i className={`${skill.icon} text-sm md:text-lg`} style={{ color: skill.color }}></i>
              <span className="font-display font-semibold text-xs md:text-sm text-gray-200">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Intro Section - Responsive Grid */}
      <div className="max-w-6xl mx-auto py-12 md:py-20 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="section-title mt-2">
              Building the <span className="gradient-text">web of tomorrow</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#00e0ff] to-[#b77eff] mt-4 mb-5"></div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
              I'm a results-driven Full Stack Developer with hands-on experience at TechHive AI, Lahore.
              I specialize in creating responsive, performant web applications that users love.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
              Currently pursuing Computer Science at Superior University while continuously honing
              my skills in both frontend and backend development.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[#00e0ff] font-display font-bold border-b border-[#00e0ff]/40 pb-1 hover:gap-3 transition-all text-sm md:text-base">
              More About Me <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="premium-card p-3 md:p-5 text-center">
                <div className="text-2xl md:text-3xl font-display font-black text-[#00e0ff]">
                  {stat.val}
                  <span className="text-xs md:text-sm block text-gray-400 font-semibold">{stat.unit}</span>
                </div>
                <div className="text-gray-400 text-xs md:text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner - Responsive */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 pb-12 md:pb-20">
        <div className="bg-gradient-to-r from-[#00e0ff]/10 to-[#b77eff]/10 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#00e0ff]/20 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-5">
          <div className="text-center sm:text-left">
            <h3 className="font-display font-bold text-xl md:text-2xl text-white">
              Ready to build something <span className="text-[#00e0ff]">amazing</span>?
            </h3>
            <p className="text-gray-400 text-sm md:text-base mt-1">Let's connect and create together.</p>
          </div>
          <Link to="/contact" className="btn-primary whitespace-nowrap">
            Get In Touch <i className="fas fa-arrow-right ml-1 md:ml-2 text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}