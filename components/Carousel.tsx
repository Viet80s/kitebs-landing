"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { SquareArrowOutUpRight, TicketCheck } from "lucide-react";
import Carousel from "./Carousel/Carousel";

export default function CarouselComponent() {
  return (
    <div className="flex flex-col items-center justify-center my-5">
      <Carousel
        baseWidth={300}
        autoplay={false}
        autoplayDelay={3000}
        pauseOnHover={true}
        itemHeight={350}
        loop={true}
        round={false}
      />
      <Link href="https://vietcyclo.co.uk/rewards">
        <Button
          variant={"secondary"}
          className="flex items-center items-center bg-do text-white rounded-2xl hover:bg-do/90 transition-colors duration-1000"
        >
          Add Voucher to VietCyclo Account{" "}
          <SquareArrowOutUpRight className="ml-1 size-4" />
        </Button>
      </Link>
    </div>
  );
}
