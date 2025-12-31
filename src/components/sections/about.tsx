"use client";

import { motion } from "framer-motion";
import { ANIMATION_VARIANTS } from "@/lib/constants";
import { educationData } from "@/data/achievements";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { ScrollReveal, GradientText } from "@/components/animations";

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">

        <ScrollReveal delay={0.1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Machine Learning Engineer specializing in deep learning, NLP, computer vision, and scalable AI systems.
              Passionate about responsible AI, continuous learning, and impactful innovation.
            </p>
          </motion.div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">

            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Hi! I&apos;m Abdulrahman Taghyan, a Computer Science student at Shorouk Academy and a Machine Learning Engineer.
                I specialize in building AI-powered systems with real-world impact, focusing on NLP, computer vision, and large-scale deep learning.
              </p>

              <p>
                I completed a Machine Learning Internship at DEPI (Digital Egypt Pioneers Initiative), where I built and trained ML/DL models,
                developed preprocessing pipelines, and implemented NLP solutions. This experience strengthened my ability to deliver practical AI systems.
              </p>

              <p>
                I actively contribute to Kaggle competitions and open-source projects, and I&apos;ve developed impactful solutions like the RX-AI graduation project
                and a Mental Health Chatbot powered by advanced NLP techniques. I&apos;m passionate about leveraging AI to solve real-world problems responsibly.
              </p>
            </div>

            <div className="relative flex flex-col items-center">
              <div className="absolute -top-24">
                <div className="relative w-75 h-75 rounded-full p-[4px] bg-gradient-to-br from-primary via-purple-500 to-blue-500 shadow-2xl">
                  <div className="rounded-full overflow-hidden w-full h-full">
                    <img
                      src="/me/me.jpeg"
                      alt="Abdulrahman Taghyan"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <br /><br /><br />

              <div className="pt-40 w-full space-y-4">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={ANIMATION_VARIANTS.fadeUp}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {edu.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
