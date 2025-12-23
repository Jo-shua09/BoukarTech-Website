import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo3-bg.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-foreground shadow-xl" : "bg-foreground backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Boukartech Logo" className="h-11 w-32 lg:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`relative px-1 py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:w-0 hover:after:w-full ${
                      location.pathname === item.href ? "text-primary after:w-full" : "text-white hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
            >
              <div className="py-4">
                <ul className="flex flex-col">
                  {navItems.map((item, index) => (
                    <motion.li key={item.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                      <Link
                        to={item.href}
                        className={`block py-3 px-6 text-sm font-medium transition-colors ${
                          location.pathname === item.href
                            ? "text-primary bg-primary/5 border-l-4 border-primary"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                  <li className="mt-4 px-6">
                    <Button className="w-full bg-gray-900 hover:bg-black text-white" asChild>
                      <a href="https://calendly.com/boukartech" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                        Contact Us
                      </a>
                    </Button>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
