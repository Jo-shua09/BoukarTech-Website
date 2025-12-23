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

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You'll receive our latest updates.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container-custom py-12 pb-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="lg:text-left text-center">
              <h3 className="text-xl font-bold">Get to our Newsletter</h3>
              <p className="text-background/60 text-base">Be the first to receive updates when they roll out.</p>
            </div>

            <form onSubmit={handleSubscribe} className="flex w-full max-w-xl gap-2 items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email here"
                className="flex-1 bg-background/10 text-base border border-background/20 rounded-full px-5 py-3 text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" size="lg" variant="hero">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Boukartech Logo" className="h-18 w-44" />
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/boukartech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/@boukartechsolutions?si=9VI8W4CceyBLLbEs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1BaTXoeFUb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-lg mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-base text-background/60 hover:text-primary transition-colors">
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
          <p className="text-sm text-background/60">© {new Date().getFullYear()} Boukartech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
