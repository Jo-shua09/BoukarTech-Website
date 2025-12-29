import { team } from "@/assets/data/data";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Team() {
  return (
    <section className="pb-16 lg:pb-24 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <h2 className="heading-lg text-foreground mb-2">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">The talented professionals behind Boukartech's success.</p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[1/1] overflow-hidden">
                  <img
                    loading="lazy"
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Socials (hover) */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex gap-4">
                      {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="w-10 h-10 rounded-full bg-white/90 text-foreground hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                        >
                          <Icon size={18} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 py-3 text-center flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-base font-normal text-primary">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
