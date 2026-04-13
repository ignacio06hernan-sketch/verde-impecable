import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border py-8 px-6 text-center">
    <div className="flex items-center justify-center gap-2 text-primary font-display font-bold text-lg mb-2">
      <Leaf className="w-5 h-5" />
      Ignacio Muñoz
    </div>
    <p className="text-muted-foreground text-sm">
      © {new Date().getFullYear()} — Tortuguitas, Buenos Aires
    </p>
  </footer>
);

export default Footer;
