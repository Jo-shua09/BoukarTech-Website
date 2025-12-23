import { useState, useEffect } from "react";
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

  /* Prevent background scroll when mobile menu is open */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Navbar Bar */}
      <div className="bg-foreground/90 backdrop-blur-md border-border">
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Boukartech Logo" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
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

                    {isActive && <motion.span layoutId="active-nav" className="absolute -bottom-2 left-0 h-[2px] w-full bg-primary rounded-full" />}
                  </li>
                );
              })}
            </ul>

            {/* Mobile Toggle (Hamburger) */}
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

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-40 bg-foreground"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X size={26} />
            </button>

            <div className="flex flex-col justify-between h-full w-full px-6 py-10">
              {/* Navigation Links */}
              <ul className="space-y-8">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-3xl font-semibold transition-colors ${isActive ? "text-primary" : "text-white/80 hover:text-primary"}`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* CTA Button */}
              <div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base" asChild>
                  <a href="https://calendly.com/boukartech" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    Book a Consultation
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
