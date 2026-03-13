import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { benefits } from "@/assets/data/data";
import { ArrowRight, Check } from "lucide-react";
import { serviceDetailed } from "./../assets/data/data";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing, Web & App Development Services | Boukartech</title>
        <meta
          name="description"
          content="Boukartech offers social media management, paid ads, website and app development, graphic design, livestreaming, hosting, and tech consulting to help businesses grow, scale, and build digital systems."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-5">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mb-16">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Our Services</span>
              <h1 className="heading-xl mb-6">
                Comprehensive <span className="text-gradient-blue">Digital Solutions</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We offer a comprehensive suite of digital services designed to elevate your brand and drive business growth. From development to
                marketing, we've got you covered with solutions that deliver results. Get Started
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceDetailed.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group p-6 md:p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
                >
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                        {f}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-foreground section-padding text-background">
          <div className="max-w-7xl mx-auto">
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

        {/* CTA */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-foreground rounded-3xl p-10 md:p-16"
            >
              <h2 className="heading-lg text-background mb-4">
                Need a Custom <span className="text-primary">Solution?</span>
              </h2>
              <p className="text-background/60 mb-8">Let's discuss your project requirements and create something tailored to your needs.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
