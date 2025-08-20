export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Solution
          </h2>
          <p className="text-xl text-muted max-w-4xl mx-auto">
            We focus on the biggest reasons for delays in clinical trials and
            provide hospitals and research teams with practical tools to speed
            things up.
          </p>
        </div>

        <div className="space-y-16">
          {/* Solution 1 */}
          <div className="bg-white rounded-xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">
                    1
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    Faster Contract Onboarding
                  </h3>
                </div>
                <ul className="space-y-4 text-muted">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>Centralized Dashboard:</strong> A hospital-wide
                      platform where research units, doctors, and administrators
                      can view and track all incoming trial requests.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>Transparency Across Teams:</strong> Everyone
                      involved in the approval process sees real-time updates,
                      reducing delays caused by scattered communication.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>Smart Notifications:</strong> Automatic reminders
                      to ensure nothing gets stuck waiting for review.
                    </span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                  <p className="text-secondary font-semibold">
                    Result: Reduce trial contract approval timelines from months
                    to weeks.
                  </p>
                </div>
              </div>
              <div className="bg-accent p-6 rounded-lg">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="bg-white rounded-xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">
                    2
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    Smarter Patient Recruitment
                  </h3>
                </div>
                <p className="text-muted mb-6">
                  Recruitment doesn't have to depend on doctor memory or chance.
                  Our platform provides hospitals and doctors with:
                </p>
                <ul className="space-y-4 text-muted">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>Pre-Screening Support:</strong> Before
                      appointments, doctors can run eligibility checks locally.
                      The system flags which patients might match current trial
                      criteria.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong>Recruitment Visibility:</strong> A secure view
                      helps hospitals see where most patients are being
                      excluded, providing clear insights to CROs and sponsors.
                    </span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                  <p className="text-secondary font-semibold">
                    Result: Doctors focus on the right patients, CROs get
                    clearer insights, and sponsors avoid recruitment failures.
                  </p>
                </div>
              </div>
              <div className="lg:order-1">
                <div className="bg-accent p-6 rounded-lg">
                  <div className="w-full h-64 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-24 h-24 text-secondary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution 3 */}
          <div className="bg-white rounded-xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-4">
                    3
                  </span>
                  <h3 className="text-2xl font-bold text-foreground">
                    Simplified Data Entry
                  </h3>
                </div>
                <ul className="space-y-4 text-muted">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      Today, CROs often send staff to manually copy
                      patient/contract information from hospital systems into
                      their own forms which can be an error-prone and
                      time-consuming process.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      We envision tools that allow hospital staff to
                      automatically transfer selected fields from their system
                      into CRO forms without direct system integration.
                    </span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                  <p className="text-secondary font-semibold">
                    Result: Hospitals avoid repetitive data entry work while
                    ensuring accuracy in trial documentation.
                  </p>
                </div>
              </div>
              <div className="bg-accent p-6 rounded-lg">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
