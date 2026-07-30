import { motion } from "framer-motion";

export default function SectionHeader({ badge, title, description, align = "center" }) {
  return (
    <motion.div
      className={`mb-14 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-pill bg-accent-10 text-accent-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4 font-heading">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text-primary mb-4 font-heading leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
