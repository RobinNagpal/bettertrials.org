import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold">BetterTrails</span>
            </div>
            <p className="text-background/80 leading-relaxed">Accelerating clinical trials and empowering hospitals with better technology solutions.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contract Onboarding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Patient Recruitment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Data Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Compliance Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-background/80">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                hello@bettertrails.com
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Toronto, Canada
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2024 BetterTrails. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
