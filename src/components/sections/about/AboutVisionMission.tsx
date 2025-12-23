import { motion } from "framer-motion";

export default function AboutVisionMission() {
  return (
    <div>
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-3xl p-8 border border-primary/20"
            >
              <h2 className="heading-md text-foreground mb-4">
                Our <span className="text-primary">Vision</span>
              </h2>
              <p className="body-md text-muted-foreground">
                To become a leading force in the digital realm by helping businesses scale online while empowering young adults and entrepreneurs to
                achieve financial stability and lasting impact through technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-3xl p-8"
            >
              <h2 className="heading-md text-foreground mb-4">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="body-md text-muted-foreground">
                We bring together a team of tech experts to share digital knowledge, tools, and opportunities that help businesses grow, equip young
                adults with in-demand skills, and support entrepreneurs in building sustainable ventures.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
