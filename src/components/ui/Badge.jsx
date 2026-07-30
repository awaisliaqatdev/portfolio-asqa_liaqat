import { cn } from "../../utils/helpers";

const variants = {
  default: "bg-primary-5 text-primary",
  accent: "bg-accent-10 text-accent-dark",
  secondary: "bg-secondary-5 text-secondary",
  outline: "border border-border text-text-secondary",
};

export default function Badge({ children, variant = "default", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 text-xs font-medium font-heading",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
