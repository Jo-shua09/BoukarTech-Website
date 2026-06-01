import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Layout from "@/components/Layout";
import { portfolioProjects } from "@/assets/data/portfolio";
import ClickToPlayVideo from "@/components/ClickToPlayVideo";

const tabs = ["All", "Websites", "LinkedIn Optimization"];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = portfolioProjects.filter((project) => {
    if (activeTab === "All") return true;
    return project.type === activeTab;
  });

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

            <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.a
                    layout
                    key={project.id}
                    href={project.link !== "#" ? project.link : undefined}
                    target={project.link !== "#" ? "_blank" : undefined}
                    rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={`group rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col ${
                      project.link === "#" ? "cursor-default" : "hover:-translate-y-1"
                    }`}
                  >
                    <div className="aspect-video overflow-hidden relative">
                      {project.id === 1 ? (
                        <div className="absolute inset-0">
                          {/* Click-to-play video (src loads only on click) */}
                          {/* Video not auto-loading for fast initial portfolio load */}
                          <ClickToPlayVideo
                            videoSrc={"/assets/media/livestreating.mp4"}
                            posterSrc={project.image}
                            className="w-full h-full focus:outline-none"
                          />
                        </div>
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </Layout>
    </>
  );
}
