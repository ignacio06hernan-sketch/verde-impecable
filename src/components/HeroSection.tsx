import { motion } from "framer-motion";
import heroImage from "@/assets/hero-garden.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Jardín cuidado profesionalmente"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.65)]" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 tracking-tight"
        >
          Ignacio Hernan Muñoz
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-primary-foreground/90 font-body mb-8 max-w-xl mx-auto"
        >
          Especialista en mantenimiento de espacios verdes y limpieza de patios.
        </motion.p>
        <motion.a
          href="#contacto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-lg hover:brightness-110 transition-all shadow-lg"
        >
          Solicitar Presupuesto
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
