import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Layout from "@/components/Layout";

const dummyProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    description: "A modern, fully responsive e-commerce platform built with robust payment integrations.",
  },
  {
    id: 2,
    title: "Social Networking App",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    description: "A cross-platform mobile application built to seamlessly connect professionals.",
  },
  {
    id: 3,
    title: "Brand Identity Redesign",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    description: "A complete visual identity overhaul and branding strategy for a leading tech startup.",
  },
  {
    id: 4,
    title: "Modern Corporate Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    description: "A professional, lightning-fast, and SEO-optimized corporate site for global clients.",
  },
  {
    id: 5,
    title: "Product Launch Video",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop",
    description: "High-impact promotional and cinematic video editing for a flagship product launch.",
  },
  {
    id: 6,
    title: "Targeted Ad Campaign",
    category: "Ads Specialist",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    description: "Data-driven advertising campaign strategy resulting in an incredible 300% ROI.",
  },
];

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Boukartech</title>
        <meta
          name="description"
          content="Take a look at some of our recent work across various industries and disciplines including web development, app development, and graphic design."
        />
      </Helmet>

      <Layout>
        <div className="pt-28 md:pt-36 pb-20 min-h-screen">
          <div className="max-w-7xl mx-auto md:p-0 px-5">
            <SectionHeading
              tag="Our Work"
              title="Featured"
              highlight="Projects"
              description="Take a look at some of our recent work across various industries and disciplines."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {dummyProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
