import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Layout from "@/components/Layout";
import sholadishotel from "@/assets/images/sholadishotel.jpg";
import ayokastudio from "@/assets/images/ayokastudio.jpg";
import ashywienish from "@/assets/images/ashywienish.jpg";
import judeiria from "@/assets/images/judeiria.jpg";

const portfolioProjects = [
  {
    id: 1,
    title: "Sholadis Executive Hotel",
    category: "Hospitality Platform",
    image: sholadishotel,
    description: "A luxury hospitality booking platform for a premier hotel in Ibadan. Built for high-speed performance and premium user experience.",
    link: "https://sholadishotel.com/",
  },
  {
    id: 2,
    title: "Ayoka Films",
    category: "Creative Media",
    image: ayokastudio,
    description:
      "A cinematic portfolio and media hub for a leading production studio, designed to showcase high-fidelity video content and studio services.",
    link: "https://ayokastudio.vercel.app/",
  },
  {
    id: 3,
    title: "Ashy Wineish Farms",
    category: "Agribusiness",
    image: ashywienish,
    description: "An agricultural commerce and sustainability platform connecting farm-to-table produce with modern digital consumers.",
    link: "https://ashywineish.vercel.app/",
  },
  {
    id: 4,
    title: "Jude Iria",
    category: "Business Strategy",
    image: judeiria,
    description:
      "A high-conversion personal branding and business strategy site for a top growth consultant, focusing on clarity and professional credibility.",
    link: "https://judeiria.vercel.app/",
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
              {portfolioProjects.map((project, index) => (
                <motion.a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
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
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
