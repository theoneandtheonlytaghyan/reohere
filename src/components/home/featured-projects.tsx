"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Code, Cloud, Server, Cpu, Layers } from "lucide-react"; 
import { skillsData } from "@/data/skills"; // Assuming skillsData is defined here
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/animations"; 

// --- Configuration ---
const ACCENT_TEXT = 'text-gray-900 dark:text-gray-100';
const ACCENT_BORDER = 'border-gray-900 dark:border-gray-100';

const SKILL_ICONS = {
  'Frontend': <Code className="w-6 h-6 text-gray-800 dark:text-gray-100" />,
  'Backend': <Server className="w-6 h-6 text-gray-800 dark:text-gray-100" />,
  'DevOps': <Cloud className="w-6 h-6 text-gray-800 dark:text-gray-100" />,
  'Database': <Cpu className="w-6 h-6 text-gray-800 dark:text-gray-100" />,
};

const SKILL_COLORS = {
  'Frontend': { bar: 'bg-gray-800', badgeBg: 'bg-gray-100', badgeText: 'text-gray-800' },
  'Backend': { bar: 'bg-gray-700', badgeBg: 'bg-gray-200', badgeText: 'text-gray-700' },
  'DevOps': { bar: 'bg-gray-600', badgeBg: 'bg-gray-300', badgeText: 'text-gray-600' },
  'Database': { bar: 'bg-gray-500', badgeBg: 'bg-gray-400', badgeText: 'text-gray-500' },
};

// Assuming skillsData structure:
interface SkillCategory {
    title: string;
    skills: { name: string; level: number }[];
}

// NOTE: Since skillsData wasn't fully provided in this context,
// we assume it's correctly defined and exported from "@/data/skills" 
// with the type SkillCategory[].


export function SkillsShowcase() {
  // Safe cast assuming skillsData provides the expected structure
  const skillsDataTyped = skillsData as unknown as SkillCategory[]; 

  const showcaseSkills = skillsDataTyped.slice(0, 3).map(category => ({
    ...category,
    icon: SKILL_ICONS[category.title as keyof typeof SKILL_ICONS] || <Layers className="w-6 h-6" />,
    colors: SKILL_COLORS[category.title as keyof typeof SKILL_COLORS] || SKILL_COLORS['Frontend'],
    skills: category.skills.slice(0, 4)
  }));

  return (
    <section 
      className="py-24 md:py-36 
                 bg-white dark:bg-gray-950 
                 text-gray-900 dark:text-white 
                 relative overflow-hidden 
                 border-y border-gray-300 dark:border-gray-800"
    >
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header Section (Brutalist Typography) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className={`text-sm font-medium uppercase tracking-[0.3em] ${ACCENT_TEXT} mb-4 flex items-center justify-center`}>
            <TrendingUp className="w-4 h-4 mr-3" />
            Core Competencies
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 uppercase tracking-tighter">
            Technical Skill Matrix
          </h2>
          <div className="w-16 h-1 bg-gray-900 dark:bg-gray-100 mx-auto mt-6" />
        </motion.div>

        {/* --- Skills Grid (Structured Cards) --- */}
        <div className="grid gap-8 md:grid-cols-3 mb-20 max-w-7xl mx-auto">
          {showcaseSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
            >
              {/* className is correctly passed and assumed to be accepted by TiltCard */}
              <TiltCard className="h-full"> 
                <Card 
                  className={`h-full bg-white dark:bg-gray-900 
                             border-2 ${ACCENT_BORDER} 
                             rounded-none shadow-none 
                             transition-all duration-300 ease-in-out 
                             hover:bg-gray-100 dark:hover:bg-gray-800 
                             relative group`}
                >
                  <CardHeader className="pb-4 border-b-2 border-dashed border-gray-300 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{category.icon}</span>
                        <CardTitle className={`text-xl font-bold uppercase ${ACCENT_TEXT}`}>{category.title}</CardTitle>
                      </div>
                      <Badge 
                        variant="default" 
                        className={`text-xs uppercase px-3 py-1 font-mono 
                                    ${category.colors.badgeBg} ${category.colors.badgeText} border border-transparent 
                                    rounded-none shadow-none`}
                      >
                        {category.skills.length} Items
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1">
                          <div className="flex justify-between items-center text-sm">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm font-mono text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-none overflow-hidden">
                            <motion.div
                              className={`h-full ${category.colors.bar} rounded-none`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.0,
                                delay: categoryIndex * 0.1 + 0.3,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* --- Call to Action (Functional Block) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link href="/skills" className="inline-flex group">
            <Button 
              size="lg" 
              className={`
                         px-10 py-4 text-lg font-bold uppercase tracking-widest 
                         bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900
                         border-2 ${ACCENT_BORDER} 
                         rounded-none shadow-none 
                         transition-all duration-300 ease-in-out 
                         hover:bg-gray-700 dark:hover:bg-gray-300 
                         transform group-hover:translate-x-1 group-hover:translate-y-[-1px]`
              }
            >
              View Complete Skill Index
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
