import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Hublytix",
  description: "Simple, transparent pricing for HubSpot portal health monitoring. Start free, upgrade when you see the value.",
};

const plans = [
  { name: "Free", price: 0, desc: "See your score", features: ["1 HubSpot portal", "Overall health score (0-100)", "Category score breakdown", "Manual scan trigger", "Community support"], excluded: ["Detailed issue descriptions", "Fix instructions", "Scheduled scans", "PDF reports", "Alerts"], cta: "Start Free", popular: false },
  { name: "Starter", price: 49, desc: "Fix your portal", features: ["1 HubSpot portal", "Weekly automated scans", "Top 10 issues with fix instructions", "Email alerts on score drops", "12-scan score history", "Email support"], excluded: ["Slack alerts", "PDF reports", "Full issue list"], cta: "Start Free Scan", popular: false },
  { name: "Professional", price: 99, desc: "Master your CRM", features: ["1 HubSpot portal", "Daily automated scans", "All 50+ checks with fix instructions", "Email + Slack alerts", "PDF audit reports", "Full score history + trends", "Priority support"], excluded: [], cta: "Start Free Scan", popular: true },
  { name: "Agency", price: 249, desc: "Scale across clients", features: ["Up to 10 HubSpot portals", "Daily automated scans", "Everything in Professional", "White-label PDF reports", "Multi-portal overview dashboard", "Client-facing read-only view", "20% partner revenue share", "Dedicated account manager"], excluded: [], cta: "Contact Sales", popular: false },
];

const faq = [
  { q: "Can I switch plans anytime?", a: "Yes. Upgrade or downgrade instantly from your billing dashboard. Changes take effect immediately. If you downgrade mid-cycle, you'll receive a prorated credit." },
  { q: "Is there a free trial for paid plans?", a: "The Free plan lets you see your health score forever — no time limit. When you're ready for detailed issues and fixes, upgrade to Starter or Professional." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, American Express) through Stripe. Annual billing is available at 2 months free." },
  { q: "Do you offer annual billing?", a: "Yes! Pay annually and get 2 months free. Starter: $490/yr (save $98). Professional: $990/yr (save $198). Agency: $2,490/yr (save $498)." },
  { q: "What's included in the Agency partner revenue share?", a: "Refer clients to Hublytix and earn 20% recurring commission on their subscription for as long as they're a customer. We provide a tracking dashboard and monthly payouts." },
];

export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-20 relative grid-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mb-4">Simple, transparent pricing</h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Start with a free health score. Upgrade when you see the value. No surprises, no hidden fees.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
            {plans.map(p => (
              <div key={p.name} className={`card-glow p-7 flex flex-col ${p.popular ? 'border-brand-500/30 ring-1 ring-brand-500/20' : ''}`}>
                {p.popular && <div className="popular-badge self-start mb-3">Most Popular</div>}
                <h3 className="font-display text-lg font-bold text-white">{p.name}</h3>
                <p className="text-slate-500 text-xs mb-4">{p.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  {p.price === 0 ? (
                    <span className="font-display text-3xl font-extrabold text-white">Free</span>
                  ) : (
                    <><span className="font-display text-3xl font-extrabold text-white">${p.price}</span><span className="text-slate-500 text-sm">/mo</span></>
                  )}
                </div>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-slate-300">
                      <svg className="w-3.5 h-3.5 text-brand-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                  {p.excluded.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-slate-600">
                      <svg className="w-3.5 h-3.5 text-slate-700 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="#" className={p.popular ? 'btn-primary w-full justify-center !text-sm' : 'btn-secondary w-full justify-center !text-sm'}>{p.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2xl font-bold text-white text-center mb-12">Pricing FAQ</h2>
          <div className="space-y-4">
            {faq.map(f => (
              <details key={f.q} className="group card-glow">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="text-white font-medium text-sm">{f.q}</span>
                  <svg className="w-5 h-5 text-slate-500 group-open:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </summary>
                <div className="px-5 pb-5 -mt-1"><p className="text-slate-400 text-sm leading-relaxed">{f.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
