"use client";
import Link from "next/link";
import Stack from "./Stack/Stack";
import { Button } from "./ui/button";
import { TicketCheck } from "lucide-react";

export default function StackComponent() {
  const images = [
    {
      id: 1,
      img: "/pictures/voucher/promo-01.webp",
      code: "ZZBO7WH480",
    },
    {
      id: 2,
      img: "/pictures/voucher/promo-02.webp",
      code: "ADG1V7345B",
    },
    {
      id: 3,
      img: "/pictures/voucher/promo-03.webp",
      code: "76ZYHUQ382",
    },
    {
      id: 4,
      img: "/pictures/voucher/promo-04.webp",
      code: "UYWTS676FH",
    },
    {
      id: 5,
      img: "/pictures/voucher/promo-05.webp",
      code: "580763GOXH",
    },
    {
      id: 6,
      img: "/pictures/voucher/promo-06.webp",
      code: "QR59O9F0LS",
    },
    {
      id: 7,
      img: "/pictures/voucher/promo-07.webp",
      code: "9EVQS0P4MT",
    },
    {
      id: 8,
      img: "/pictures/voucher/promo-08.webp",
      code: "M36NJYEG62",
    },
    {
      id: 9,
      img: "/pictures/voucher/promo-09.webp",
      code: "7W9F754251",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <Stack
        randomRotation={true}
        sensitivity={180}
        sendToBackOnClick={false}
        cardDimensions={{ width: 400, height: 500 }}
        cardsData={images}
      />
      <Link href="https://vietcyclo.co.uk/rewards">
        <Button
          variant={"secondary"}
          className="flex items-center mt-5 h-12 text-lg bg-do text-white rounded-lg hover:bg-do/90 transition-colors duration-300"
        >
          Applied Voucher to Your Account Now{" "}
          <TicketCheck className="ml-1 size-6" />
        </Button>
      </Link>
    </div>
  );
}
