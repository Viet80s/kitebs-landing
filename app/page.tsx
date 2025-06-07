"use client";

import AutoPlayMobile from "@/components/AutoPlayMobile";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";
import { NavMobile } from "@/components/Header";
import LocationSection from "@/components/Location";
import PromoSection from "@/components/Promo";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if document is loaded
    if (document.readyState === "complete") {
      handleLoadComplete();
    } else {
      window.addEventListener("load", handleLoadComplete);
    }

    // Fallback timer in case some resources are taking too long
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => {
      window.removeEventListener("load", handleLoadComplete);
      clearTimeout(timer);
    };
  }, []);

  const handleLoadComplete = () => {
    // Add a small delay for smoother transition
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      {" "}
      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 bg-xanh z-50 flex flex-col items-center justify-center">
          <img
            src="/pictures/kite.png"
            alt="Kite Logo"
            className="w-40 h-40 animate-pulse mb-8"
          />
        </div>
      )}
      <div className="flex min-h-screen flex-col items-center">
        <NavMobile />
        <div className="w-full sm:w-1/2 mx-auto flex flex-col min-h-screen">
          <main className="flex-1">
            <AutoPlayMobile />
            <PromoSection />
            <LocationSection />
            <CTASection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
