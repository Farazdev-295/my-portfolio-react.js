import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="pt-28 pb-16 px-4 md:px-6 text-center relative overflow-hidden">

      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00e0ff_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-2 animate-fade-up">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#00e0ff] shadow-lg shadow-[#00e0ff]/30">
              <img 
                src="/professional.jpg"
                alt="Faraz Shahbaz"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#00e0ff] rounded-full p-2 shadow-lg">
              <i className="fas fa-code text-black text-sm"></i>
            </div>
          </div>
        </div>
        
        <span className="inline-block px-3 py-1 md:px-4 md:py-1 rounded-full bg-[#00e0ff]/10 border border-[#00e0ff]/30 text-[#00e0ff] text-xs font-display font-bold mb-4">
          ✦ FULL STACK DEVELOPER ✦
        </span>
        
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-tight">
          Faraz <span className="gradient-text">Shahbaz</span>
        </h1>
        
        <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto mt-4 md:mt-6 px-2">
          I build high-performance web applications with React, Node.js, and Tailwind — 
          clean architecture, unmatched speed, and pixel-perfect design.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6 md:mt-8">
          <Link to="/projects" className="btn-primary">
            Explore Work <i className="fas fa-arrow-right ml-1 md:ml-2 text-xs"></i>
          </Link>
          <Link to="/contact" className="btn-outline">
            Let's Connect <i className="fas fa-comment ml-1 md:ml-2 text-xs"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}