import React from "react";
import { motion } from "framer-motion";
import { services } from "@/assets/data/data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <section className="pb-16 lg:pb-24 bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="heading-lg text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="body-md text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions designed to elevate your brand and accelerate business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border-2 border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground font-medium text-base mb-4">{service.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/services">Learn More</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
