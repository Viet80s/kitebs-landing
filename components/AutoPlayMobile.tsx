"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const AutoPlayMobile = () => {
  const Images = [
    {
      original: "/pictures/banner1.webp",
      blurDataURL: "/pictures/banner1.webp",
    },
    {
      original: "/pictures/banner2.webp",
      blurDataURL: "/pictures/banner2.webp",
    },
    {
      original: "/pictures/banner3.webp",
      blurDataURL: "/pictures/banner3.webp",
    },
    {
      original: "/pictures/banner4.webp",
      blurDataURL: "/pictures/banner4.webp",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <div className="w-full mt-[90px]">
      <Slider {...settings}>
        {Images.map((image, index) => (
          <div key={index}>
            <Link href={"/rewards"}>
              <Image
                src={image.original}
                alt={`Slide ${index + 1}`}
                width={1920}
                height={750}
                placeholder="blur"
                priority
                fetchPriority="high"
                blurDataURL={image.blurDataURL}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center items-center">
        <h1 className="text-cam text-pretty text-sm font-bold">
          Free Drink at VietCyclo
        </h1>
        <Button className="bg-vang text-white animate-pulse rounded-lg px-4 text-sm py-2 ml-2">
          <Link href="https://vietcyclo.co.uk/rewards">
            Become a Member today
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AutoPlayMobile;
