import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Instagram, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import phillipImg from "@/assets/images/phillip.jpg";
import Hero from "@/components/sections/Hero";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    industry: "",
    budget: "",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        industry: formData.industry,
        budget: formData.budget,
        message: formData.message,
        to_email: "boukartech@gmail.com",
        to_name: "Boukartech Team",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        industry: "",
        budget: "",
        message: "",
        consent: false,
      });
    } catch (error) {
      console.error("Email send failed:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Get in"
        cTitle="Touch"
        description="Get in touch with us! Whether you have a question, need support, or want to explore how our services can help your business thrive, drop us a message and we will respond promptly."
        buttonOne="Let's Talk"
        buttonTwo=""
        buttonLink="https://calendly.com/boukartech"
      />

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 lg:py-24 bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary/5 border border-primary/20 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Let's Talk</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b-2 border-foreground/30 focus:border-primary py-2 outline-none transition-colors text-foreground"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-foreground/30 focus:border-primary py-2 outline-none transition-colors text-foreground"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-foreground/30 focus:border-primary py-2 outline-none transition-colors text-foreground"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Industry</label>
                    <input
                      type="text"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-foreground/30 focus:border-primary py-2 outline-none transition-colors text-foreground"
                      placeholder="e.g., E-commerce"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Expected Budget</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-foreground/30 focus:border-primary py-2 outline-none transition-colors text-foreground"
                      placeholder="e.g., $1,000 - $5,000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-foreground/30 focus:border-primary py-2 outline-none transition-colors resize-none text-foreground"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="mt-1 accent-primary w-4 h-4"
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    I agree that my personal information will be processed and stored by Boukartech.
                  </label>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* CEO Card & Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* CEO Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative overflow-hidden rounded-3xl group"
              >
                <motion.img
                  src={phillipImg}
                  alt="Ndoula Philip, CEO"
                  className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Info overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-primary/80 p-6 text-primary-foreground"
                >
                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-xl font-bold mb-3"
                  >
                    Ndoula Philip, CEO
                  </motion.h4>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="space-y-2 text-sm"
                  >
                    <a href="mailto:boukartech@gmail.com" className="flex items-center gap-2 hover:underline">
                      <Mail size={16} />
                      boukartech@gmail.com
                    </a>
                    <a href="tel:+2349039101551" className="flex items-center gap-2 hover:underline">
                      <Phone size={16} />
                      +2349039101551
                    </a>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex gap-3 mt-4"
                  >
                    <motion.a
                      href="https://www.linkedin.com/in/ndoula-philip-632025255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={16} />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/boukartech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram size={16} />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Quick Contact Info */}
              <div className="bg-secondary rounded-2xl p-6">
                <h4 className="font-semibold text-foreground mb-4">Quick Contact</h4>
                <div className="space-y-3">
                  <a
                    href="mailto:boukartech@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail size={18} className="text-primary" />
                    boukartech@gmail.com
                  </a>
                  <a href="tel:+2349039101551" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={18} className="text-primary" />
                    +234 9039101551
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={18} className="text-primary" />
                    Lagos, Nigeria
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
