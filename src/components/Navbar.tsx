import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 text-primary font-display font-bold text-xl">
          <Leaf className="w-6 h-6" />
          Ignacio M.
        </a>
        <div className="hidden md:flex gap-6">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm">
              {l.label}
            </a>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80 hover:text-primary transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
