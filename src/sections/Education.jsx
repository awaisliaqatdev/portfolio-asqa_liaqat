import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, ChevronRight } from "lucide-react";
import { education } from "../data/content";
import SectionHeader from "../components/ui/SectionHeader";
import Badge from "../components/ui/Badge";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Education() {
  return (
    <section id="education" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          badge="Education"
          title="Academic Foundation"
          description="A strong academic journey through pharmaceutical sciences and clinical pharmacy."
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
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                className="relative flex gap-6 md:gap-8"
                variants={cardVariants}
              >
                <div className="hidden sm:flex shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-surface border-2 border-border items-center justify-center z-10 shadow-card">
                  <GraduationCap
                    size={24}
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
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-text-secondary mt-1">
                        {edu.department}
                      </p>
                    </div>
                    <Badge variant={i === 0 ? "accent" : "default"}>
                      <Calendar size={12} />
                      {edu.duration}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
                    <GraduationCap size={14} className="text-accent" />
                    {edu.institution}
                    {edu.location && (
                      <>
                        <span className="text-border-dark">·</span>
                        <MapPin size={12} />
                        {edu.location}
                      </>
                    )}
                  </div>

                  {edu.description && (
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {edu.description}
                    </p>
                  )}

                  {edu.project && (
                    <div className="bg-accent-5 rounded-lg p-4 border border-accent/10">
                      <div className="flex items-start gap-2 mb-2">
                        <ChevronRight
                          size={16}
                          className="text-accent mt-0.5 shrink-0"
                        />
                        <div>
                          <p className="text-xs font-semibold text-accent-dark font-heading uppercase tracking-wider mb-1">
                            Major Research Project
                          </p>
                          <p className="text-sm font-medium text-text-primary">
                            {edu.project}
                          </p>
                          {edu.projectDescription && (
                            <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                              {edu.projectDescription}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {edu.highlights && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-3 py-1 rounded-pill bg-primary-5 text-primary text-xs font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
