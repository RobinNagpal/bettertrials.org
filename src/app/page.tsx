import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ChallengeSection } from '@/components/challenge-section';
import { SolutionSection } from '@/components/solution-section';
import { FeaturesSection } from '@/components/features-section';
import { SecuritySection } from '@/components/security-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <FeaturesSection />
      <SecuritySection />
      <CTASection />
      <Footer />
    </main>
  );
}
