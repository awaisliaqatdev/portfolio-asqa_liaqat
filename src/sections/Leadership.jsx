import { motion } from "framer-motion";
import { Pill, Shield, Heart, Trophy, Users } from "lucide-react";
import { societies } from "../data/content";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";

const societyIcons = {
  pill: Pill,
  shield: Shield,
  heart: Heart,
  trophy: Trophy,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          badge="Leadership & Societies"
          title="Professional Engagement"
          description="Active involvement in pharmaceutical societies and leadership activities."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          <motion.div
            className="sm:col-span-2 lg:col-span-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Card hover={false} className="bg-gradient-to-r from-primary to-secondary text-white border-0 text-center py-10">
              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-5">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">
                Committed to Professional Growth
              </h3>
              <p className="text-white/70 text-sm max-w-xl mx-auto">
                Active member of multiple pharmaceutical and professional societies, demonstrating commitment to the pharmacy profession and continuous professional development.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {societies.map((soc) => {
            const Icon = societyIcons[soc.icon] || Pill;
            return (
              <motion.div key={soc.id} variants={cardVariants}>
                <Card className="h-full text-center group">
                  <div className="w-12 h-12 rounded-2xl bg-accent-10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Icon size={22} className="text-accent group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-heading font-bold text-sm text-text-primary mb-1 leading-snug">
                    {soc.name}
                  </h3>

                  <p className="text-xs text-text-muted">
                    {soc.institution}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
