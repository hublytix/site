"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ═══════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════
const CATS = [
  { icon: "🔍", score: 72, g: "y" as const, name: "Data Quality", desc: "Duplicates, missing fields, orphaned properties, naming inconsistencies", issues: 4 },
  { icon: "⚡", score: 58, g: "r" as const, name: "Workflow Health", desc: "Broken automations, zero-enrollment flows, circular triggers", issues: 3 },
  { icon: "📧", score: 45, g: "r" as const, name: "Email Deliverability", desc: "Bounce rates, SPF/DKIM/DMARC, spam complaints, image ratios", issues: 3 },
  { icon: "📊", score: 68, g: "y" as const, name: "Pipeline & Deals", desc: "Stale deals, missing associations, stage-skipping detection", issues: 2 },
  { icon: "🔗", score: 81, g: "g" as const, name: "Integrations", desc: "Sync errors, disconnected apps, field mapping issues", issues: 2 },
  { icon: "🛡️", score: 91, g: "g" as const, name: "Users & Security", desc: "2FA enforcement, inactive admins, overprivileged access", issues: 1 },
];
const CAT_COLORS = { g: "#10b981", y: "#f59e0b", r: "#ef4444" };

const FAQS = [
  { q: "Is my HubSpot data safe?", a: "Absolutely. Hublytix uses read-only OAuth access. We never store your CRM data — we only analyze metadata and configurations to produce your health score." },
  { q: "How is this different from a manual audit?", a: "Manual audits are one-time snapshots that cost $2,000-$6,000 and take weeks. Hublytix runs continuously, catching issues as they happen with daily or weekly scans." },
  { q: "What if I'm on HubSpot's free CRM?", a: "Hublytix works with all HubSpot tiers — Free, Starter, Professional, and Enterprise. Some checks are only relevant to paid tiers, but core data quality and workflow checks work on all." },
  { q: "Can I try before I pay?", a: "Yes! Connect your portal and get your health score for free. You'll see your overall score and category breakdown. Upgrade to see detailed issues with fix instructions." },
  { q: "Do you support Salesforce or other CRMs?", a: "Currently Hublytix is HubSpot-only. We're exploring Salesforce and Zoho CRM support for 2027 based on customer demand." },
];

// ═══════════════════════════════════════════════════════════════════════════
// HOOKS
// ═══════════════════════════════════════════════════════════════════════════

// Generic "reveal on enter" hook — adds `.in` class via the observer pattern
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
}

// Count-up animation (cubic ease-out)
function useCountUp(target: number, trigger: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, trigger, duration]);
  return value;
}

// ═══════════════════════════════════════════════════════════════════════════
// FIXED OVERLAYS (scroll progress + cursor spotlight)
// ═══════════════════════════════════════════════════════════════════════════

function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const range = h.scrollHeight - h.clientHeight;
      setPct(range > 0 ? (h.scrollTop / range) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${pct}%` }} />;
}

function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);
  return <div ref={ref} className="spotlight" />;
}

// ═══════════════════════════════════════════════════════════════════════════
// HERO DASHBOARD — score ring + count-ups + parallax tilt
// ═══════════════════════════════════════════════════════════════════════════

function HeroDash() {
  const dashRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const [heroNum, setHeroNum] = useState(0);

  // Start animation after hero fade-in (matches HTML's 900ms delay)
  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 900);
    return () => clearTimeout(t);
  }, []);

  // Count 0 → 62 (1-per-frame, matches original)
  useEffect(() => {
    if (!animate) return;
    let cur = 0;
    let raf = 0;
    const tick = () => {
      cur += 1;
      if (cur <= 62) {
        setHeroNum(cur);
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [animate]);

  // Count-ups for the 3 dash stats (17, 3, 14) — fires at same time as score
  const totalIssues = useCountUp(17, animate);
  const critical = useCountUp(3, animate);
  const fixed = useCountUp(14, animate);

  // Parallax tilt on mouse move
  useEffect(() => {
    const el = dashRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>(".dash-card");
    if (!card) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${-4 + x * 6}deg) rotateX(${4 - y * 6}deg)`;
    };
    const onLeave = () => {
      card.style.transform = "rotateY(-4deg) rotateX(4deg)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const circ = 2 * Math.PI * 58;
  const targetOffset = circ - (62 / 100) * circ;

  return (
    <div className="dash" ref={dashRef}>
      <div className="float-card f1">
        <div className="icon">⚠️</div>
        <div><strong>3 Critical</strong><small>Fix ASAP</small></div>
      </div>
      <div className="float-card f2">
        <div className="icon">✓</div>
        <div><strong>14 Fixed</strong><small>This week</small></div>
      </div>
      <div className="float-card f3">
        <div className="icon">📊</div>
        <div><strong>Live scan</strong><small>Every 24h</small></div>
      </div>

      <div className="dash-card">
        <div className="dash-head">
          <div className="title">Portal Health Monitor</div>
          <div className="menu"><span /><span /><span /></div>
        </div>

        <div className="score-ring-wrap">
          <div className="score-ring">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <defs>
                <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
              <circle className="bg-ring" cx="70" cy="70" r="58" />
              <circle
                className="fg-ring"
                cx="70"
                cy="70"
                r="58"
                strokeDasharray={circ}
                strokeDashoffset={animate ? targetOffset : circ}
              />
            </svg>
            <div className="label">
              <b>{heroNum}</b>
              <span>/ 100</span>
            </div>
          </div>
          <div className="score-text">
            <div className="status">⚠ Needs Attention</div>
            <h3>17 Issues Detected</h3>
            <p>Across 6 diagnostic categories in your portal</p>
          </div>
        </div>

        <div className="dash-stats">
          <div className="dash-stat"><div className="n">{totalIssues}</div><div className="k">Total Issues</div></div>
          <div className="dash-stat crit"><div className="n">{critical}</div><div className="k">Critical</div></div>
          <div className="dash-stat ok"><div className="n">{fixed}</div><div className="k">Fixed</div></div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PROBLEM CARD
// ═══════════════════════════════════════════════════════════════════════════

function ProbCard({ emoji, count, prefix, suffix, head, desc }: { emoji: string; count: number; prefix?: string; suffix?: string; head: string; desc: string }) {
  const [ref, inView] = useReveal<HTMLDivElement>();
  const val = useCountUp(count, inView);
  return (
    <div ref={ref} className={`prob-card${inView ? " in" : ""}`}>
      <div className="prob-emoji">{emoji}</div>
      <div className="prob-num">{prefix ?? ""}{val}{suffix ?? ""}</div>
      <div className="prob-head">{head}</div>
      <div className="prob-desc">{desc}</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY CARD
// ═══════════════════════════════════════════════════════════════════════════

function CatCard({ cat, delay }: { cat: typeof CATS[number]; delay: number }) {
  const [ref, inView] = useReveal<HTMLDivElement>();
  const color = CAT_COLORS[cat.g];
  const circ = 2 * Math.PI * 22;
  const offset = circ - (cat.score / 100) * circ;

  // Matching the HTML: ring fills 200ms after card enters
  const [ringFilled, setRingFilled] = useState(false);
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setRingFilled(true), 200 + delay);
      return () => clearTimeout(t);
    }
  }, [inView, delay]);

  return (
    <div
      ref={ref}
      className={`cat-card${inView ? " in" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="cat-top">
        <div className="cat-icon">{cat.icon}</div>
        <div className="cat-score-ring">
          <svg width="56" height="56" viewBox="0 0 56 56">
            <circle className="bg" cx="28" cy="28" r="22" />
            <circle
              className="fg"
              cx="28"
              cy="28"
              r="22"
              stroke={color}
              strokeDasharray={circ}
              strokeDashoffset={ringFilled ? offset : circ}
            />
          </svg>
          <div className="num" style={{ color }}>{cat.score}</div>
        </div>
      </div>
      <h3>{cat.name}</h3>
      <p>{cat.desc}</p>
      <div className="cat-foot">
        <span className="cat-issues">{cat.issues} issues found</span>
        <span className="arrow">→</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// STEP / PLAN / TESTI wrappers (add `.in` on reveal)
// ═══════════════════════════════════════════════════════════════════════════

function RevealWrap({ children, className, delay = 0 }: { children: React.ReactNode; className: string; delay?: number }) {
  const [ref, inView] = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`${className}${inView ? " in" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

// Testimonial with count-up meter
function Testi({ initials, name, role, quote, before, after, delta }: { initials: string; name: string; role: string; quote: string; before: number; after: number; delta: number }) {
  const [ref, inView] = useReveal<HTMLDivElement>();
  const b = useCountUp(before, inView);
  const a = useCountUp(after, inView);
  return (
    <div ref={ref} className={`testi${inView ? " in" : ""}`}>
      <div className="qm">&ldquo;</div>
      <div className="testi-person">
        <div className="avatar">{initials}</div>
        <div>
          <div className="n">{name}</div>
          <div className="r">{role}</div>
        </div>
      </div>
      <q>{quote}</q>
      <div className="testi-meter">
        <div className="meter-val before"><b>{b}</b><span>Before</span></div>
        <span className="meter-arrow">→</span>
        <div className="meter-val after"><b>{a}</b><span>After</span></div>
        <div className="meter-delta">+{delta} pts</div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// FAQ ITEM
// ═══════════════════════════════════════════════════════════════════════════

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className={`faq-item${open ? " open" : ""}`} onClick={() => setOpen((o) => !o)}>
      <div className="faq-q">
        <h4>{q}</h4>
        <div className="faq-plus" />
      </div>
      <div className="faq-a">{a}</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION HEADER (reveal on enter)
// ═══════════════════════════════════════════════════════════════════════════

function SectionHead({ tag, h, sub }: { tag: string; h: string; sub?: string }) {
  return (
    <div className="section-head-center">
      <div className="section-tag"><span className="dot" />{tag}</div>
      <h2 className="section-h">{h}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Spotlight />
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid-bg" />
        <div className="wrap">
          <div>
            <div className="hero-pill">
              <span className="badge"><span className="dot" />Live</span>
              Now monitoring 50+ health checks
            </div>
            <h1>
              Your{" "}
              <span className="hero-underline">
                HubSpot portal&apos;s
                <svg viewBox="0 0 300 14">
                  <path d="M2 8 Q75 2, 150 8 T 298 6" />
                </svg>
              </span>
              <br />
              <span className="gradient">intelligence engine</span>
            </h1>
            <p className="lede">
              Automated health monitoring for HubSpot. 50+ diagnostic checks across 6 categories. A single score that tells you exactly what&apos;s broken and how to fix it.
            </p>
            <div className="hero-actions">
              <a href="#cta" className="btn btn-primary">Start Free Scan <span className="arrow">→</span></a>
              <a href="#how-it-works" className="btn btn-ghost">See How It Works</a>
            </div>
            <div className="hero-meta">
              <span><span className="check">✓</span>Free score — no credit card</span>
              <span><span className="check">✓</span>Read-only access</span>
              <span><span className="check">✓</span>2-min setup</span>
            </div>
          </div>

          <HeroDash />
        </div>

        <div className="wrap">
          <div className="logos">
            <div className="label">Trusted by HubSpot teams worldwide</div>
            <div className="logos-row">
              <div className="logo-item">⬡ TechFlow</div>
              <div className="logo-item">◆ DataScale</div>
              <div className="logo-item">◇ Apexly</div>
              <div className="logo-item">⬢ Northwind</div>
              <div className="logo-item">◈ Orbital</div>
              <div className="logo-item">⬟ Lumen</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="problem">
        <div className="wrap">
          <SectionHead
            tag="The silent cost"
            h="Your HubSpot portal is quietly breaking"
            sub="Every new campaign, every imported list, every process change leaves artifacts. Over time, your CRM becomes a liability instead of an asset."
          />
          <div className="problem-grid">
            <ProbCard emoji="💸" count={10} prefix="$" suffix="K+" head="wasted annually" desc="on duplicate contacts inflating your HubSpot tier" />
            <ProbCard emoji="📭" count={23} suffix="%" head="emails to spam" desc="from misconfigured SPF, DKIM, or DMARC records" />
            <ProbCard emoji="⏳" count={34} suffix="%" head="pipeline is stale" desc="deals stuck in the same stage for 60+ days" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="wrap">
          <SectionHead
            tag="6 diagnostic categories"
            h="50+ checks. 6 categories. One score."
            sub="Every corner of your HubSpot portal, continuously monitored."
          />
          <div className="cats-grid">
            {CATS.map((c, i) => <CatCard key={c.name} cat={c} delay={i * 100} />)}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="problem">
        <div className="wrap">
          <SectionHead tag="Simple process" h="Three steps to a healthier portal" />
          <div className="steps">
            <RevealWrap className="step">
              <div className="step-num">01</div>
              <h3>Connect your HubSpot</h3>
              <p>One-click OAuth connection. No passwords shared, no data stored. Read-only access to scan your portal.</p>
              <div className="step-time">⏱ 10 seconds</div>
            </RevealWrap>
            <RevealWrap className="step" delay={100}>
              <div className="step-num">02</div>
              <h3>Get your health score</h3>
              <p>50+ automated checks run across 6 categories. Your portal gets a 0-100 score with category breakdowns.</p>
              <div className="step-time">⏱ 2 minutes</div>
            </RevealWrap>
            <RevealWrap className="step" delay={200}>
              <div className="step-num">03</div>
              <h3>Fix what matters</h3>
              <p>Prioritized issues with step-by-step fix instructions. Watch your score improve with every fix you make.</p>
              <div className="step-time">⏱ Ongoing</div>
            </RevealWrap>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="pricing">
        <div className="wrap">
          <SectionHead
            tag="Pricing"
            h="Simple, transparent pricing"
            sub="Start free. Upgrade when you see the value."
          />
          <div className="pricing-grid">
            <RevealWrap className="plan">
              <div>
                <h3>Starter</h3>
                <div className="plan-sub">For small HubSpot teams</div>
              </div>
              <div className="price"><span className="p">$49</span><span className="per">/month</span></div>
              <ul>
                <li><span className="check">✓</span>1 HubSpot portal</li>
                <li><span className="check">✓</span>Weekly automated scans</li>
                <li><span className="check">✓</span>Top 10 issues with fixes</li>
                <li><span className="check">✓</span>Email alerts on score drops</li>
                <li><span className="check">✓</span>12-scan score history</li>
              </ul>
              <a href="#cta" className="btn">Start Free Scan</a>
            </RevealWrap>

            <RevealWrap className="plan featured" delay={100}>
              <div>
                <h3>Professional</h3>
                <div className="plan-sub">For serious RevOps teams</div>
              </div>
              <div className="price"><span className="p">$99</span><span className="per">/month</span></div>
              <ul>
                <li><span className="check">✓</span>1 HubSpot portal</li>
                <li><span className="check">✓</span>Daily automated scans</li>
                <li><span className="check">✓</span>All 50+ checks with fixes</li>
                <li><span className="check">✓</span>Email + Slack alerts</li>
                <li><span className="check">✓</span>PDF audit reports</li>
                <li><span className="check">✓</span>Full score history + trends</li>
                <li><span className="check">✓</span>Priority support</li>
              </ul>
              <a href="#cta" className="btn btn-primary">Start Free Scan <span className="arrow">→</span></a>
            </RevealWrap>

            <RevealWrap className="plan" delay={200}>
              <div>
                <h3>Agency</h3>
                <div className="plan-sub">For HubSpot agencies</div>
              </div>
              <div className="price"><span className="p">$249</span><span className="per">/month</span></div>
              <ul>
                <li><span className="check">✓</span>Up to 10 portals</li>
                <li><span className="check">✓</span>Daily automated scans</li>
                <li><span className="check">✓</span>Everything in Professional</li>
                <li><span className="check">✓</span>White-label PDF reports</li>
                <li><span className="check">✓</span>Multi-portal dashboard</li>
                <li><span className="check">✓</span>Client-facing read-only view</li>
                <li><span className="check">✓</span>20% partner revenue share</li>
              </ul>
              <a href="mailto:hello@hublytix.ai" className="btn">Contact Sales</a>
            </RevealWrap>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="wrap">
          <SectionHead tag="Social proof" h="Trusted by HubSpot teams" />
          <div className="testi-grid">
            <Testi
              initials="SC"
              name="Sarah Chen"
              role="RevOps Lead at TechFlow"
              quote="We discovered 2,800 duplicate contacts and 3 broken workflows that had been silently failing for months. Hublytix paid for itself in the first week."
              before={47}
              after={82}
              delta={35}
            />
            <Testi
              initials="MW"
              name="Marcus Webb"
              role="HubSpot Admin at DataScale"
              quote="The daily scans caught a DMARC misconfiguration that was sending 15% of our emails to spam. We would never have found that manually."
              before={54}
              after={89}
              delta={35}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="problem">
        <div className="wrap">
          <SectionHead tag="FAQ" h="Frequently asked questions" />
          <div className="faq-list">
            {FAQS.map((f, i) => <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="cta">
        <div className="wrap">
          <div className="cta-card">
            <div className="cta-orb o1" />
            <div className="cta-orb o2" />
            <div className="cta-orb o3" />
            <h2>Ready to see your portal&apos;s health score?</h2>
            <p>Connect your HubSpot in 10 seconds. Get your score in 2 minutes. No credit card required.</p>
            <div className="hero-actions">
              <a href="#" className="btn btn-primary">Start Free Scan <span className="arrow">→</span></a>
              <a href="#how-it-works" className="btn btn-ghost">Learn more</a>
            </div>
            <p className="cta-foot">Free forever plan available. Upgrade anytime.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
