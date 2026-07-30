import { motion } from "framer-motion";
import { cn } from "../../utils/helpers";

export default function Card({
  children,
  className,
  hover = true,
  glass = false,
  ...props
}) {
  return (
    <motion.div
      className={cn(
        "bg-surface rounded-xl border border-border p-6 shadow-card",
        glass &&
          "bg-surface-glass backdrop-blur-xl border border-white/30",
        hover && "hover:shadow-card-hover transition-shadow duration-300",
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
