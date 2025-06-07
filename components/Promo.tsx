import { AnimatedShinyTextDemo } from "@/components/FancyButton";
import CarouselComponent from "./Carousel";

export default function PromoSection() {
  return (
    <section id="promo" className="py-4">
      <div className="">
        <div className="flex flex-col items-center text-center">
          <div className="w-full p-4 text-2xl mt-5 font-bold text-vang bg-xanh">
            <h2>SWIPE + TAP</h2>
            <h2 className="text-md">TO FIND LIMITED VOUCHER </h2>
          </div>
        </div>
        <CarouselComponent />
      </div>
    </section>
  );
}
