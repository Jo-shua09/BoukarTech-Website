import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="pt-28 md:pt-36 px-5 pb-16 min-h-[70vh] flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-lg">
          <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <h1 className="heading-lg mb-4">
            Our <span className="text-gradient-blue">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            No blog posts yet. We're working on creating insightful content about technology, design, and digital transformation. Stay tuned!
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
