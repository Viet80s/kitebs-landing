import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 text-xanh bg-white/80 backdrop-blur-md border-b px-10 shadow-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/pictures/logo.webp"
            alt="VietCyclo Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-amber-900">VietCyclo</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="text-sm font-medium hover:text-amber-700 transition-colors"
          >
            Home
          </a>
          <a
            href="#promo"
            className="text-sm font-medium hover:text-amber-700 transition-colors"
          >
            Promo Codes
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-amber-700 transition-colors"
          >
            About VietCyclo
          </a>
          <a
            href="#location"
            className="text-sm font-medium hover:text-amber-700 transition-colors"
          >
            Find Us
          </a>
        </nav>
        <Link href="#location">
          <Button size="sm" className="bg-amber-700 hover:bg-amber-800">
            Visit Us
          </Button>
        </Link>
      </div>
    </header>
  );
}
