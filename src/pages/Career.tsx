import { motion } from "framer-motion";
import { Briefcase, Bell } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Career = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="pt-28 md:pt-36 px-5 pb-16 min-h-[70vh] flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-lg">
          <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-10 h-10 text-primary" />
          </div>
          <h1 className="heading-lg mb-4">
            Join Our <span className="text-gradient-blue">Team</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We are currently refining our recruitment process to better support our growing team. New opportunities in design, development, and
            digital marketing will be posted here soon.
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-medium bg-primary/5 px-6 py-3 rounded-full border border-primary/10">
            <Bell className="w-4 h-4" /> Coming Soon
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
