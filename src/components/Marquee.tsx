const services = [
  "Web Development",
  "Mobile Apps",
  "Social Media Management",
  "Graphic Design",
  "Video Editing",
  "Livestreaming",
  "Web Hosting",
  "Ads Specialist",
];

const Marquee = () => {
  return (
    <div className="py-5 bg-foreground overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {[...services, ...services].map((service, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className="text-background/90 text-sm font-medium tracking-wider uppercase">{service}</span>
            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
