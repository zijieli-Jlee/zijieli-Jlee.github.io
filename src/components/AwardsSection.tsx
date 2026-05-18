import React from "react";
import { researchHighlights } from "@/lib/data";
import { ExternalLink, FileText } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export default function AwardsSection() {
  return (
    <section
      id="research"
      className="py-12 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-5xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-3 text-center md:text-left">
            Selected Research
          </h2>
          <p className="text-muted-foreground mb-8 text-center md:text-left max-w-3xl">
            A compact publication and service snapshot. The full paper list
            remains available through Google Scholar and the linked CV.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {researchHighlights.map((item, index) => (
            <MotionWrapper key={item.name + item.date} delay={index * 0.1}>
              <GlassCard className="p-4 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-amber-500/15">
                    <FileText className="h-4 w-4 text-amber-700 dark:text-amber-300" />
                  </div>
                  <div>
                    <h3 className="font-medium leading-6">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.issuer}
                    </p>
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="text-xs text-muted-foreground bg-muted/60 px-2 py-1 rounded-md">
                    {item.date}
                  </span>
                  <span className="text-xs text-muted-foreground bg-muted/60 px-2 py-1 rounded-md">
                    {item.position}
                  </span>
                  <span className="text-xs text-muted-foreground bg-muted/60 px-2 py-1 rounded-md">
                    {item.type}
                  </span>
                </div>
                {item.href && (
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm text-muted-foreground hover:text-teal-700 dark:hover:text-teal-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open
                  </motion.a>
                )}
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
