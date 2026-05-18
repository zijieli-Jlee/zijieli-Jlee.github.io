import { workExperience } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-12 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container max-w-5xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            Work Experience
          </h2>
        </MotionWrapper>
        <div className="mb-8">
          {workExperience.map((job, index) => (
            <TimelineItem
              key={job.company + job.period}
              title={`${job.position} | ${job.company}`}
              subtitle={job.location}
              date={job.period}
              isLast={index === workExperience.length - 1}
              index={index}
            >
              <motion.div
                className="relative mt-4 overflow-hidden rounded-lg border border-teal-700/15 bg-gradient-to-r from-teal-50/80 via-background to-amber-50/60 p-5 shadow-sm dark:border-teal-300/15 dark:from-teal-950/25 dark:via-card/20 dark:to-amber-950/15"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-teal-600 to-amber-500" />
                <ul className="space-y-2 text-sm">
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="relative pl-5 leading-6 text-foreground/75 before:absolute before:left-0 before:top-[0.7rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-teal-700/70 dark:text-foreground/80 dark:before:bg-teal-300/80"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
