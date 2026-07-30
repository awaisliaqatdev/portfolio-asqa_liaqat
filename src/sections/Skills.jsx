import { motion } from "framer-motion";
import {
  Stethoscope,
  FlaskConical,
  Shield,
  GraduationCap,
  Users,
  Pill,
  FileCheck,
  BookOpen,
  MessageSquare,
  Lightbulb,
  Heart,
  ClipboardList,
  Building2,
  Target,
} from "lucide-react";
import { skills } from "../data/content";
import SectionHeader from "../components/ui/SectionHeader";

const skillIcons = {
  "Clinical Pharmacy": Stethoscope,
  "Pharmaceutical Knowledge": Pill,
  "Research Coordination": FlaskConical,
  "Healthcare Research": Lightbulb,
  "PMDC & IRB Compliance": Shield,
  "Regulatory Compliance": FileCheck,
  "Academic Teaching": GraduationCap,
  "Research Documentation": ClipboardList,
  "Strategic Planning": Target,
  "Communication Skills": MessageSquare,
  "Leadership": Users,
  "Problem Solving": Lightbulb,
  "Time Management": ClipboardList,
  "Team Collaboration": Heart,
};

const categoryColors = {
  clinical: { bg: "bg-primary-10", text: "text-primary", bar: "bg-primary" },
  research: { bg: "bg-accent-10", text: "text-accent-dark", bar: "bg-accent" },
  compliance: { bg: "bg-secondary-5", text: "text-secondary", bar: "bg-secondary" },
  academic: { bg: "bg-primary-10", text: "text-primary", bar: "bg-primary" },
  leadership: { bg: "bg-accent-10", text: "text-accent-dark", bar: "bg-accent" },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          badge="Core Skills"
          title="Professional Competencies"
          description="A comprehensive skill set spanning clinical practice, research, compliance, and leadership."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skills.map((skill) => {
            const Icon = skillIcons[skill.name] || Target;
            const colors = categoryColors[skill.category] || categoryColors.clinical;

            return (
              <motion.div
                key={skill.name}
                className="bg-surface rounded-xl border border-border p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
                variants={cardVariants}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <Icon size={18} className={colors.text} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-sm text-text-primary truncate">
                      {skill.name}
                    </h3>
                  </div>
                  <span className={`text-sm font-bold font-heading ${colors.text}`}>
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-border/50 overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${colors.bar}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
