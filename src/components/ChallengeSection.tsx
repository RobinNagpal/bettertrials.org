export default function ChallengeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">The Challenge</h2>
          <p className="text-xl text-muted max-w-4xl mx-auto">
            Hospitals or sites play the most critical role when it comes to clinical trials. They have to act in the best interest of all - the patient, the
            institution, and the sponsor who is conducting the research.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-accent p-8 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Contract Setup Complexity</h3>
            <p className="text-muted">
              Reviewing budgets and agreements across multiple hospitals can take months, slowing down the entire trial initiation process.
            </p>
          </div>

          <div className="bg-accent p-8 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Patient Recruitment Challenges</h3>
            <p className="text-muted">
              Doctors may not always have the right tools to quickly match patients to active trials, leading to recruitment failures.
            </p>
          </div>

          <div className="bg-accent p-8 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Administrative Burden</h3>
            <p className="text-muted">Staff often rely on manual processes, emails, or spreadsheets to track trial progress, creating inefficiencies.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-foreground font-medium">
            That’s why BetterTrails focuses on giving hospitals and research units better tools so they can handle trials more efficiently without disrupting
            patient care.
          </p>
        </div>
      </div>
    </section>
  );
}
