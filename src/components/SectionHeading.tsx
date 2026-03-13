import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ tag, title, highlight, description, align = "center" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center max-w-3xl mx-auto" : ""}`}
    >
      {tag && <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">{tag}</span>}
      <h2 className="heading-lg">
        {title} {highlight && <span className="text-gradient-blue">{highlight}</span>}
      </h2>
      {description && <p className="text-muted-foreground mt-4 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">{description}</p>}
    </motion.div>
  );
};

export default SectionHeading;
