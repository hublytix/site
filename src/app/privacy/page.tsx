import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy — Hublytix" };

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-10">Last updated: April 2026</p>
          <div className="space-y-6 text-slate-400 text-sm leading-relaxed">
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">1. Who We Are</h2>
              <p>Hublytix LLP (&ldquo;Hublytix&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a HubSpot portal health monitoring service operated from Chennai, Tamil Nadu, India. Contact: hello@hublytix.ai</p>
            </div>
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">2. Data We Collect</h2>
              <p className="mb-2"><strong className="text-slate-200">Account data:</strong> Your email address and name (from HubSpot OAuth). Used for authentication and communication.</p>
              <p className="mb-2"><strong className="text-slate-200">Portal metadata:</strong> Property definitions, workflow configurations, integration settings, user roles, and aggregate statistics (counts, rates). This is analyzed to produce your health score. We do NOT access or store individual contact records, email content, or deal values.</p>
              <p className="mb-2"><strong className="text-slate-200">Scan results:</strong> Your health scores, category scores, and identified issues are stored to provide historical trending and alerts.</p>
              <p><strong className="text-slate-200">Payment data:</strong> Processed entirely by Stripe. We do not store credit card numbers.</p>
            </div>
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">3. How We Use Data</h2>
              <p>We use your data to: run health checks on your portal, display your dashboard and scores, send you alerts and reports, improve our diagnostic checks, and communicate with you about your account. We never sell your data to third parties.</p>
            </div>
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">4. Data Storage</h2>
              <p>Data is stored on Supabase (PostgreSQL) hosted in the Asia region. HubSpot OAuth tokens are encrypted at rest. We retain your data for the duration of your account. Upon account deletion, all data is permanently removed within 30 days.</p>
            </div>
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">5. Third-Party Services</h2>
              <p>We use: HubSpot (OAuth and API access), Supabase (database), Stripe (payments), SendGrid (email), Vercel (hosting), PostHog (analytics — privacy-friendly, no personal data tracking). Each service has its own privacy policy.</p>
            </div>
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">6. Your Rights</h2>
              <p>You may: request a copy of your data, request deletion of your account and data, disconnect your HubSpot portal at any time (revoking our access), and opt out of non-essential emails. Contact hello@hublytix.ai for any data requests.</p>
            </div>
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">7. Cookies</h2>
              <p>We use essential cookies for authentication (session management). We use PostHog for privacy-friendly analytics — no personal data is collected. We do not use advertising cookies.</p>
            </div>
            <div>
              <h2 className="text-white font-display font-semibold text-lg mb-3">8. Changes</h2>
              <p>We may update this policy from time to time. Significant changes will be communicated via email. Continued use of the Service after changes constitutes acceptance.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
