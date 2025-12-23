import mosaic from "@/assets/images/moasic1.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ImageMosaic() {
  return (
    <div className="w-full space-y-16 max-w-7xl mx-auto container-custom pb-16 lg:pb-24">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
        <div className="space-y-2 max-w-xl lg:text-left text-center">
          <h2 className="text-2xl lg:text-5xl font-semibold">Join Us!</h2>
          <p className="text-muted-foreground font-normal text-base lg:text-xl">
            We are on the stage of the fast growth, so if you like excelling also, that might be a match!
          </p>
        </div>
        <Link to="/career">
          <Button size="lg" className="w-full">
            Check Open Positions
          </Button>
        </Link>
      </div>
      <div className="md:row-span-2 rounded-2xl overflow-hidden">
        <img src={mosaic} loading="lazy" alt="Mosaic image" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
