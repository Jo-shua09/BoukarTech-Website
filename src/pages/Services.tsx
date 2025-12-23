import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import {} from "lucide-react";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import { benefits, serviceDetailed } from "@/assets/data/data";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Our Branding"
        cTitle="Solutions"
        description="We offer a comprehensive suite of digital services designed to elevate your brand and drive business growth. From development to marketing, we've got you covered with solutions that deliver results."
        buttonOne="Get Started"
        buttonTwo=""
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-5 md:gap-8">
            {serviceDetailed.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <service.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-foreground text-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
            <h2 className="heading-lg mb-4">
              Benefits of Working With <span className="text-primary">Boukartech</span>
            </h2>
            <p className="body-md text-background/60 max-w-2xl">
              Combining attractive design and product utility, we create numerous benefits with our digital product experience design services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/5 border border-background/10 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-background/60 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-muted mt-16 lg:mt-24">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="heading-md text-foreground mb-4">Ready to get started?</h2>
            <p className="body-md text-muted-foreground mb-8 max-w-xl mx-auto">Let's discuss how our services can help transform your business.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
