export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-accent to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Accelerating Clinical Trials.
            <br />
            <span className="text-primary">Empowering Hospitals</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-8 max-w-4xl mx-auto">
            A secure, hospital-focused platform that simplifies clinical trial onboarding and helps doctors identify eligible patients. Making trials faster,
            more efficient, and more successful.
          </p>
          <p className="text-lg text-muted mb-12 max-w-3xl mx-auto">
            When research takes place in a hospital context, scientists have a more direct connection to the needs of the patients they serve. We want to enable
            hospitals with better technology so that more clinical trials can happen at the hospitals and patients can have more options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Book a Demo
            </a>
            <a
              href="#solution"
              className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
