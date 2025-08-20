import CallToActionSection from "@/components/CallToActionSection";
import ChallengeSection from "@/components/ChallengeSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Navigation from "@/components/Navigation";
import SecuritySection from "@/components/SecuritySection";
import SolutionSection from "@/components/SolutionSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <WhyChooseUsSection />
      <WhoWeServeSection />
      <HowItWorksSection />
      <SecuritySection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
