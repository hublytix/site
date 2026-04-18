import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { name: "Data Quality", icon: "🔍", score: 72, issues: 4, desc: "Duplicates, missing fields, orphaned properties, naming inconsistencies", color: "from-blue-500/10 to-blue-600/5", border: "border-blue-500/20", accent: "text-blue-400" },
  { name: "Workflow Health", icon: "⚡", score: 58, issues: 3, desc: "Broken automations, zero-enrollment flows, circular triggers", color: "from-amber-500/10 to-amber-600/5", border: "border-amber-500/20", accent: "text-amber-400" },
  { name: "Email Deliverability", icon: "📧", score: 45, issues: 3, desc: "Bounce rates, SPF/DKIM/DMARC, spam complaints, image ratios", color: "from-red-500/10 to-red-600/5", border: "border-red-500/20", accent: "text-red-400" },
  { name: "Pipeline & Deals", icon: "📊", score: 68, issues: 2, desc: "Stale deals, missing associations, stage-skipping detection", color: "from-purple-500/10 to-purple-600/5", border: "border-purple-500/20", accent: "text-purple-400" },
  { name: "Integrations", icon: "🔗", score: 81, issues: 2, desc: "Sync errors, disconnected apps, field mapping issues", color: "from-teal-500/10 to-teal-600/5", border: "border-teal-500/20", accent: "text-teal-400" },
  { name: "Users & Security", icon: "🛡️", score: 91, issues: 1, desc: "2FA enforcement, inactive admins, overprivileged access", color: "from-green-500/10 to-green-600/5", border: "border-green-500/20", accent: "text-green-400" },
];

const steps = [
  { num: "01", title: "Connect your HubSpot", desc: "One-click OAuth connection. No passwords shared, no data stored. Read-only access to scan your portal.", time: "10 seconds" },
  { num: "02", title: "Get your health score", desc: "50+ automated checks run across 6 categories. Your portal gets a 0-100 score with category breakdowns.", time: "2 minutes" },
  { num: "03", title: "Fix what matters", desc: "Prioritized issues with step-by-step fix instructions. Watch your score improve with every fix you make.", time: "Ongoing" },
];

const plans = [
  { name: "Starter", price: 49, desc: "For small HubSpot teams", features: ["1 HubSpot portal", "Weekly automated scans", "Top 10 issues with fixes", "Email alerts on score drops", "12-scan score history"], cta: "Start Free Scan", popular: false },
  { name: "Professional", price: 99, desc: "For serious RevOps teams", features: ["1 HubSpot portal", "Daily automated scans", "All 50+ checks with fixes", "Email + Slack alerts", "PDF audit reports", "Full score history + trends", "Priority support"], cta: "Start Free Scan", popular: true },
  { name: "Agency", price: 249, desc: "For HubSpot agencies", features: ["Up to 10 portals", "Daily automated scans", "Everything in Professional", "White-label PDF reports", "Multi-portal dashboard", "Client-facing read-only view", "20% partner revenue share"], cta: "Contact Sales", popular: false },
];

const testimonials = [
  { name: "Sarah Chen", role: "RevOps Lead", company: "TechFlow", quote: "We discovered 2,800 duplicate contacts and 3 broken workflows that had been silently failing for months. Hublytix paid for itself in the first week.", score: { before: 47, after: 82 } },
  { name: "Marcus Webb", role: "HubSpot Admin", company: "DataScale", quote: "The daily scans caught a DMARC misconfiguration that was sending 15% of our emails to spam. We would never have found that manually.", score: { before: 54, after: 89 } },
];

const faqs = [
  { q: "Is my HubSpot data safe?", a: "Absolutely. Hublytix uses read-only OAuth access. We never store your CRM data — we only analyze metadata and configurations to produce your health score." },
  { q: "How is this different from a manual audit?", a: "Manual audits are one-time snapshots that cost $2,000-$6,000 and take weeks. Hublytix runs continuously, catching issues as they happen with daily or weekly scans." },
  { q: "What if I'm on HubSpot's free CRM?", a: "Hublytix works with all HubSpot tiers — Free, Starter, Professional, and Enterprise. Some checks are only relevant to paid tiers, but core data quality and workflow checks work on all." },
  { q: "Can I try before I pay?", a: "Yes! Connect your portal and get your health score for free. You'll see your overall score and category breakdown. Upgrade to see detailed issues with fix instructions." },
  { q: "Do you support Salesforce or other CRMs?", a: "Currently Hublytix is HubSpot-only. We're exploring Salesforce and Zoho CRM support for 2027 based on customer demand." },
];

function ScorePreview() {
  const score = 62;
  const radius = 50;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (score / 100) * circ;
  return (
    <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px]">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent rounded-3xl" />
      <div className="absolute inset-4 bg-surface-900/90 backdrop-blur-sm rounded-2xl border border-white/5 p-6 flex flex-col items-center justify-center">
        <svg width="120" height="120" viewBox="0 0 120 120" className="mb-3">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
          <circle cx="60" cy="60" r={radius} fill="none" stroke="url(#scoreGrad)" strokeWidth="8" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={offset}
            transform="rotate(-90 60 60)" className="score-circle" style={{ strokeDashoffset: offset } as any} />
          <defs><linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#F59E0B" /><stop offset="100%" stopColor="#22C55E" /></linearGradient></defs>
          <text x="60" y="56" textAnchor="middle" className="fill-white font-display text-3xl font-bold">{score}</text>
          <text x="60" y="74" textAnchor="middle" className="fill-slate-500 text-xs font-medium">/100</text>
        </svg>
        <span className="text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">Needs Attention</span>
        <div className="mt-4 grid grid-cols-3 gap-2 w-full">
          {[{ l: "Issues", v: "17", c: "text-red-400" }, { l: "Critical", v: "3", c: "text-amber-400" }, { l: "Fixed", v: "14", c: "text-green-400" }].map(s => (
            <div key={s.l} className="text-center">
              <div className={`text-lg font-bold ${s.c}`}>{s.v}</div>
              <div className="text-[10px] text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center pt-16 grid-bg overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] bg-brand-500 -top-40 -left-40 absolute" />
        <div className="glow-orb w-[400px] h-[400px] bg-blue-500 bottom-20 right-10 absolute" />
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              Now monitoring 50+ health checks
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Your HubSpot portal&apos;s
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-300"> intelligence engine</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              Automated health monitoring for HubSpot. 50+ diagnostic checks across 6 categories. A single score that tells you exactly what&apos;s broken and how to fix it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="#cta" className="btn-primary">
                Start Free Scan
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link href="#how-it-works" className="btn-secondary">See How It Works</Link>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-slate-500">
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Free score — no credit card</span>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>Read-only access</span>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-brand-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>2-min setup</span>
            </div>
          </div>
          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="animate-float"><ScorePreview /></div>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Your HubSpot portal is quietly breaking</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Every new campaign, every imported list, every process change leaves artifacts. Over time, your CRM becomes a liability instead of an asset.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {[
              { stat: "$10K+", label: "wasted annually", desc: "on duplicate contacts inflating your HubSpot tier", icon: "💸" },
              { stat: "23%", label: "emails to spam", desc: "from misconfigured SPF, DKIM, or DMARC records", icon: "📭" },
              { stat: "34%", label: "pipeline is stale", desc: "deals stuck in the same stage for 60+ days", icon: "⏳" },
            ].map(s => (
              <div key={s.label} className="card-glow p-8 text-center">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <div className="font-display text-3xl font-bold text-white mb-1">{s.stat}</div>
                <div className="text-brand-400 font-semibold text-sm mb-2">{s.label}</div>
                <p className="text-slate-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-4">6 diagnostic categories</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">50+ checks. 6 categories. One score.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Every corner of your HubSpot portal, continuously monitored.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
            {categories.map(c => (
              <div key={c.name} className={`card-glow p-6 bg-gradient-to-br ${c.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{c.icon}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-2xl font-display font-bold ${c.score >= 80 ? 'text-green-400' : c.score >= 60 ? 'text-amber-400' : 'text-red-400'}`}>{c.score}</span>
                    <span className="text-slate-600 text-sm">/100</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{c.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{c.desc}</p>
                <div className={`text-xs font-semibold ${c.accent}`}>{c.issues} issues found →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how-it-works" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Three steps to a healthier portal</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger">
            {steps.map(s => (
              <div key={s.num} className="relative">
                <div className="font-display text-6xl font-extrabold text-white/5 mb-4">{s.num}</div>
                <h3 className="font-display text-xl font-bold text-white mb-2 -mt-8">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{s.desc}</p>
                <span className="text-xs font-semibold text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-full">{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Simple, transparent pricing</h2>
            <p className="text-slate-400">Start free. Upgrade when you see the value.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger max-w-4xl mx-auto">
            {plans.map(p => (
              <div key={p.name} className={`card-glow p-8 flex flex-col ${p.popular ? 'border-brand-500/30 ring-1 ring-brand-500/20' : ''}`}>
                {p.popular && <div className="popular-badge self-start mb-4">Most Popular</div>}
                <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
                <p className="text-slate-500 text-sm mb-4">{p.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-4xl font-extrabold text-white">${p.price}</span>
                  <span className="text-slate-500 text-sm">/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="#cta" className={p.popular ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}>{p.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="testimonials" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Trusted by HubSpot teams</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 stagger">
            {testimonials.map(t => (
              <div key={t.name} className="card-glow p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white text-sm font-bold">{t.name.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role} at {t.company}</div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="text-center">
                    <div className="text-red-400 font-display font-bold text-lg">{t.score.before}</div>
                    <div className="text-slate-600 text-[10px]">Before</div>
                  </div>
                  <svg className="w-5 h-5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  <div className="text-center">
                    <div className="text-green-400 font-display font-bold text-lg">{t.score.after}</div>
                    <div className="text-slate-600 text-[10px]">After</div>
                  </div>
                  <div className="ml-auto px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20">
                    <span className="text-brand-400 text-xs font-bold">+{t.score.after - t.score.before} pts</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 relative">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-14">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map(f => (
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

      {/* ═══ CTA ═══ */}
      <section id="cta" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent" />
        <div className="glow-orb w-[500px] h-[500px] bg-brand-500 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mb-4">Ready to see your portal&apos;s health score?</h2>
          <p className="text-slate-400 text-lg mb-8">Connect your HubSpot in 10 seconds. Get your score in 2 minutes. No credit card required.</p>
          <Link href="#" className="btn-primary text-lg !px-10 !py-4">
            Start Free Scan
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
          <p className="text-slate-600 text-xs mt-4">Free forever plan available. Upgrade anytime.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
