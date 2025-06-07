import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center text-white bg-xanh text-md md:text-lg p-6 border-xanh/20 bg-white">
      <p className="mt-2">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-bold text-lg">KITE BUSINESS SOLUTIONS</span>
      </p>
      <p>All Rights Reserved.</p>
      <div className="text-right flex items-center text-white text-md justify-center mt-2">
        <Link href={"https://kitebusinesssolution.com/"}>
          <div className="mr-2">Visit KITE Website</div>
        </Link>
        <div>
          <Image
            src="/pictures/kite.png"
            alt="VietCyclo Logo"
            width={30}
            height={30}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
          />
        </div>
      </div>
    </footer>
  );
}
