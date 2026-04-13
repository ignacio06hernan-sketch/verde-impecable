import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[280px_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-56 h-56 rounded-full bg-secondary flex items-center justify-center shadow-lg border-4 border-primary/20">
            <User className="w-24 h-24 text-muted-foreground" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre Mí
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hola, soy Ignacio. Tengo 18 años (27/12/2007) y vivo en Tortuguitas,
            la ciudad donde nací y me crie. Me apasiona el trabajo al aire libre,
            el esfuerzo físico y, sobre todo, dejar los espacios verdes impecables
            para que las personas puedan disfrutar de sus patios al máximo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
