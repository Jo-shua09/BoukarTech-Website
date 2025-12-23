import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo3-bg.png";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  window.onscroll = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-foreground/90 backdrop-blur-md border-border">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Boukartech Logo" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-10">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.label} className="relative">
                    <Link
                      to={item.href}
                      className={`font-medium transition-colors ${isActive ? "text-primary" : "text-white/80 hover:text-primary"}`}
                    >
                      {item.label}
                    </Link>

                    {/* Active underline */}
                    {isActive && <motion.span layoutId="active-nav" className="absolute -bottom-2 left-0 h-[2px] w-full bg-primary rounded-full" />}
                  </li>
                );
              })}
            </ul>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-foreground min-h-screen h-full flex flex-col"
          >
            <div className="container-custom py-6 w-full ">
              <ul className="flex flex-col gap-6">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <li key={item.label}>
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors ${isActive ? "text-primary" : "text-white/80 hover:text-primary"}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Bottom CTA Section */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="py-6">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base" asChild>
                  <a href="https://calendly.com/boukartech" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    Book a Consultation
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
