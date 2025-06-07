import AboutSection from "@/components/About";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import LocationSection from "@/components/Location";
import PromoSection from "@/components/Promo";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[url('/pictures/background.webp')] bg-center bg-cover">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <PromoSection />
        <AboutSection />
        <LocationSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
