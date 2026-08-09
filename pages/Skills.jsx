import React from "react";

const skillGroups = [
  {
    category: "Frontend",
    color: "#61dafb",
    skills: [
      { name: "HTML5", level: 92, icon: "fab fa-html5" },
      { name: "CSS3", level: 88, icon: "fab fa-css3-alt" },
      { name: "JavaScript ES6+", level: 86, icon: "fab fa-js" },
      { name: "React.js", level: 88, icon: "fab fa-react" },
      { name: "Tailwind CSS", level: 90, icon: "fab fa-css3-alt" },
      { name: "Bootstrap", level: 82, icon: "fab fa-bootstrap" },
    ],
  },
  {
    category: "Backend & Databases",
    color: "#68a063",
    skills: [
      { name: "Node.js", level: 78, icon: "fab fa-node-js" },
      { name: "Express.js", level: 75, icon: "fab fa-node-js" },
      { name: "PHP", level: 70, icon: "fab fa-php" }, // Added from CV
      { name: "MongoDB", level: 74, icon: "fas fa-database" },
    ],
  },
  {
    category: "Integrations & Tools",
    color: "#4db33d",
    skills: [
      { name: "RESTful APIs", level: 80, icon: "fas fa-plug" },
      { name: "Stripe (Payments)", level: 72, icon: "fab fa-stripe" }, // Added
      { name: "Cloudinary", level: 70, icon: "fas fa-cloud" }, // Added
      { name: "Nodemailer", level: 68, icon: "fas fa-envelope" }, // Added
      { name: "Git & GitHub", level: 82, icon: "fab fa-git-alt" },
      { name: "Postman", level: 75, icon: "fas fa-paper-plane" }, // Added
    ],
  },
];

const familiarTags = [
  "JWT Authentication", "Responsive Web Design", "Cross-Browser Compatibility", 
  "Database Design", "CRUD Operations", "Agile / Scrum",
  "Code Reviews", "Email Workflows", "Payment Gateway Integration", "Media Management"
];

export default function Skills() {
  return (
    <div className="pt-28 px-6 pb-20 bg-[#05070c]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="section-title mt-2">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            The tools I use to build modern, scalable web applications.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {skillGroups.map((group) => (
            <div key={group.category} className="premium-card p-6">
              <h3 className="text-xl font-display font-bold border-l-4 pl-3 mb-5" style={{ borderColor: group.color }}>
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center text-sm mb-1">
                      <div className="flex items-center gap-2">
                        <i className={skill.icon} style={{ color: group.color }}></i>
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${group.color}, #00e0ff)`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Familiar Tags */}
        <div className="premium-card p-6 text-center mt-8">
          <h3 className="font-display font-bold text-lg mb-4 text-gray-300">
            <i className="fas fa-brain text-[#00e0ff] mr-2"></i>
            Also familiar with
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {familiarTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-display font-semibold hover:border-[#00e0ff]/50 hover:text-[#00e0ff] transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}