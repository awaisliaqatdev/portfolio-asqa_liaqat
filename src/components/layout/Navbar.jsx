import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks } from "../../data/content";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { scrollToSection, cn } from "../../utils/helpers";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeId = useScrollSpy(
    navLinks.map((l) => l.href.replace("#", "")),
    100
  );

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNav = (href) => {
    setIsMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass shadow-elevated py-3"
            : "bg-transparent py-5"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
            <motion.a
              href="#hero"
              className="flex items-center gap-3"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#hero");
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="block">
                <span className="font-heading font-bold text-lg text-text-primary block leading-tight">
                  Dr. Aqsa
                </span>
                <span className="text-[11px] text-text-muted font-medium tracking-wide">
                  PhD Scholar
                </span>
              </div>
            </motion.a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 font-body",
                    isActive
                      ? "text-primary"
                      : "text-text-secondary hover:text-primary hover:bg-primary-5"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent rounded-full"
                      layoutId="navIndicator"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="/AqsaLiaqat_CV.pdf"
              download="AqsaLiaqat_CV.pdf"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-button text-sm font-semibold font-heading hover:bg-primary-light transition-colors duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={15} />
              Download CV
            </motion.a>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-primary-5 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.nav
              className="absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-surface shadow-elevated p-6 pt-24 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => {
                  const isActive = activeId === link.href.replace("#", "");
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className={cn(
                        "px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 font-body",
                        isActive
                          ? "bg-accent-10 text-accent-dark font-semibold"
                          : "text-text-secondary hover:bg-primary-5 hover:text-primary"
                      )}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <motion.a
                  href="/AqsaLiaqat_CV.pdf"
                  download="AqsaLiaqat_CV.pdf"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white px-5 py-3 rounded-button text-sm font-semibold font-heading hover:bg-primary-light transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Download size={15} />
                  Download CV
                </motion.a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
