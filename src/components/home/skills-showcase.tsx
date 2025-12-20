"use client";

import Image from "next/image";
import { useState } from "react";

// Define type for skill object
interface Skill {
  name: string;
  logo: string;
}

const skills: Skill[] = [
  { name: "HTML", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Framer Motion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg" },
  { name: "Material UI", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" },
  { name: "Flask", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg" },
  { name: "MySQL", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  { name: "Firebase", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Vercel", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg" },
  { name: "Git", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  { name: "GitHub", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
  { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "Pandas", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" },
  { name: "NumPy", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" },
  { name: "Matplotlib", logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
];

export function SkillsShowcase() {
  // Split skills into rows: 8, 6, 5
  const firstRow = skills.slice(0, 8);
  const secondRow = skills.slice(8, 14);
  const thirdRow = skills.slice(14, 19);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white py-20">
      <div className="text-center mb-16 z-10">
        <h2 className="text-6xl font-extrabold mb-3 tracking-tight">Technical Skills</h2>
        <p className="text-gray-400 text-lg font-light">Skills I have mastered yet</p>
      </div>

      <div className="w-full max-w-6xl flex flex-col items-center justify-center space-y-12">
        {/* First row with 8 icons */}
        <div className="flex justify-center space-x-8">
          {firstRow.map((skill) => (
            <SkillIcon key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Second row with 6 icons */}
        <div className="flex justify-center space-x-12">
          {secondRow.map((skill) => (
            <SkillIcon key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Third row with 5 icons */}
        <div className="flex justify-center space-x-16">
          {thirdRow.map((skill) => (
            <SkillIcon key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

// SkillIcon component with light effect
function SkillIcon({ skill }: { skill: Skill }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center group">
      <div className="relative">
        {/* Light effect coming out of the side */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-white/30 to-transparent rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="relative z-10">
          {imgError ? (
            // Fallback if image fails to load
            <div className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full">
              <span className="text-xs text-white text-center px-1">{skill.name}</span>
            </div>
          ) : (
            <Image
              src={skill.logo}
              alt={skill.name}
              width={64}
              height={64}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
              unoptimized
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>
      <span className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {skill.name}
      </span>
    </div>
  );
}