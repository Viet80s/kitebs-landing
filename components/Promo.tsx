import { AnimatedShinyTextDemo } from "@/components/FancyButton";
import StackComponent from "@/components/Stack";

export default function PromoSection() {
  return (
    <section id="promo" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div>
            <AnimatedShinyTextDemo text={"🎉 Limited Time Offer 🎉"} />
          </div>
          <h2 className="text-3xl mt-5 md:text-4xl font-bold text-amber-900 mb-4">
            Exclusive Promo Codes
          </h2>
          <p className="text-lg text-amber-800/80 max-w-2xl text-pretty">
            Celebrate our grand opening with these special offers. Simply swipe
            and choose the code you&apos;d like, then add it to your VietCyclo
            Rewards account!
          </p>
        </div>
        <StackComponent />
      </div>
    </section>
  );
}
