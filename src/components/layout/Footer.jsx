import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { personalInfo, navLinks } from "../../data/content";
import { scrollToSection } from "../../utils/helpers";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-text-primary text-white/80">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">
                  AL
                </span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white block leading-tight">
                  Dr. Aqsa Liaqat
                </span>
                <span className="text-xs text-white/50 font-medium">
                  PhD Scholar · MPhil Clinical Pharmacy · PharmD
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Dedicated Clinical Pharmacist committed to advancing
              pharmaceutical education, clinical research, and
              patient-centered healthcare.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={15} className="text-accent shrink-0" />
                {personalInfo.email}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone size={15} className="text-accent shrink-0" />
                {personalInfo.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={15} className="text-accent shrink-0" />
                {personalInfo.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Dr. Aqsa Liaqat. All rights
            reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-white/40 hover:text-accent transition-colors duration-200 cursor-pointer"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
