"use client";
import Link from "next/link";
import Stack from "./Stack/Stack";
import { Button } from "./ui/button";
import { TicketCheck } from "lucide-react";

export default function StackComponent() {
  const images = [
    {
      id: 1,
      img: "/pictures/voucher/promo-1.webp",
      code: "ZZBO7WH480",
    },
    {
      id: 2,
      img: "/pictures/voucher/promo-2.webp",
      code: "ADG1V7345B",
    },
    {
      id: 3,
      img: "/pictures/voucher/promo-3.webp",
      code: "76ZYHUQ382",
    },
    {
      id: 4,
      img: "/pictures/voucher/promo-4.webp",
      code: "UYWTS676FH",
    },
    {
      id: 5,
      img: "/pictures/voucher/promo-5.webp",
      code: "580763GOXH",
    },
    {
      id: 6,
      img: "/pictures/voucher/promo-6.webp",
      code: "QR59O9F0LS",
    },
    {
      id: 7,
      img: "/pictures/voucher/promo-7.webp",
      code: "9EVQS0P4MT",
    },
    {
      id: 8,
      img: "/pictures/voucher/promo-8.webp",
      code: "M36NJYEG62",
    },
    {
      id: 9,
      img: "/pictures/voucher/promo-9.webp",
      code: "7W9F754251",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <Stack
        randomRotation={true}
        sensitivity={180}
        sendToBackOnClick={false}
        cardDimensions={{ width: 270, height: 360 }}
        cardsData={images}
      />
      <Link href="https://vietcyclo.co.uk/rewards">
        <Button
          variant={"secondary"}
          className="flex items-center items-center mt-14 h-12 bg-do text-white rounded-lg hover:bg-do/90 transition-colors duration-300"
        >
          Add Voucher to VietCyclo Account{" "}
          <TicketCheck className="ml-1 size-6" />
        </Button>
      </Link>
    </div>
  );
}
