import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; to: string }[];
}

const MobileMenu = ({ open, onClose, links }: MobileMenuProps) => {
  const location = useLocation();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[90vw] bg-background shadow-2xl animate-slide-in-right">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-heading font-bold text-lg">Menu</span>
          <button onClick={onClose} className="p-2 text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-2 h-full justify-between">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                location.pathname === link.to ? "bg-primary/10 text-primary" : "text-foreground/70 hover:bg-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex justify-end h-full">
            <Button asChild className="w-full">
              <Link to="/contact" onClick={onClose}>
                Get Started
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
