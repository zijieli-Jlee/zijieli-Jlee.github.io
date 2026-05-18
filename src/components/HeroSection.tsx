import { personalInfo } from "@/lib/data";
import { FileText, Github, GraduationCap, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-5xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left max-w-2xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-3"
              variants={childVariants}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              className="text-xl text-teal-700 dark:text-teal-300 mb-5"
              variants={childVariants}
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-8 mb-6"
              variants={childVariants}
            >
              {personalInfo.heroDescription}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-6"
              variants={containerVariants}
            >
              <Button asChild className="bg-teal-700 hover:bg-teal-800 text-white">
                <motion.a href={personalInfo.cv} variants={childVariants}>
                  <FileText className="h-4 w-4 mr-2" />
                  CV
                </motion.a>
              </Button>
              <Button asChild variant="outline">
                <motion.a
                  href={personalInfo.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={childVariants}
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Scholar
                </motion.a>
              </Button>
              <Button asChild variant="outline">
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={childVariants}
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </motion.a>
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center text-sm text-muted-foreground"
                variants={childVariants}
                whileHover={{ scale: 1.03 }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                {personalInfo.location}
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.03 }}
              >
                <Mail className="h-4 w-4 mr-2" />
                {personalInfo.email}
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.03 }}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <img
                src={personalInfo.profilePicture}
                alt="Zijie Li"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full relative ring-2 ring-teal-700/40 shadow-lg"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
