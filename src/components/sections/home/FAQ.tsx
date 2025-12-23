import { faq } from "@/assets/data/data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="">
      <section className="pb-16 lg:pb-24 bg-background">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
            <div className="flex-1 lg:flex-[2]">
              <h2 className="font-bold text-2xl md:text-4xl text-primary mb-2">Frequently Asked Questions</h2>
              <h4 className="text-lg md:text-xl font-medium mb-2">Still have questions?</h4>
              <p className="text-base font-normal text-muted-foreground">Can't find the answers you re looking for?, Get in touch with us</p>
            </div>
            <div className="flex-1 lg:flex-[3]">
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="hover:text-primary text-left text-base md:text-lg">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm lg:text-base">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
