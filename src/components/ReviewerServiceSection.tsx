import { reviewerService } from "@/lib/data";
import { CheckCircle2, FileText } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export default function ReviewerServiceSection() {
  return (
    <section
      id="service"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-5xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            Reviewer Service
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 gap-4">
          {reviewerService.map((service, index) => (
            <MotionWrapper key={service.title} delay={index * 0.12}>
              <GlassCard className="h-full p-5 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-teal-700/10 dark:bg-teal-300/10">
                    <FileText className="h-4 w-4 text-teal-700 dark:text-teal-300" />
                  </div>
                  <div>
                    <h3 className="font-medium leading-6">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.venues.map((venue, venueIndex) => (
                    <motion.span
                      key={venue}
                      className="inline-flex items-center gap-1 rounded-md border border-teal-700/20 bg-teal-700/10 px-2 py-1 text-xs text-teal-800 dark:text-teal-200"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: venueIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="h-3 w-3" />
                      {venue}
                    </motion.span>
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
