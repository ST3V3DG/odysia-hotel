import AboutSection from "@/components/about-section";
import CTASection from "@/components/cta-section";
import FAQsSection from "@/components/faqs-section";
import FeatureSection from "@/components/feature-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import LogoCloud from "@/components/logo-cloud";
import RoomsMarqee from "@/components/rooms-marqee";
import TestimonialSection from "@/components/testimonial-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <LogoCloud />
        <AboutSection />
        <RoomsMarqee />
        <TestimonialSection />
        <CTASection />
        <FAQsSection />
        <Footer />
      </main>
    </>
  );
}
