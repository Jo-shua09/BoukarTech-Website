import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import VisionMission from "@/components/sections/home/VisionMission";
import Services from "@/components/sections/home/Services";
import ImageMosaic from "@/components/sections/home/ImageMosaic";
import FAQ from "@/components/sections/home/FAQ";
import CTA from "@/components/sections/home/CTA";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Leading Force in the"
        cTitle="Digital Realm"
        description="Our vision is to become the leading digital solutions provider, empowering businesses worldwide with innovative technology and creative excellence. We transform ideas into powerful digital experiences."
        buttonOne="Get Started"
        buttonTwo="Our Services"
      />

      {/* Vision & Mission */}
      <VisionMission />

      {/* Services Section */}
      <Services />

      {/* FAQ */}
      <FAQ />

      {/* Image Mosaic */}
      <ImageMosaic />

      {/* CTA Section */}
      <CTA />
    </Layout>
  );
};

export default Index;
