import { motion } from "framer-motion";
import { MessageCircle, Instagram, Facebook } from "lucide-react";

const links = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/",
    color: "bg-primary hover:brightness-110",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/",
    color: "bg-accent hover:brightness-110",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://facebook.com/",
    color: "bg-primary hover:brightness-110",
  },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
        >
          Mis Redes y Contacto
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted-foreground text-lg mb-10"
        >
          ¡Escribime para coordinar una visita y dejar tu patio como nuevo!
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className={`${link.color} text-primary-foreground font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-3 text-lg transition-all shadow-md`}
            >
              <link.icon className="w-6 h-6" />
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
