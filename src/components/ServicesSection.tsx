import { motion } from "framer-motion";
import { Scissors, TreePine, Leaf, Axe } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Poda de pasto",
    description: "Corte prolijo y uniforme para mantener tu césped siempre verde y saludable.",
  },
  {
    icon: Scissors,
    title: "Recorte de libustrinas",
    description: "Mantenimiento y formado de cercos vivos con acabado profesional.",
  },
  {
    icon: TreePine,
    title: "Mantenimiento integral",
    description: "Limpieza completa de patios, desmalezado y puesta a punto de tu espacio verde.",
  },
  {
    icon: Axe,
    title: "Corte de árboles",
    description: "Poda y tala segura de árboles para mantener tu jardín ordenado y sin riesgos.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          En qué me especializo
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
