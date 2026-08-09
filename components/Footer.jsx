import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[#00e0ff]/15 bg-[#05070c] py-8 px-5 mt-16">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-5">
        <div className="flex items-center gap-3">
          <i className="fas fa-crown text-[#00e0ff] text-lg"></i>
          <span className="font-display font-bold text-gray-200">Faraz Shahbaz — Code Artisan</span>
        </div>
        
        <div className="flex gap-5 flex-wrap">
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((label, idx) => {
            const paths = ["/", "/about", "/skills", "/projects", "/experience", "/contact"];
            return (
              <Link
                key={label}
                to={paths[idx]}
                className="text-gray-400 text-sm hover:text-[#00e0ff] transition duration-200"
              >
                {label}
              </Link>
            );
          })}
        </div>
        
        <div className="flex gap-4">
          <a href="https://github.com/Farazdev-295" target="_blank" rel="noopener noreferrer" 
             className="text-gray-300 text-xl hover:text-[#00e0ff] transition duration-200">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/faraz-shahbaz-074196347/" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 text-xl hover:text-[#00e0ff] transition duration-200">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:farazshahbaz.dev@gmail.com" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 text-xl hover:text-[#00e0ff] transition duration-200">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      
      <p className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Faraz Shahbaz • Built with React & Tailwind • Handcrafted mastery
      </p>
    </footer>
  );
}