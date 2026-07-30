import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal } from "lucide-react";
import { achievements } from "../data/content";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";

const typeIcons = {
  award: Trophy,
  activity: Star,
};

const typeColors = {
  award: "bg-accent-10 text-accent",
  activity: "bg-primary-10 text-primary",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          title="Recognition & Distinctions"
          description="Awards, honors, and professional recognition received throughout my academic and professional career."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {achievements.map((ach) => {
            const Icon = typeIcons[ach.type] || Medal;
            return (
              <motion.div key={ach.id} variants={cardVariants}>
                <Card className="h-full text-center group">
                  <div
                    className={`w-14 h-14 rounded-2xl ${typeColors[ach.type]} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={24} />
                  </div>

                  <Badge variant={ach.type === "award" ? "accent" : "default"} className="mb-3">
                    {ach.type === "award" ? "Award" : "Activity"}
                  </Badge>

                  <h3 className="font-heading font-bold text-sm text-text-primary mb-2 leading-snug">
                    {ach.title}
                  </h3>

                  <p className="text-xs text-text-muted">
                    {ach.organization}
                  </p>

                  {ach.year && (
                    <p className="text-xs text-text-muted mt-1 font-medium">
                      {ach.year}
                    </p>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
