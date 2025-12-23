import { values } from "@/assets/data/data";
import { motion } from "framer-motion";

export default function Value() {
  return (
    <section className="pb-16 lg:pb-24 bg-white">
      <div className="container-custom">
        {/* Header - Minimalist */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
            Our <span className="font-bold text-primary">Values</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Principles that define our approach, guide our decisions, and shape our relationships.
          </p>
        </motion.div>

        {/* Values Grid - Minimalist */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Simple, clean card */}
              <div className="h-full p-8 hover:bg-gray-50/50 rounded-2xl transition-all duration-500 border border-transparent hover:border-gray-200">
                {/* Icon with subtle background */}
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <value.icon size={24} className="text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  <span className="text-primary font-bold mr-2">0{index + 1}.</span>
                  {value.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
