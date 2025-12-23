import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/images/logo3-bg.png";

const footerLinks = {
  "About Us": [
    { label: "Our Vision", href: "/about#vision" },
    { label: "Our Mission", href: "/about#mission" },
  ],
  FAQ: [
    { label: "Satisfaction", href: "/contact" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/contact" },
  ],
  Career: [
    { label: "Our Values", href: "/about#values" },
    { label: "Who We Are", href: "/about" },
    { label: "Job Openings", href: "/career" },
  ],
  Service: [
    { label: "SMM", href: "/services" },
    { label: "App Development", href: "/services" },
    { label: "Web Development", href: "/services" },
    { label: "Graphic Design", href: "/services" },
    { label: "Video Editing", href: "/services" },
    { label: "Hosting", href: "/services" },
  ],
};

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    toast({
      title: "Subscribed!",
      description: "You'll receive our latest updates.",
    });

    setEmail("");
  };

  return (
    <footer className="bg-foreground text-background w-full overflow-hidden">
      {/* Newsletter */}
      <div className="border-b border-background/10">
        <div className="container-custom py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold">Join our Newsletter</h3>
              <p className="text-background/60 text-sm max-w-md mx-auto lg:mx-0">Be the first to receive updates when they roll out.</p>
            </div>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row w-full max-w-xl gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-background/10 border border-background/20 rounded-full px-5 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" size="lg" variant="hero" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* Logo & Social */}
          <div className="lg:col-span-2 space-y-6">
            <img loading="lazy" src={logo} alt="Boukartech Logo" className="w-40 max-w-full object-contain" />

            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/boukartech" },
                { icon: Youtube, href: "https://youtube.com/@boukartechsolutions?si=9VI8W4CceyBLLbEs" },
                { icon: Facebook, href: "https://www.facebook.com/share/1BaTXoeFUb" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-background/20 hover:bg-primary hover:border-primary transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-base mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container-custom py-4 text-center">
          <p className="text-xs text-background/60">© {new Date().getFullYear()} Boukartech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
