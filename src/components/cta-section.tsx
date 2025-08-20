import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section id="contact" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Together, {"let's"} accelerate the future of clinical research</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Join hundreds of hospitals already using BetterTrails to streamline their clinical trial processes and improve patient outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Contact Us
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground">hello@bettertrails.com</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
