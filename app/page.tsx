export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal text-lg font-bold text-white">
                C
              </div>
              <span className="text-xl font-bold text-charcoal">
                Commishly<span className="text-yellow">.</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://app.getcommishly.com/sign-in"
                className="text-sm font-medium text-charcoal hover:text-teal transition-colors"
              >
                Login
              </a>
              <a
                href="https://app.getcommishly.com/sign-up"
                className="rounded-lg bg-teal px-4 py-2 text-sm font-medium text-white hover:bg-teal/90 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-charcoal md:text-6xl lg:text-7xl">
            Commission Management
            <br />
            <span className="text-teal">Made Simple</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-charcoal/70 md:text-xl">
            Stop wrestling with spreadsheets. Automate your broker commission tracking,
            calculation, and payments. Built specifically for food & beverage brands.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://app.getcommishly.com/sign-up"
              className="w-full rounded-lg bg-teal px-8 py-4 text-base font-semibold text-white hover:bg-teal/90 transition-colors sm:w-auto"
            >
              Start Free Trial →
            </a>
            <a
              href="#features"
              className="w-full rounded-lg border-2 border-charcoal/20 bg-white px-8 py-4 text-base font-semibold text-charcoal hover:border-teal transition-colors sm:w-auto"
            >
              Learn More
            </a>
          </div>
          <p className="mt-6 text-sm text-charcoal/50">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-charcoal">
              Everything You Need to Manage Commissions
            </h2>
            <p className="text-lg text-charcoal/70">
              From transaction import to broker payments, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                <svg
                  className="h-6 w-6 text-teal"
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
              <h3 className="mb-2 text-xl font-bold text-charcoal">Easy Import</h3>
              <p className="text-charcoal/70">
                Upload transactions from CSV, NetSuite, or other data sources. Smart column
                mapping detects your data automatically.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                <svg
                  className="h-6 w-6 text-teal"
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
              <h3 className="mb-2 text-xl font-bold text-charcoal">Auto-Calculate</h3>
              <p className="text-charcoal/70">
                Define commission structures once. We handle all the math: trade rates,
                commission percentages, retainers, and more.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 transition-shadow hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                <svg
                  className="h-6 w-6 text-teal"
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
              <h3 className="mb-2 text-xl font-bold text-charcoal">Clear Statements</h3>
              <p className="text-charcoal/70">
                Generate professional statements for your brokers. Export, review, and send
                with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-teal to-teal/80 p-12 text-center text-white shadow-xl">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to Simplify Your Commissions?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Join food & beverage brands who&apos;ve ditched their spreadsheets.
          </p>
          <a
            href="https://app.getcommishly.com/sign-up"
            className="inline-block rounded-lg bg-white px-8 py-4 text-base font-semibold text-teal hover:bg-gray-50 transition-colors"
          >
            Start Your Free Trial →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal text-lg font-bold text-white">
              C
            </div>
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
                  <a href="https://app.getcommishly.com/sign-up" className="hover:text-teal transition-colors">
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
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-charcoal/50">
            © {new Date().getFullYear()} Commishly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
