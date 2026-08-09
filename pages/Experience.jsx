import React from "react";

const experiences = [
  {
    role: "Junior MERN Stack Developer",
    company: "Freelance & Practical Work",
    location: "Lahore, Pakistan",
    period: "2024 – Present",
    duration: "6 Months",
    type: "Professional",
    icon: "fa-laptop-code",
    color: "#00e0ff",
    description: "Worked as a Junior MERN Stack Developer building full-stack web applications. Hands-on experience in developing dynamic React frontends, secure REST APIs, and MongoDB databases.",
    achievements: [
      "Built a feature-rich Food Delivery application with full authentication, dynamic order tracking, and Stripe payment gateway integration.",
      "Integrated Nodemailer for automated transactional emails (registration verification, order receipts, and password reset flows).",
      "Configured Cloudinary API for secure cloud storage and fast delivery of food product images.",
      "Developed secure REST API endpoints in Node.js/Express for scalable backend solutions.",
      "Managed database schemas in MongoDB for user roles, orders, and authentication states."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Cloudinary", "Nodemailer"],
  },
  {
    role: "Full Stack Web Development Trainee",
    company: "Self-Led Training & EVS Institute",
    location: "Lahore, Pakistan",
    period: "2023 – 2024",
    duration: "1+ Year",
    type: "Training",
    icon: "fa-code",
    color: "#b77eff",
    description: "Intensive training program focusing on full stack web development fundamentals, data structures, and modern JavaScript frameworks.",
    achievements: [
      "Strengthened core programming concepts through intensive practice in C++ and JavaScript.",
      "Built multiple projects including a Weather Forecasting App and a Task Management App using React.js and REST APIs.",
      "Learned database schema design for both SQL (PHP/MySQL) and NoSQL (MongoDB).",
      "Developed proficiency in Git, GitHub, Postman, and VS Code for professional workflow.",
      "Designed and deployed a modern developer portfolio using React.js, Tailwind CSS, and Framer Motion."
    ],
    tech: ["C++", "JavaScript", "React.js", "Node.js", "MongoDB", "PHP", "Tailwind CSS"],
  },
];

export default function Experience() {
  return (
    <div className="pt-28 px-6 pb-20 bg-[#05070c]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title mt-2">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Professional experience and intensive training that shaped my development journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00e0ff] via-[#b77eff] to-transparent hidden md:block"></div>

          {experiences.map((exp, i) => (
            <div 
              key={exp.role} 
              className="flex flex-col md:flex-row gap-6 mb-10 animate-fade-up" 
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg transition-all duration-300 hover:scale-110"
                  style={{
                    background: `rgba(${exp.color === "#00e0ff" ? "0,224,255" : "123,94,167"},0.15)`,
                    border: `2px solid ${exp.color}`,
                    color: exp.color,
                    boxShadow: `0 0 15px ${exp.color}40`,
                  }}
                >
                  <i className={`fas ${exp.icon}`}></i>
                </div>
              </div>

              {/* Content Card */}
              <div className="premium-card flex-1 p-6">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold mt-1" style={{ color: exp.color }}>
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span
                      className="text-xs font-display font-bold px-3 py-1 rounded-full"
                      style={{
                        background: `rgba(${exp.color === "#00e0ff" ? "0,224,255" : "123,94,167"},0.15)`,
                        border: `1px solid ${exp.color}`,
                        color: exp.color,
                      }}
                    >
                      {exp.duration}
                    </span>
                    <p className="text-gray-500 text-xs mt-1">{exp.period}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-xs font-display font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                        <i className="fas fa-check-circle text-xs mt-0.5 flex-shrink-0" style={{ color: exp.color }}></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="pt-3 border-t border-white/10">
                  <h4 className="text-xs font-display font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-display font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-[#00e0ff]/50 hover:text-[#00e0ff] transition-all duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            <i className="fas fa-code mr-2 text-[#00e0ff]"></i>
            Continuously learning and growing — always open to new challenges!
          </p>
        </div>
      </div>
    </div>
  );
}