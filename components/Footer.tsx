import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center text-xanh opacity-80 text-md md:text-lg p-6 border-xanh/20 bg-white">
      <a href={"mailto:info@vietcyclo.co.uk"}>
        <p className="underline">Email us: info@vietcyclo.co.uk</p>
      </a>
      <p className="mt-1">63-67 Friar Lane, Nottingham NG1 6DH</p>
      <p className="mt-2">
        &copy; {new Date().getFullYear()} Viet Cyclo LTD. All Rights Reserved.
      </p>
      <div className="text-right flex items-center text-xanh text-md justify-center mt-2">
        <Link href={"https://kitebusinesssolution.com/"}>
          <div className="mr-2">Powered by KITE</div>
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
