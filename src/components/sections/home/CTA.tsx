import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <div>
      <section className="py-16 lg:py-20 bg-muted">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="heading-md mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="body-md text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how Boukartech can help take your business to the next level.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://calendly.com/boukartech" target="_blank" rel="noopener noreferrer">
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
