import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Award, BookOpen, Users, FlaskConical } from "lucide-react";
import { personalInfo, stats } from "../data/content";
import { scrollToSection } from "../utils/helpers";
import Button from "../components/ui/Button";

const statIcons = [BookOpen, Award, FlaskConical, Users];

const floatingAnimation = {
  y: [-8, 8, -8],
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden hero-pattern"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <motion.div
          className="absolute top-1/4 right-[15%] w-3 h-3 rounded-full bg-accent/30"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute top-1/3 left-[10%] w-2 h-2 rounded-full bg-primary/20"
          animate={{ y: [6, -6, 6], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[25%] w-4 h-4 rounded-full border border-accent/20"
          animate={{ y: [-5, 5, -5], rotate: [0, 180, 360], transition: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-4 font-heading leading-[1.1]">
              Dr.{" "}
              <span className="gradient-text">Aqsa Liaqat</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary font-medium mb-2 font-heading">
              {personalInfo.title}
            </p>

            <p className="text-sm text-text-muted mb-2 font-heading">
              {personalInfo.degree}
            </p>

            <div className="flex items-center gap-4 text-sm text-text-muted mb-8">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-accent" />
                {personalInfo.location}
              </span>
            </div>

            <p className="text-text-secondary leading-relaxed mb-10 max-w-lg">
              {personalInfo.summary.split(".").slice(0, 2).join(".") + "."}
            </p>

            <div className="flex flex-wrap gap-3 mb-14">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                icon={<Mail size={17} />}
              >
                Get in Touch
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("#about")}
                icon={<ArrowDown size={17} />}
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 rounded-xl bg-surface border border-border shadow-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ y: -2, shadow: "var(--shadow-card-hover)" }}
                  >
                    <Icon size={18} className="text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary font-heading">
                      {stat.value}
                    </div>
                    <div className="text-xs text-text-muted mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-sm md:max-w-md">
              <div className="absolute inset-0 rounded-3xl gradient-bg opacity-10 rotate-6" />
              <div className="relative rounded-3xl bg-surface border border-border shadow-elevated overflow-hidden">

                <motion.div
                  className="absolute top-4 right-4 items-center gap-1.5 bg-accent text-white px-3 py-1.5 rounded-pill text-[11px] font-semibold font-heading shadow-md hidden md:flex"
                  animate={floatingAnimation}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Available for Collaboration
                </motion.div>

                <div className="flex flex-col items-center justify-center p-6 md:p-10 text-center">
                  <div className="relative mb-4 md:mb-6">
                    <div
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full gradient-bg p-1 shadow-lg mx-auto"
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <div className="w-full h-full rounded-full bg-[url(/hero_photo.png)] bg-cover bg-center pointer-events-none select-none" />
                    </div>
                    <div className="md:hidden flex items-center justify-center gap-1.5 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      <span className="text-[10px] font-semibold text-accent-dark font-heading">Available for Collaboration</span>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-1">
                    Dr. Aqsa Liaqat
                  </h3>
                  <p className="text-sm text-text-muted mb-4">
                    PhD Scholar · MPhil Clinical Pharmacy · PharmD
                  </p>
                  <div className="w-12 h-0.5 bg-accent rounded-full mb-4" />
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Clinical Pharmacist & Research Cell Coordinator
                  </p>
                  <p className="text-xs text-text-secondary mt-2">
                    Avicenna Medical College & Hospital
                  </p>
                </div>

                <motion.div
                  className="absolute bottom-8 left-6 w-14 h-14 rounded-2xl bg-primary-10 border border-primary/20 items-center justify-center hidden md:flex"
                  animate={{ y: [5, -5, 5], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                >
                  <BookOpen size={20} className="text-primary" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 left-6 w-12 h-12 rounded-xl bg-secondary-5 border border-secondary/10 items-center justify-center hidden md:flex"
                  animate={{ y: [-4, 4, -4], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                >
                  <Award size={18} className="text-secondary" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2.5 rounded-full bg-text-muted/50"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
