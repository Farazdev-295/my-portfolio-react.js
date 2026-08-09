import React, { useState } from "react";

const projects = [
  {
    title: "Food Delivery Application",
    description: "A feature-rich food delivery platform built with MERN stack. Features full authentication, dynamic order tracking, and Stripe payment gateway integration.",
    tags: ["React.js", "Node.js", "MongoDB", "Stripe", "Cloudinary", "Nodemailer"],
    category: "Full Stack",
    status: "Live",
    highlights: ["Order Tracking", "Payment Gateway", "Email Automation", "Image Upload"],
    icon: "fa-utensils",
    accent: "#00e0ff",
  },
  {
    title: "AI-Driven eCommerce Platform",
    description: "Currently engineering a modular eCommerce platform with planned AI-powered product recommendations and automated search query features using the MERN stack.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    category: "Full Stack",
    status: "In Progress",
    highlights: ["AI Recommendations", "Smart Search", "Modular Design", "Scalable"],
    icon: "fa-robot",
    accent: "#b77eff",
  },
  {
    title: "Interactive Personal Portfolio",
    description: "A modern developer portfolio featuring dynamic component workflows, custom animations, and a fully responsive design built with React.js, Tailwind CSS, and Framer Motion.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Frontend",
    status: "Live",
    highlights: ["Custom Animations", "Dynamic UI", "Responsive Design", "Fast Loading"],
    icon: "fa-laptop-code",
    accent: "#61dafb",
  },
  {
    title: "Weather Forecasting App",
    description: "A real-time weather application consuming third-party REST APIs to display live updates, forecasts, and weather conditions for any searched city.",
    tags: ["React.js", "REST API", "Axios", "Bootstrap"],
    category: "Frontend",
    status: "Live",
    highlights: ["Live API Data", "City Search", "Current Conditions", "Forecast"],
    icon: "fa-cloud-sun",
    accent: "#f39c12",
  },
  {
    title: "Taskflow Task Manager",
    description: "An interactive task manager for tracking daily goals with persistent state. Allows users to add, delete, and mark tasks as complete with a clean interface.",
    tags: ["React.js", "LocalStorage", "Bootstrap", "Hooks"],
    category: "Frontend",
    status: "Live",
    highlights: ["CRUD Operations", "Data Persistence", "Task Filtering", "Clean UI"],
    icon: "fa-check-double",
    accent: "#2ecc71",
  },
];

const filters = ["All", "Frontend", "Full Stack"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-28 px-6 pb-20 bg-gradient-to-b from-[#05070c] to-[#0b0e1a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="section-title mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Real-world applications built using modern web technologies.
          </p>
          {/* ✅ Stats Updated according to CV data */}
          <div className="flex justify-center gap-6 mt-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#00e0ff]">4</p>
              <p className="text-xs text-gray-500">Live</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#00e0ff]">1</p>
              <p className="text-xs text-gray-500">In Progress</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#00e0ff]">0</p>
              <p className="text-xs text-gray-500">Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#00e0ff]">5</p>
              <p className="text-xs text-gray-500">Total</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mt-8 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-display font-bold text-sm px-5 py-2 rounded-full transition-all duration-200 ${
                active === f
                  ? "bg-[#00e0ff] text-black shadow-md shadow-[#00e0ff]/40"
                  : "border border-white/20 text-gray-400 hover:text-white hover:border-[#00e0ff]/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="premium-card p-6 group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span
                  className={`text-xs font-display font-bold px-2.5 py-1 rounded-full border ${
                    project.status === "Live" 
                      ? "bg-green-500/10 border-green-500/30 text-green-400"
                      : project.status === "Completed"
                      ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                      : "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>
                <i className={`fas ${project.icon} text-2xl text-[#00e0ff] opacity-80`}></i>
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
                  >
                    {h}
                  </span>
                ))}
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-display font-semibold text-gray-400 bg-white/5 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* GitHub Link Section */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Farazdev-295" 
            target="_blank" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-[#00e0ff]/50 transition-all"
          >
            <i className="fab fa-github"></i>
            <span>View All Projects on GitHub →</span>
          </a>
        </div>
      </div>
    </div>
  );
}