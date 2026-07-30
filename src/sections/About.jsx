import { motion } from "framer-motion";
import { Stethoscope, FlaskConical, GraduationCap, Heart } from "lucide-react";
import { personalInfo, expertise } from "../data/content";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";

const interests = [
  {
    icon: Stethoscope,
    title: "Clinical Interests",
    items: ["Clinical Pharmacy", "Patient Compliance", "Drug Therapy Evaluation", "Healthcare Communication"],
    color: "primary",
  },
  {
    icon: FlaskConical,
    title: "Research Interests",
    items: ["Institutional Research", "Healthcare Research", "Medical Documentation", "Regulatory Compliance"],
    color: "accent",
  },
  {
    icon: GraduationCap,
    title: "Academic Strengths",
    items: ["Academic Teaching", "Research Documentation", "Academic Coordination", "Pharmaceutical Education"],
    color: "secondary",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          title="Dedicated to Advancing Pharmaceutical Excellence"
          description="Committed to improving patient outcomes through evidence-based clinical practices, research, and education."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Card hover={false} className="h-full bg-gradient-to-br from-primary to-secondary text-white border-0">
              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                <Heart size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">Professional Summary</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-8">
                {personalInfo.summary}
              </p>

              <h4 className="font-heading font-semibold text-sm mb-3 text-white/90 uppercase tracking-wider">
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-pill bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            className="lg:col-span-3 grid sm:grid-cols-1 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {interests.map((interest) => {
              const Icon = interest.icon;
              return (
                <motion.div key={interest.title} variants={itemVariants}>
                  <Card hover={true} className="h-full">
                    <div className="flex items-start gap-5">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          interest.color === "primary"
                            ? "bg-primary-10"
                            : interest.color === "accent"
                            ? "bg-accent-10"
                            : "bg-secondary-5"
                        }`}
                      >
                        <Icon
                          size={22}
                          className={
                            interest.color === "primary"
                              ? "text-primary"
                              : interest.color === "accent"
                              ? "text-accent"
                              : "text-secondary"
                          }
                        />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base text-text-primary mb-3">
                          {interest.title}
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {interest.items.map((item) => (
                            <span
                              key={item}
                              className="text-sm text-text-secondary flex items-center gap-2"
                            >
                              <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
