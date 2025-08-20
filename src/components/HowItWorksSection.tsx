export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">How It Works</h2>
          <p className="text-xl text-muted">Simple 3-step flow to transform your clinical trial process</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Trial Request Submitted</h3>
            <p className="text-muted">CROs/Sponsors send trial details to the hospital through our secure platform.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Dashboard Tracking</h3>
            <p className="text-muted">Hospital research teams manage approvals, budgets, and contracts in one centralized place.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Recruitment & Data Support</h3>
            <p className="text-muted">Doctors get pre-screening help, hospitals see recruitment feasibility, and staff save time on data entry.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
