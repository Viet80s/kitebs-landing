import Image from "next/image";
import { Coffee, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="VietCyclo Coffee Shop Interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-900">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900">
              Bringing Vietnam&apos;s Coffee Culture to Nottingham
            </h2>
            <p className="text-gray-600 text-pretty">
              VietCyclo is a passion project born from our love of authentic
              Vietnamese coffee traditions. We source our beans directly from
              Vietnam&apos;s highlands, ensuring the highest quality and most
              authentic flavors.
            </p>
            <p className="text-gray-600 text-pretty">
              Our coffee is prepared using traditional methods, including the
              iconic Vietnamese drip filter (phin), creating a rich, bold flavor
              that&apos;s distinctively different from Western coffee styles.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <Coffee className="h-5 w-5 text-amber-700" />
                </div>
                <span className="font-medium">Authentic Recipes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-amber-700" />
                </div>
                <span className="font-medium">Traditional Methods</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
