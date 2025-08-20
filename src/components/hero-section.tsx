import { Button } from '@/components/ui/button';
import { ArrowRight, Hospital, Users, Clock } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Accelerating Clinical Trials. <span className="text-primary">Empowering Hospitals</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                A secure, hospital-focused platform that simplifies clinical trial onboarding and helps doctors identify eligible patients. Make trials faster,
                more efficient, and more successful.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Hospital className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Hospitals Served</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">75%</div>
                <div className="text-sm text-muted-foreground">Faster Onboarding</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Patients Matched</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/clinical-trial-dashboard.png"
                alt="BetterTrails Dashboard Interface"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-3xl transform scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
