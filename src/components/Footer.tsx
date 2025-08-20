export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">BetterTrails</h3>
            <p className="text-white/80 mb-6">
              Empowering hospitals with better technology to accelerate clinical
              trials and improve patient care.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@bettertrials.com"
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="#solution"
                  className="hover:text-white transition-colors"
                >
                  Contract Onboarding
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  className="hover:text-white transition-colors"
                >
                  Patient Recruitment
                </a>
              </li>
              <li>
                <a
                  href="#solution"
                  className="hover:text-white transition-colors"
                >
                  Data Entry
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className="hover:text-white transition-colors"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>
            &copy; {new Date().getFullYear()} BetterTrails. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
