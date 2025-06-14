import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6 text-center">
        <h2 className=" md:text-4xl font-bold text-xanh mb-2 text-pretty text-balance">
          JOINING OUR PARTNER HUB TO GET YOUR BUSINESS SEEN
        </h2>
        <h2 className="md:text-4xl text-xanh/90 mb-4 text-pretty text-balance">
          FREE CONSULTATION AND 3 MONTHS OF PROMOTION
        </h2>
        <Link href="https://kitebusinesssolution.com/contact" target="_blank">
          <Button
            size="lg"
            className="w-full bg-xanh text-vang text-lg rounded-3xl hover:bg-amber-800"
          >
            LEAVE YOUR CONTACT <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
