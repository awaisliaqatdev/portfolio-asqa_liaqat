import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Calendar } from "lucide-react";
import { publications, conferences } from "../data/content";
import SectionHeader from "../components/ui/SectionHeader";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Research() {
  return (
    <section id="research" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          badge="Research & Publications"
          title="Contributions to Pharmaceutical Science"
          description="Published research in peer-reviewed journals advancing clinical pharmacy and healthcare education."
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {publications.map((pub) => (
            <motion.div key={pub.id} variants={cardVariants}>
              <Card className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-10 flex items-center justify-center">
                    <BookOpen size={18} className="text-primary" />
                  </div>
                  <Badge variant="default">
                    <Calendar size={11} />
                    {pub.month ? `${pub.month} ` : ""}{pub.year}
                  </Badge>
                </div>

                <h3 className="font-heading font-bold text-base text-text-primary leading-snug mb-3 flex-1">
                  {pub.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <Badge variant="accent">{pub.type}</Badge>
                  {pub.journal && (
                    <p className="text-xs text-text-muted italic">
                      {pub.journal}
                    </p>
                  )}
                </div>

                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors duration-200 group"
                >
                  <span>View Publication</span>
                  <ExternalLink
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>

                <div className="mt-3 pt-3 border-t border-border">
                  <span className="text-[11px] text-text-muted font-mono break-all">
                    DOI: {pub.doi.replace("https://doi.org/", "")}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <SectionHeader
          badge="Conferences"
          title="Conference Participation"
          description="Active engagement in professional conferences and summits."
        />

        <motion.div
          className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {conferences.map((conf) => (
            <motion.div key={conf.id} variants={cardVariants}>
              <Card className="text-center">
                <Badge variant={conf.type === "International" ? "accent" : "default"} className="mb-3">
                  {conf.type}
                </Badge>
                <h3 className="font-heading font-bold text-sm text-text-primary mb-2">
                  {conf.name}
                </h3>
                <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
                  <Calendar size={12} />
                  {conf.year}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
