import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service — Hublytix" };

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-3xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: April 2026</p>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-slate-400 leading-relaxed">
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using Hublytix (&ldquo;the Service&rdquo;), operated by Hublytix LLP (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), a company based in Chennai, Tamil Nadu, India, you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.</p>
            </div>
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">2. Description of Service</h2>
              <p>Hublytix provides automated health monitoring for HubSpot portals. The Service connects to your HubSpot account via OAuth 2.0 with read-only permissions, runs diagnostic checks, and provides a health score with recommendations. Hublytix does not modify, delete, or write any data to your HubSpot portal.</p>
            </div>
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">3. Account and Access</h2>
              <p>You must authorize Hublytix via HubSpot OAuth to use the Service. You are responsible for maintaining the security of your HubSpot account. You must have authorization from your organization to connect your HubSpot portal to third-party services.</p>
            </div>
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">4. Data Usage</h2>
              <p>Hublytix accesses your HubSpot portal metadata (property definitions, workflow configurations, user settings, aggregate statistics) to perform health checks. We do not store personally identifiable information from your CRM contacts. Scan results and health scores are stored to provide historical trending. See our Privacy Policy for details.</p>
            </div>
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">5. Billing and Subscriptions</h2>
              <p>Paid plans are billed monthly via Stripe. You may upgrade, downgrade, or cancel at any time through the billing dashboard. Cancellations take effect at the end of the current billing period. Refunds are handled on a case-by-case basis within the first 14 days of a new subscription.</p>
            </div>
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">6. Limitations</h2>
              <p>The Service is provided &ldquo;as is&rdquo; without warranty of any kind. Hublytix is a diagnostic tool and does not guarantee specific outcomes. Recommendations are suggestions and should be reviewed before implementation. We are not responsible for any changes you make to your HubSpot portal based on our recommendations.</p>
            </div>
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">7. Contact</h2>
              <p>For questions about these terms, contact us at <a href="mailto:hello@hublytix.ai" className="text-brand-400 hover:text-brand-300">hello@hublytix.ai</a>.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
