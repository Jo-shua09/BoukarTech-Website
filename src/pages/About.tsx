import { Helmet } from "react-helmet-async";
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
    </>
  );
};

export default About;
