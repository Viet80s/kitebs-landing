import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LocationSection() {
  return (
    <section id="location" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Find Us in Nottingham
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re conveniently located in the heart of Nottingham. Come
            experience the taste of Vietnam!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-amber-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-amber-900 mb-4">
              Opening Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-medium text-gray-600">
                  7:00 AM - 8:00 PM
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span className="font-medium text-gray-600">
                  8:00 AM - 9:00 PM
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span className="font-medium text-gray-600">
                  9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-amber-700" />
                <div>
                  <p className="text-gray-600 text-pretty">
                    63-67 Friar Lane, NG1 6DH
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-700" />
                <div>
                  <p className="text-gray-600">+44 115 123 4567</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="https://maps.app.goo.gl/CqDN1B3QJAi34dti9">
                <Button className="w-full bg-amber-700 hover:bg-amber-800">
                  Get Directions
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=800"
              alt="Map location of VietCyclo Coffee Shop"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <MapPin className="h-8 w-8 text-amber-700 mx-auto" />
                <p className="font-bold text-amber-900 mt-2">
                  VietCyclo Coffee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
