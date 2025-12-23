import mission from "@/assets/images/mission.png";
import vision from "@/assets/images/vision.png";

export default function VisionMission() {
  return (
    <div>
      <section className="space-y-10 lg:space-y-20 py-16 lg:py-24 container-custom">
        {/* Vision */}
        <div className="bg-primary rounded-3xl lg:rounded-l-3xl text-white mx-auto">
          <div className="flex flex-col lg:flex-row items-center p-10 lg:pl-10 justify-between gap-8 lg:gap-20 w-full">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h2 className="text-2xl lg:text-4xl font-semibold">Our Vision</h2>
              <p className="text-sm lg:text-lg font-medium">
                To become a leading force in the digital realm by helping businesses scale online while empowering young adults and entrepreneurs to
                achieve financial stability and lasting impact through technology
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src={vision} alt="vision image" className="w-64 h-64 object-cover lg:w-96 rounded-full" />
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-foreground rounded-3xl lg:rounded-r-3xl text-white mx-auto">
          <div className="flex flex-col lg:flex-row items-center p-10 lg:pr-10 justify-between gap-8 lg:gap-20 w-full">
            <div className="flex-shrink-0 order-2 lg:order-1">
              <img src={mission} alt="mission image" className="w-64 h-64 object-cover lg:w-96 rounded-full" />
            </div>
            <div className="flex-1 space-y-6 text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-2xl lg:text-4xl font-semibold">Our mission</h2>
              <p className="text-sm lg:text-lg font-medium">
                We bring together a team of tech experts to share digital knowledge, tools, and opportunities that help businesses grow, equip young
                adults with in-demand skills, and support entrepreneurs in building sustainable ventures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
