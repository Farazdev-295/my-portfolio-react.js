import React from "react";

const education = [
  // ✅ New item added here
  { 
    title: "Junior MERN Stack Developer (Internship)", 
    inst: "Freelance & Practical Work", 
    year: "6 Months (2025- Present)", 
    icon: "laptop-code" 
  },
  { title: "BS Computer Science (BSCS)", inst: "Superior University, Lahore", year: "In Progress", icon: "graduation-cap" },
  { title: "Web Development Course", inst: "EVS Institute, Lahore", year: "Completed", icon: "certificate" },
  { title: "ICS-Statistics", inst: "Superior Group of College", year: "2022-2024", icon: "clock" },
  { title: "Matric (Computer Science)", inst: "Bab-e-Arqam School", year: "2020-2022", icon: "school" },
];

export default function About() {
  return (
    <div className="pt-28 px-6 pb-16 bg-[#05070c]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="section-title mt-2">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00e0ff] to-[#b77eff] mt-3 mb-5"></div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I am a motivated Junior MERN Stack Developer with 6 months of hands-on experience building full-stack web applications. I am currently pursuing a BS in Computer Science from Superior University, Lahore.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            My strong foundation in C++ and JavaScript has sharpened my logic-building skills. I specialize in creating dynamic React frontends, secure Node.js/Express REST APIs, and MongoDB-driven backends. I have proven experience integrating payment gateways (Stripe), Cloudinary media management, and Nodemailer-powered email workflows.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Currently, I am engineering an AI-driven eCommerce platform using the MERN stack. My goal is to work in a remote role and become a highly skilled web developer contributing to production-grade products.
          </p>
          <p className="text-gray-400 mt-5 flex items-center gap-2">
            <i className="fas fa-quote-left text-[#00e0ff]"></i>
            Clean code, performance obsession, and pixel-perfect design.
          </p>
        </div>

        <div className="premium-card p-7">
          <h3 className="text-xl font-display font-bold flex items-center gap-2 mb-5">
            <i className="fas fa-award text-[#00e0ff]"></i>
            Education & Experience Timeline
          </h3>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="flex gap-4 items-center border-b border-white/5 pb-4 last:border-0">
                <div className="w-11 h-11 rounded-xl bg-[#0f1220] flex items-center justify-center text-[#00e0ff]">
                  <i className={`fas fa-${edu.icon}`}></i>
                </div>
                <div>
                  <div className="font-bold text-white">{edu.title}</div>
                  <div className="text-gray-400 text-sm">{edu.inst} | {edu.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}