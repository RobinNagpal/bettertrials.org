export default function CallToActionSection() {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Together, let's accelerate the future of clinical research.
        </h2>
        <p className="text-xl text-white/90 mb-12">
          Ready to transform your clinical trial processes? Let's discuss how
          BetterTrails can help your hospital run trials more efficiently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:robinnagpal@besttrails.org"
            className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
          >
            Book a Demo
          </a>
          <a
            href="mailto:robinnagpal@besttrails.org"
            className="border border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
