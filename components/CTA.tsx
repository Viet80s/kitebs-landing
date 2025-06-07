import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 bg-amber-100">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
          Ready to Experience VietCyclo?
        </h2>
        <p className="text-amber-800/80 max-w-2xl mx-auto mb-8">
          Don&apos;t forget to bring your promo code for special discounts on
          your visit!
        </p>
        <Link href="#promo">
          <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
            View All Promotions <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
