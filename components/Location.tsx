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
          <h2 className="mt-5 text-pretty md:text-4xl font-bold text-white mb-4">
            We work directly with our partners so you
          </h2>
          <p className="text-white max-w-2xl md:text-4xl font-bold mx-auto">
            <span className="text-vang text-2xl md:text-4xl mr-2">NEVER</span>{" "}
            have to{" "}
            <span className="text-vang text-2xl md:text-4xl ml-2">
              PAY FULL PRICE
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start justify-left gap-4 mb-8">
          <h1 className="text-white text-left md:text-3xl font-bold self-start">
            Visit Nottingham's most Authentic Kitchen
          </h1>
          <RollingGallery
            autoplay={true}
            pauseOnHover={true}
            images={[
              "pictures/voucher/v80s-1.webp",
              "pictures/voucher/v80s-2.webp",
              "pictures/voucher/v80s-3.webp",
              "pictures/voucher/v80s-4.webp",
              "pictures/voucher/v80s-5.webp",
              "pictures/voucher/v80s-6.webp",
              "pictures/voucher/v80s-7.webp",
              "pictures/voucher/v80s-8.webp",
            ]}
          />
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
        <div className="flex flex-col items-start justify-left gap-4 mb-8">
          <h1 className="text-white text-left md:text-3xl font-bold self-start">
            Visit Nottingham's Newest Brunch Spot
          </h1>
          <RollingGallery
            autoplay={true}
            pauseOnHover={true}
            images={[
              "pictures/voucher/vcl01.webp",
              "pictures/voucher/vcl02.webp",
              "pictures/voucher/vcl03.webp",
              "pictures/voucher/vcl04.webp",
              "pictures/voucher/vcl05.webp",
              "pictures/voucher/vcl06.webp",
              "pictures/voucher/vcl07.webp",
              "pictures/voucher/vcl08.webp",
            ]}
          />
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
