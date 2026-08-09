import React from "react";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaGithub, FaLinkedin
} from "react-icons/fa";

const contactInfo = [
  { icon: <FaEnvelope />, label: "Email", value: "farazshahbaz.dev@gmail.com", href: "mailto:farazshahbaz.dev@gmail.com" },
  { icon: <FaPhone />, label: "Phone", value: "+92 322 5103525", href: "tel:+923225103525" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Lahore, Pakistan", href: null },
];

const socials = [
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/Farazdev-295" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/faraz-shahbaz-074196347" },
];

export default function Contact() {
  return (
    <div className="pt-28 px-4 md:px-6 pb-16 md:pb-20 bg-[#05070c] min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title mt-2">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-3 max-w-2xl mx-auto px-2">
            Have a project in mind or want to collaborate? Reach out to me through any of the platforms below.
          </p>
        </div>

        {/* Contact Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {contactInfo.map(({ icon, label, value, href }) => (
            <div key={label} className="premium-card p-5 md:p-6 flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#00e0ff]/10 flex items-center justify-center text-[#00e0ff] group-hover:scale-110 group-hover:bg-[#00e0ff]/20 transition-all duration-300 mb-4">
                <div className="text-2xl md:text-3xl">{icon}</div>
              </div>
              <p className="text-[11px] text-gray-500 font-display font-bold tracking-wider uppercase mb-1">
                {label}
              </p>
              {href ? (
                <a 
                  href={href} 
                  className="text-white text-sm md:text-base font-medium hover:text-[#00e0ff] transition duration-200 break-all"
                >
                  {value}
                </a>
              ) : (
                <p className="text-white text-sm md:text-base font-medium">{value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Social Links Section */}
        <div className="mt-10 md:mt-14 premium-card p-6 md:p-8 text-center">
          <p className="text-[11px] text-gray-500 font-display font-bold tracking-wider uppercase mb-4">
            Connect With Me On Social Media
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {socials.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-display font-semibold hover:text-[#00e0ff] hover:border-[#00e0ff]/50 hover:bg-[#00e0ff]/5 transition-all duration-200"
              >
                <span className="text-lg">{icon}</span> 
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Mobile Responsive Styles */}
      <style>{`
        @media (max-width: 640px) {
          .premium-card {
            border-radius: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}