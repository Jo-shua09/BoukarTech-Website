import { Shield, Check, TrendingUp, Lock, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import phillipImg from "@/assets/images/phillip.jpg";
import danielImg from "@/assets/images/daniel.jpg";
import lydiaImg from "@/assets/images/jessica.jpg";
import Team from "@/components/sections/about/Team";
import AboutVisionMission from "@/components/sections/about/AboutVisionMission";
import Hero from "@/components/sections/Hero";
import Value from "@/components/sections/about/Value";
import Stats from "@/components/sections/about/Stats";

const team = [
  {
    name: "Ndoula Philip",
    role: "Founder / CEO",
    image: phillipImg,
    bio: "Visionary leader driving Boukartech's mission to transform digital experiences.",
  },
  {
    name: "Obafayi Lydia",
    role: "Content/SMM Manager",
    image: lydiaImg,
    bio: "Creative strategist crafting compelling content and social media campaigns.",
  },
  {
    name: "Omotoye Daniel",
    role: "Brand Designer",
    image: danielImg,
    bio: "Visual storyteller creating stunning designs that captivate audiences.",
  },
  {
    name: "Onyeka Joshua",
    role: "Web Developer",
    image: phillipImg,
    bio: "Technical expert building modern, responsive, and secure web solutions.",
  },
];

const values = [
  {
    icon: Shield,
    name: "Integrity",
    description: "We uphold ethical standards, transparency, and honesty in all interactions and business practices.",
  },
  { icon: Check, name: "Accountability", description: "We take full responsibility for our actions and deliver on every commitment we make." },
  { icon: TrendingUp, name: "Growth", description: "We embrace continuous learning and improvement to stay ahead of the curve." },
  { icon: Lock, name: "Confidentiality", description: "We protect client information with the highest level of security and discretion." },
  { icon: Lightbulb, name: "Innovation", description: "We embrace creativity and continuous improvement to provide cutting-edge digital solutions." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="We are "
        cTitle="Trusted"
        description="At Boukartech, we're a team of innovators passionate about harnessing technology to drive business success. With combined expertise and a customer-centric approach, we deliver cutting-edge solutions and dedicated support. Our values prioritize excellence, integrity, and customer satisfaction."
        buttonOne="Let's Talk"
        buttonTwo=""
        buttonLink="https://calendly.com/boukartech"
      />

      {/* Vision & Mission */}
      <AboutVisionMission />

      {/* Stats Section */}
      <Stats />

      {/* Team Section */}
      <Team />

      {/* Core Values */}
      <Value />
    </Layout>
  );
};

export default About;
