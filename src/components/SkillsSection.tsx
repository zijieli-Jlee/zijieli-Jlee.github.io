import React from "react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

function SkillTag({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.04 * index }}
      whileHover={{ scale: 1.03, y: -1 }}
      className="px-3 py-1 bg-muted/70 backdrop-blur-sm rounded-md text-sm border border-border/70 shadow-sm"
    >
      {skill}
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container max-w-5xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            Capabilities
          </h2>
          <p className="text-muted-foreground mb-8 text-center md:text-left max-w-3xl">
            The through-line is building models that respect the structure of
            the problem: diffusion processes for generation, attention patterns
            for scale, and numerical insight for scientific prediction.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((group, groupIndex) => (
            <MotionWrapper key={group.category} delay={groupIndex * 0.08}>
              <GlassCard className="p-4 h-full">
                <h3 className="text-lg font-medium mb-3 text-center md:text-left">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {group.items.map((skill, index) => (
                    <SkillTag key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
