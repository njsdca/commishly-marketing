import DemoForm from './components/DemoForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      {/* Navigation - Matching app header */}
      <header className="border-b py-5 shadow-sm bg-teal">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              aria-hidden="true"
              className="transition-all duration-150 ease-out group-hover:scale-110 group-hover:rotate-2 group-hover:-translate-y-0.5"
            >
              <circle cx="16" cy="16" r="14" fill="#1EB5A9" />
              <path
                d="M24 12 A8 8 0 1 0 24 20 L20 20 A4 4 0 1 1 20 12 Z"
                fill="#FFF9EE"
              />
              <circle cx="24" cy="16" r="2" fill="#FFD95E" />
            </svg>
            <h1 className="text-2xl font-extrabold tracking-tight text-white transition-all duration-200">
              Commishly
              <span className="inline-block text-yellow transition-all duration-200 group-hover:scale-110">
                .
              </span>
            </h1>
          </div>
          <nav className="flex items-center gap-6">
            <a
              href="https://app.getcommishly.com/sign-in"
              className="text-sm font-medium transition-colors text-white/80 hover:text-white"
            >
              Login
            </a>
            <a
              href="#demo"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-teal hover:bg-white/90 transition-colors"
            >
              Book a Demo
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Matching app style */}
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <section className="text-center py-12">
          <h2 className="text-5xl font-extrabold mb-4 text-charcoal">
            Commission Management for
            <br />
            <span className="text-teal">CPG Brands & Their Broker Partners</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-charcoal opacity-80">
            Stop wrestling with spreadsheets. Commishly centralizes broker assignments, automates commission calculations, and generates clean statements—purpose-built for CPG brands and the broker networks that represent them.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#demo"
              className="w-full sm:w-auto rounded-lg bg-teal px-8 py-4 text-base font-semibold text-white hover:bg-teal/90 transition-colors"
            >
              Book a Demo →
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto rounded-lg border-2 border-mint bg-white px-8 py-4 text-base font-semibold text-charcoal hover:bg-mint/20 transition-colors"
            >
              Learn More
            </a>
          </div>
          <p className="mt-6 text-sm text-charcoal/50">
            See how Commishly streamlines commissions for CPG brands and broker partners
          </p>
        </section>

        {/* Features Section - Card-based like app */}
        <section id="features" className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl border border-mint shadow-sm bg-white hover:shadow-lg transition-all group">
            <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-all group-hover:scale-110 bg-teal/10">
              <svg
                className="h-8 w-8 text-teal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-charcoal">Configure</h3>
            <p className="text-gray-600 mb-6">
              Set the rules once, scale everywhere. Define broker relationships, map customers, and choose the commission structure that fits each partnership—retainers, % of net revenue, and more. Control trade rates, commission percentages, and direct vs. indirect logic without touching a spreadsheet.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-mint text-charcoal">Broker & customer assignments</span>
              <span className="px-2 py-1 rounded bg-mint text-charcoal">Commission structures & rates</span>
              <span className="px-2 py-1 rounded bg-mint text-charcoal">Trade rate settings</span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl border border-mint shadow-sm bg-white hover:shadow-lg transition-all group">
            <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-all group-hover:scale-110 bg-lavender/10">
              <svg
                className="h-8 w-8 text-lavender"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-charcoal">Load & Calculate</h3>
            <p className="text-gray-600 mb-6">
              Import transactions and let Commishly do the math. Upload CSVs (and add integrations later), auto-map columns, validate in seconds, and apply your rules consistently. We calculate gross → net → commission with guardrails for unassigned customers, missing prices, and data quality flags.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-lavender/30 text-charcoal">CSV upload with smart mapping</span>
              <span className="px-2 py-1 rounded bg-lavender/30 text-charcoal">Validation & error surfacing</span>
              <span className="px-2 py-1 rounded bg-lavender/30 text-charcoal">Automatic calculations</span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-2xl border border-mint shadow-sm bg-white hover:shadow-lg transition-all group">
            <div className="w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-all group-hover:scale-110 bg-coral/10">
              <svg
                className="h-8 w-8 text-coral"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-charcoal">Generate Statements</h3>
            <p className="text-gray-600 mb-6">
              Turn results into statements your brokers actually understand. Review totals, drill into line items, and finalize with confidence. Export for finance, share for approval, and keep an audit trail—all in one place.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-coral/30 text-charcoal">Period filters & drilldowns</span>
              <span className="px-2 py-1 rounded bg-coral/30 text-charcoal">Broker-ready statements</span>
              <span className="px-2 py-1 rounded bg-coral/30 text-charcoal">Export for payment ops</span>
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section id="demo">
          <div className="rounded-2xl border border-mint shadow-sm overflow-hidden bg-white">
            <div className="p-8 border-b border-mint bg-gradient-to-br from-teal/5 to-white">
              <h2 className="text-3xl font-bold text-charcoal mb-2 text-center">
                Book a Demo
              </h2>
              <p className="text-center text-charcoal/70">
                See how Commishly streamlines commissions for CPG brands and broker partners
              </p>
            </div>
            <DemoForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-mint bg-white px-6 py-12 mt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
              <circle cx="16" cy="16" r="14" fill="#1EB5A9" />
              <path
                d="M24 12 A8 8 0 1 0 24 20 L20 20 A4 4 0 1 1 20 12 Z"
                fill="#FFF9EE"
              />
              <circle cx="24" cy="16" r="2" fill="#FFD95E" />
            </svg>
            <span className="text-xl font-bold text-charcoal">
              Commishly<span className="text-yellow">.</span>
            </span>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-3 text-sm font-semibold text-charcoal">Product</h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>
                  <a href="#features" className="hover:text-teal transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.getcommishly.com/sign-up"
                    className="hover:text-teal transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-charcoal">Company</h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>
                  <a href="#" className="hover:text-teal transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold text-charcoal">Legal</h3>
              <ul className="space-y-2 text-sm text-charcoal/70">
                <li>
                  <a href="#" className="hover:text-teal transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-mint pt-8 text-center text-sm text-charcoal/50">
            © {new Date().getFullYear()} Commishly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
