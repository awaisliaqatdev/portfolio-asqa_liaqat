import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { personalInfo } from "../data/content";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "primary",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    color: "accent",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: personalInfo.phone,
    href: `https://wa.me/${personalInfo.phone.replace(/[\s+]/g, "")}`,
    color: "secondary",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
    color: "primary",
  },
];

const colorMap = {
  primary: { bg: "bg-primary-10", text: "text-primary", hover: "hover:bg-primary hover:text-white" },
  accent: { bg: "bg-accent-10", text: "text-accent-dark", hover: "hover:bg-accent hover:text-white" },
  secondary: { bg: "bg-secondary-5", text: "text-secondary", hover: "hover:bg-secondary hover:text-white" },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeader
          title="Let's Connect"
          description="Interested in collaboration, consultation, or professional opportunities? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-5"
          >
            {contactMethods.map((method) => {
              const Icon = method.icon;
              const colors = colorMap[method.color];
              const Wrapper = method.href ? "a" : "div";

              return (
                <motion.div key={method.label} variants={cardVariants}>
                  <Wrapper
                    {...(method.href
                      ? { href: method.href, target: method.href.startsWith("http") ? "_blank" : undefined, rel: method.href.startsWith("http") ? "noopener noreferrer" : undefined }
                      : {})}
                    className="block"
                  >
                    <Card className="flex items-center gap-5 group cursor-pointer">
                      <div
                        className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center shrink-0 group-hover:bg-inherit group-hover:text-white transition-all duration-300 ${colors.hover}`}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted font-medium uppercase tracking-wider mb-0.5">
                          {method.label}
                        </p>
                        <p className="text-sm font-medium text-text-primary">
                          {method.value}
                        </p>
                      </div>
                    </Card>
                  </Wrapper>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Card hover={false} className="h-full">
              <div className="w-12 h-12 rounded-xl bg-accent-10 flex items-center justify-center mb-6">
                <Send size={20} className="text-accent" />
              </div>

              <h3 className="font-heading font-bold text-xl text-text-primary mb-2">
                Professional Inquiry
              </h3>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                Whether you're looking for a clinical pharmacist, research collaborator, or academic speaker, feel free to reach out.
              </p>

              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-text-secondary">Clinical Pharmacy Consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-text-secondary">Research Collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-text-secondary">Academic Partnerships</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-text-secondary">Speaking Engagements</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl overflow-hidden border border-border h-48 bg-background flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={28} className="text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium text-text-primary">
                    Khayaban-e-Amin, Lahore
                  </p>
                  <p className="text-xs text-text-muted">Pakistan</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
