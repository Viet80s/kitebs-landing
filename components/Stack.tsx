"use client";
import Link from "next/link";
import Stack from "./Stack/Stack";
import { Button } from "./ui/button";
import { TicketCheck } from "lucide-react";

export default function StackComponent() {
  const images = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
      code: "test1",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
      code: "test2",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
      code: "test3",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
      code: "test4",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <Stack
        randomRotation={true}
        sensitivity={180}
        sendToBackOnClick={false}
        cardDimensions={{ width: 300, height: 300 }}
        cardsData={images}
      />
      <Link href="https://vietcyclo.co.uk/rewards">
        <Button
          variant={"secondary"}
          className="flex items-center mt-8 h-12 text-sm"
        >
          Add copied Code to VietCyclo account{" "}
          <TicketCheck className="ml-1 size-6" />
        </Button>
      </Link>
    </div>
  );
}
