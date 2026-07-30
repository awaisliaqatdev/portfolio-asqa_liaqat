import { motion } from "framer-motion";
import { cn } from "../../utils/helpers";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg",
  secondary:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  accent:
    "bg-accent text-white hover:bg-accent-dark shadow-md hover:shadow-lg",
  ghost:
    "text-text-secondary hover:text-primary hover:bg-primary-5",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  icon,
  iconRight,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-button transition-all duration-300 cursor-pointer font-heading whitespace-nowrap";

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {icon}
        {children}
        {iconRight}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {icon}
      {children}
      {iconRight}
    </motion.button>
  );
}
