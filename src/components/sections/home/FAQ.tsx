import { faq } from "@/assets/data/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <div className="">
      <section className="pb-16 lg:pb-24 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 lg:flex-[2]"
            >
              <h2 className="font-bold text-2xl md:text-4xl text-primary mb-2">Frequently Asked Questions</h2>
              <h4 className="text-lg md:text-xl font-medium mb-2">Still have questions?</h4>
              <p className=" text-sm md:text-base font-normal text-muted-foreground">
                Can't find the answers you re looking for?, Get in touch with us
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 lg:flex-[3]"
            >
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className="hover:text-primary text-left text-base md:text-lg">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm lg:text-base">{item.a}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
