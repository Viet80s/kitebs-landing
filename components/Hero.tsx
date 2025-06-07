import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedShinyTextDemo } from "@/components/FancyButton";

export default function HeroSection() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 z-10" />
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Vietnamese Coffee Culture"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl space-y-4">
          <div className="inline-block rounded-full px-3 py-1 text-sm text-amber-900 mb-2">
            <AnimatedShinyTextDemo text={"✨ Now Open in Nottingham ✨"} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
            Experience Authentic{" "}
            <span className="text-amber-200">Vietnamese Coffee</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Discover the rich flavors and traditions of Vietnam at
            Nottingham&apos;s newest coffee destination
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#promo">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                Get Promo Codes
              </Button>
            </Link>
            <Link href="https://vietcyclo.co.uk/menu-category">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white/20"
              >
                VietCyclo Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
