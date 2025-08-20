export default function SecuritySection() {
  return (
    <section id="security" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Security & Compliance</h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            We know trust is everything in healthcare. That’s why our platform is built around the highest security and compliance standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">No Patient Data Stored</h3>
            <p className="text-muted">All patient checks are done locally on hospital systems. We never store or access sensitive patient information.</p>
          </div>

          <div className="bg-white p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Audit Trails & Transparency</h3>
            <p className="text-muted">Every action is logged for accountability. Complete transparency in all trial management processes.</p>
          </div>

          <div className="bg-white p-8 rounded-lg text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">HIPAA & PHIPA Conscious</h3>
            <p className="text-muted">Designed with US and Canadian privacy regulations in mind. Full compliance with healthcare data protection standards.</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-secondary/10 rounded-lg p-8 inline-block">
            <p className="text-xl font-semibold text-secondary mb-2">Our Guiding Principle:</p>
            <p className="text-lg text-foreground italic">Hospitals stay in full control of their data and processes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
