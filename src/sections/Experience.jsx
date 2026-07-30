import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { experience } from "../data/content";
import SectionHeader from "../components/ui/SectionHeader";
import Badge from "../components/ui/Badge";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          title="Professional Journey"
          description="A track record of academic teaching, research coordination, and institutional leadership."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="relative flex gap-6 md:gap-8"
                variants={cardVariants}
              >
                <div className="hidden sm:flex shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-surface border-2 border-border items-center justify-center z-10 shadow-card">
                  <Briefcase
                    size={22}
                    className={i === 0 ? "text-accent" : "text-primary/60"}
                  />
                </div>

                <motion.div
                  className="flex-1 bg-surface rounded-xl border border-border p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-heading font-bold text-lg md:text-xl text-text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-text-secondary mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={i === 0 ? "accent" : "default"}>
                        <Calendar size={12} />
                        {exp.duration}
                      </Badge>
                      {i === 0 && (
                        <Badge variant="secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 space-y-2.5">
                    {exp.responsibilities.map((resp, j) => (
                      <motion.div
                        key={j}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05 }}
                      >
                        <CheckCircle
                          size={16}
                          className="text-accent mt-0.5 shrink-0"
                        />
                        <span>{resp}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
