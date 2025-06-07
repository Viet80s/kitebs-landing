import AboutSection from "@/components/About";
import AutoPlayMobile from "@/components/AutoPlayMobile";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";
import { NavMobile } from "@/components/Header";
import HeroSection from "@/components/Hero";
import LocationSection from "@/components/Location";
import PromoSection from "@/components/Promo";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavMobile />

      <main className="flex-1">
        <AutoPlayMobile />
        <PromoSection />
        <AboutSection />
        <LocationSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
