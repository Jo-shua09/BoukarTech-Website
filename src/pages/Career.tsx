import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";

const openings = [
  {
    title: "Senior Frontend Developer",
    type: "Full-time",
    location: "Remote",
    description: "We're looking for an experienced React developer to join our team.",
  },
  {
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    description: "Create beautiful and intuitive user experiences for our clients.",
  },
  {
    title: "Social Media Manager",
    type: "Full-time",
    location: "Remote",
    description: "Manage and grow social media presence for multiple brands.",
  },
  {
    title: "Video Editor",
    type: "Contract",
    location: "Remote",
    description: "Edit and produce high-quality video content for various platforms.",
  },
];

const benefits = [
  {
    icon: Briefcase,
    title: "Flexible Work",
    description: "Work from anywhere with flexible hours that suit your lifestyle.",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Join a diverse, talented team of professionals who support each other.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement opportunities.",
  },
];

const Career = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Your talent matters to the"
        cTitle="world!"
        description="And we are here to appreciate it decently. Join our team of passionate innovators and help us shape the future of digital solutions."
        buttonOne="Join our Team"
        buttonTwo=""
      />

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              Why Work With <span className="text-primary">Us?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      {/* <section className="py-16 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
          >
            <div>
              <h2 className="heading-lg text-foreground mb-2">
                Open <span className="text-primary">Positions</span>
              </h2>
              <p className="text-muted-foreground">Find your next opportunity</p>
            </div>
            <Button variant="outlineBlue" className="mt-4 md:mt-0">
              Check Open Positions
            </Button>
          </motion.div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background border border-border rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{job.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{job.description}</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">{job.type}</span>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{job.location}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Apply Now
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Join Us CTA */}
      <section className="py-16 bg-muted">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="heading-md mb-4">Join Us!</h2>
            <p className="body-md text-muted-foreground mb-8 max-w-xl mx-auto">
              We are at the stage of fast growth, so if you like exciting jobs, that might be a match!
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
