import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import MobileMenu from "./MobileMenu";
import logoIcon from "@/assets/images/logo-icon.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog", to: "/blog" },
  { label: "Career", to: "/career" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background shadow-sm border-b border-border lg:bg-background/95 lg:backdrop-blur-md" : "bg-background lg:bg-transparent"
        } lg:border-none`}
      >
        <div className="max-w-7xl mx-auto md:p-0 p-5 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoIcon} alt="BoukarTech" className="h-8 w-8 md:h-10 md:w-10" />
            <span className="font-display font-bold text-lg md:text-xl text-foreground">BoukarTech</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
      </header>
    </>
  );
};

export default Navbar;
