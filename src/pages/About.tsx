import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Check, TrendingUp, Lock, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import aboutTeam from "@/assets/images/about-team.jpg";
import danielImg from "@/assets/images/daniel.jpg";
import jessicaImg from "@/assets/images/jessica.jpg";
import joshuaImg from "@/assets/images/joshua.png";
import phillipImg from "@/assets/images/phillip.jpg";
import { values } from "@/assets/data/data";

const team = [
  {
    name: "Ndoula Philip",
    role: "Founder & Product Strategist",
    img: phillipImg,
    bio: "Visionary leader and digital marketing expert driving growth through data-driven strategies.",
  },
  {
    name: "Obafaye Lydia",
    role: "Lead Content & UX Strategist",
    img: jessicaImg,
    bio: "Creative storyteller crafting compelling narratives and managing high-performing content teams.",
  },
  {
    name: "Omotoye Daniel",
    role: "Creative Media Architect",
    img: danielImg,
    bio: "Visual strategist specializing in creating impactful brand identities and unforgettable design experiences.",
  },
  {
    name: "Joshua Onyeka",
    role: "Lead Software Engineer (React/Flutter)",
    img: joshuaImg,
    bio: "Software developer building scalable, high-performance web and mobile applications with modern technologies.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Boukartech | Digital Growth, Technology & Career Development</title>
        <meta
          name="description"
          content="Boukartech is a digital growth and technology company focused on helping businesses build scalable systems while creating career opportunities for professionals in digital marketing, design, and technology."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-16 px-5">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">About Us</span>
              <h1 className="heading-xl mb-6">
                We Build <span className="text-gradient-blue">Digital Excellence</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Boukartech, we're a team of innovators passionate about harnessing technology to drive business success. With combined expertise
                and a customer-centric approach, we deliver cutting-edge solutions and dedicated support. Our values prioritize excellence, integrity,
                and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Image */}
        <section className="px-5 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden aspect-video"
            >
              <img src={aboutTeam} alt="Our team at work" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-secondary/50">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={15} label="Expert Team Members" />
            <AnimatedCounter end={60} suffix="%" label="Team Growth per Year" />
            <AnimatedCounter end={5} label="Years of Experience" />
            <AnimatedCounter end={20} label="Happy Clients" />
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <SectionHeading tag="Our Values" title="What Drives" highlight="Us" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((val, i) => (
                <motion.div
                  key={val.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all group"
                >
                  <val.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display font-bold text-lg mb-2">{val.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-secondary/50">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              tag="Our Team"
              title="The People Behind"
              highlight="BoukarTech"
              description="Meet the talented individuals who make it all happen."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-display font-semibold">{member.name}</h4>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-sm mt-1">{member.bio}</p>
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
                Want to Work <span className="text-primary">With Us?</span>
              </h2>
              <p className="text-background/60 mb-8">Let's create something extraordinary together.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-2.5 rounded-full font-medium hover:bg-primary/90 transition-all"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
