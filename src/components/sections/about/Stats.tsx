import { motion } from "framer-motion";

export default function Stats() {
  return (
    <div>
      <section className="pb-16 lg:pb-24 max-w-5xl m-auto bg-white">
        <div className="container-custom">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-4xl font-semibold text-foreground mb-4">Boukartech Team</h2>

            <p className="text-5xl font-bold text-foreground">
              15+
              <span className="block text-lg font-normal text-muted-foreground mt-2">Experts in the field</span>
            </p>
          </motion.div>

          {/* Top Stats */}
          <div className="flex flex-col md:flex-row  items-center gap-10 justify-between max-w-xl m-auto  mb-10">
            <div className="text-center md:text-left">
              <p className="text-6xl font-bold text-muted-foreground mb-3">50%</p>
              <p className="text-lg text-foreground max-w-xs">
                Mobile & front-end
                <br />
                engineers
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-6xl font-bold text-muted-foreground mb-3">40%</p>
              <p className="text-lg text-foreground">
                Brand
                <br />
                Designers
              </p>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-5">
              <div className="bg-blue-500 p-3 rounded-md">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 3h2v18H3V3zm4 10h2v8H7v-8zm4-6h2v14h-2V7zm4 4h2v10h-2V11zm4-8h2v18h-2V3z" />
                </svg>
              </div>

              <p className="text-lg text-foreground">
                <span className="font-semibold">60%</span> of team growth per year
              </p>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-blue-500 p-3 rounded-md">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z" />
                </svg>
              </div>

              <p className="text-lg text-foreground">
                <span className="font-semibold">90%</span> of the team have at least 5 years of experience
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
