import { motion } from "framer-motion";
import {
  GraduationCap,
  Microscope,
  Database,
  BarChart3,
  FileText,
  Phone,
} from "lucide-react";
import { services } from "../data/content";
import SectionHeader from "../components/ui/SectionHeader";

const iconMap = {
  GraduationCap,
  Microscope,
  Database,
  BarChart3,
  FileText,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          title="Medical Research & Statistical Analysis Services"
          description="Your Research Partner from Proposal to Publication"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div key={service.id} variants={cardVariants}>
                <motion.div
                  className="bg-surface-glass backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-accent" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-text-primary mb-3">
                    {service.title}
                  </h3>

                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className="text-text-secondary text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex items-center gap-4 my-16 max-w-2xl mx-auto">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-semibold text-text-muted uppercase tracking-widest whitespace-nowrap font-heading text-center">
            Transform Your Research into Publication-Ready Work
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="rounded-2xl p-8 md:p-10 gradient-bg text-center">
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-6">
              Need Help with Your Research?
            </h3>

            <a
              href="tel:+923097972978"
              className="inline-flex items-center gap-3 bg-white/15 hover:bg-white/25 text-white rounded-xl px-6 py-3 font-heading font-semibold text-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <Phone size={20} />
              +92 309 7972978
            </a>

            <p className="text-white/70 text-sm mt-6 font-medium tracking-wide">
              Professional &bull; Reliable &bull; Confidential
            </p>

            <p className="text-white/60 text-sm mt-2 max-w-md mx-auto leading-relaxed">
              Empowering Researchers Through Excellence in Research, Statistics &amp; Publication Support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
