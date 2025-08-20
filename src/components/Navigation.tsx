export default function Navigation() {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">BetterTrails</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#solution"
                className="text-muted hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Solutions
              </a>
              <a
                href="#how-it-works"
                className="text-muted hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                How It Works
              </a>
              <a
                href="#security"
                className="text-muted hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Security
              </a>
              <a
                href="#contact"
                className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
