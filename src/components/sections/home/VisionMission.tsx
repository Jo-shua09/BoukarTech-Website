import { motion } from "framer-motion";
import mission from "@/assets/images/mission.png";
import vision from "@/assets/images/vision.png";

export default function VisionMission() {
  return (
    <div>
      <section className="space-y-10 lg:space-y-20 py-16 lg:py-24 container-custom">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-3xl lg:rounded-l-3xl text-white mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center p-10 lg:pl-10 justify-between gap-8 lg:gap-20 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 space-y-6 text-center lg:text-left"
            >
              <h2 className="text-2xl lg:text-4xl font-semibold">Our Vision</h2>
              <p className="text-sm lg:text-lg font-medium">
                To become a leading force in the digital realm by helping businesses scale online while empowering young adults and entrepreneurs to
                achieve financial stability and lasting impact through technology
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-shrink-0"
            >
              <img loading="lazy" src={vision} alt="vision image" className="w-64 h-64 object-cover lg:w-96 rounded-full" />
            </motion.div>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-foreground rounded-3xl lg:rounded-r-3xl text-white mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center p-10 lg:pr-10 justify-between gap-8 lg:gap-20 w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-shrink-0 order-2 lg:order-1"
            >
              <img loading="lazy" src={mission} alt="mission image" className="w-64 h-64 object-cover lg:w-96 rounded-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-1 space-y-6 text-center lg:text-left order-1 lg:order-2"
            >
              <h2 className="text-2xl lg:text-4xl font-semibold">Our mission</h2>
              <p className="text-sm lg:text-lg font-medium">
                We bring together a team of tech experts to share digital knowledge, tools, and opportunities that help businesses grow, equip young
                adults with in-demand skills, and support entrepreneurs in building sustainable ventures.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
