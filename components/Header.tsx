"use client";

import Link from "next/link";
import Image from "next/image";

export const NavMobile = () => {
  return (
    <div className={`fixed top-0 w-full z-50 backdrop-blur bg-xanh`}>
      <div className="flex items-center justify-between mx-5 text-xanh">
        {/*Title */}
        <div>
          <Link href="/" className="text-xl">
            <Image
              src="/pictures/kite.png"
              alt="KITE Logo"
              priority
              width={70}
              height={70}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
        <div className="text-vang text-lg font-bold">KITE VOUCHER SITE</div>
        <div className="w-[40px]"></div>
      </div>
    </div>
  );
};
