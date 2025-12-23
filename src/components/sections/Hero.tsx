import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo2-bg.png";

export default function Hero({ title, cTitle, description, buttonOne, buttonTwo, buttonLink = "/contact" }) {
  return (
    <section className="relative min-h-screen text-gray-900 overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 min-h-screen bg-foreground flex items-center py-32 lg:py-24">
        <div className="container-custom w-full">
          <div className="max-w-7xl w-full">
            {/* Accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 0.8 }}
              className="h-px bg-gradient-to-r from-primary to-primary/30 mb-10"
            ></motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-6xl md:w-[70%] text-white lg:text-7xl font-bold mb-8 leading-tight"
            >
              {title}{" "}
              <span className="text-primary relative">
                {cTitle}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed font-light"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <Button className="" variant="hero" size="lg" asChild>
                {buttonLink.startsWith("http") ? (
                  <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {buttonOne}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </a>
                ) : (
                  <Link to={buttonLink} className="flex items-center gap-2">
                    {buttonOne}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                  </Link>
                )}
              </Button>

              {buttonTwo && (
                <Button className="" variant="outlineBlue" size="lg" asChild>
                  <Link to="/services">{buttonTwo}</Link>
                </Button>
              )}
            </motion.div>
          </div>
        </div>

        {/* Floating card (optional side content) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute right-10 top-[40%] transform -translate-y-1/2 hidden xl:block"
        >
          <div className="w-64 justify-center flex items-center h-64 bg-gradient-to-br from-primary/10 to-blue-100 rounded-2xl shadow-xl border border-gray-200">
            <img src={logo} alt="logo" className="w-full h-full object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
