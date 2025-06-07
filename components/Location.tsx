import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import RollingGallery from "./RollingGallery/RollingGallery";

export default function LocationSection() {
  return (
    <section id="location" className="py-5 bg-xanh">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="mt-5 text-lg md:text-4xl font-bold text-white mb-4">
            We work directly with our partners so you
          </h2>
          <p className="text-white max-w-2xl font-bold mx-auto">
            <span className="text-vang text-2xl mr-2">NEVER</span> have to{" "}
            <span className="text-vang text-2xl ml-2">PAY FULL PRICE</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-left gap-4 mb-8">
          <h1 className="text-white text-left md:text-3xl font-bold self-start">
            Visit Nottingham's most Authentic Kitchen
          </h1>
          <RollingGallery autoplay={true} pauseOnHover={true} />
          <Link
            href="https://viet80s.co.uk"
            target="_blank"
            className="self-start w-full md:w-auto"
          >
            <Button
              size={"lg"}
              className="bg-vang w-full md:w-auto text-xanh font-bold rounded-3xl"
            >
              Viet80s' Website
            </Button>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-left gap-4 mb-8">
          <h1 className="text-white text-left md:text-3xl font-bold self-start">
            Visit Nottingham's Newest Brunch Spot
          </h1>
          <RollingGallery autoplay={true} pauseOnHover={true} />
          <Link
            href="https://vietcyclo.co.uk"
            target="_blank"
            className="self-start w-full md:w-auto"
          >
            <Button
              size={"lg"}
              className="bg-vang w-full md:w-auto text-xanh font-bold rounded-3xl"
            >
              VietCyclo's Website
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
