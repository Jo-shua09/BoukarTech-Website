import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Eye, Target } from "lucide-react";
import Marquee from "@/components/Marquee";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";
import heroVisual from "@/assets/images/hero-visual.png";
import visionImg from "@/assets/images/vision.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faq } from "@/assets/data/data";
import Layout from "@/components/Layout";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Modern, responsive, and secure websites including e-commerce, corporate sites, and portfolios with top-notch performance and design.",
  },
  {
    num: "02",
    title: "Mobile App Development",
    desc: "User-friendly, high-performing mobile applications for Android and iOS, built from concept to deployment to help businesses scale.",
  },
  {
    num: "03",
    title: "Social Media Management",
    desc: "We create engaging content, manage accounts, run targeted campaigns, and analyze performance to grow visibility and drive results.",
  },
  {
    num: "04",
    title: "Graphic Design",
    desc: "Creative visuals including branding, logos, flyers, social media graphics, and full design systems that leave lasting impressions.",
  },
  {
    num: "05",
    title: "Video Editing",
    desc: "Professional video editing that transforms raw footage into impactful promotional content, ads, and event highlights.",
  },
  {
    num: "06",
    title: "Livestreaming",
    desc: "High-quality livestreaming for events, conferences, webinars, and product launches with smooth broadcasting and professional setups.",
  },
  {
    num: "07",
    title: "Hosting & Domain",
    desc: "Reliable and secure web hosting with domain registration, scalable infrastructure, and technical support to keep businesses online 24/7.",
  },
  {
    num: "08",
    title: "Ads Specialist",
    desc: "Strategic advertising campaigns across Google, Meta, and more that maximize ROI and drive conversions for your business.",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Boukartech – Digital Growth, Technology Solutions & Career Opportunities</title>
        <meta
          name="description"
          content="Boukartech is a digital growth and technology company helping businesses scale through social media management, website and app development, ads, livestreaming, tech consulting, and career opportunities in tech and digital services."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-28 md:pt-36 px-5 pb-0 min-h-[90vh] flex items-center">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">Digital Agency — Since 2019</span>
              <h1 className="heading-xl mb-6">
                Leading Force
                <br />
                in the <span className="text-gradient-blue">Digital Realm</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed mb-8">
                Our vision is to become the leading digital solutions provider, empowering businesses worldwide with innovative technology and
                creative excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-2.5 rounded-full font-medium hover:bg-secondary transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <img src={heroVisual} alt="Digital technology visualization" className="w-full max-w-lg mx-auto animate-float" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Marquee */}
        <div className="mt-16 md:mt-24">
          <Marquee />
        </div>

        {/* Vision & Mission */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img src={visionImg} alt="Our Vision" className="w-full max-w-md mx-auto rounded-2xl" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-5 h-5 text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Vision</span>
                  </div>
                  <h3 className="heading-md mb-4">Shaping the Digital Future</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become a leading force in the digital realm by helping businesses scale online while empowering young adults and entrepreneurs
                    to achieve financial stability and lasting impact through technology.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Mission</span>
                  </div>
                  <h3 className="heading-md mb-4">Empowering Through Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We bring together a team of tech experts to share digital knowledge, tools, and opportunities that help businesses grow, equip
                    young adults with in-demand skills, and support entrepreneurs in building sustainable ventures.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">What We Do</span>
                <h2 className="heading-lg">
                  Our <span className="text-gradient-blue">Services</span>
                </h2>
              </div>
              <Link
                to="/services"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
              >
                View All <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-0">
              {services.map((service, i) => (
                <motion.div
                  key={service.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    to="/services"
                    className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-6 md:py-8 border-b border-border hover:bg-background/80 transition-colors px-4 md:px-6 rounded-lg"
                  >
                    <span className="text-primary/40 font-display font-bold text-sm">{service.num}</span>
                    <h3 className="font-display font-bold text-lg md:text-xl lg:text-2xl group-hover:text-primary transition-colors flex-shrink-0 md:w-64">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{service.desc}</p>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 hidden md:block" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats card */}
        <section className="section-padding bg-secondary/50">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={15} label="Expert Team Members" />
            <AnimatedCounter end={60} suffix="%" label="Team Growth per Year" />
            <AnimatedCounter end={5} label="Years of Experience" />
            <AnimatedCounter end={20} label="Happy Clients" />
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding">
          <div className="max-w-3xl mx-auto">
            <SectionHeading tag="FAQ" title="Frequently Asked" highlight="Questions" />
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 data-[state=open]:bg-secondary/50">
                  <AccordionTrigger className="text-left font-display font-medium text-sm md:text-base hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
                Ready to Transform Your <span className="text-primary">Digital Presence?</span>
              </h2>
              <p className="text-background/60 mb-8 max-w-lg mx-auto">Let's discuss how BoukarTech can help take your business to the next level.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all"
                >
                  Start a Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/career"
                  className="inline-flex items-center gap-2 border border-background/20 text-background px-7 py-2.5 rounded-full font-medium hover:bg-background/10 transition-colors"
                >
                  Join Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
