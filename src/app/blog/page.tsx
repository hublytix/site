import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Hublytix",
  description: "HubSpot tips, portal audit guides, and CRM health best practices from the Hublytix team.",
};

const posts = [
  { title: "HubSpot Portal Audit Checklist 2026", desc: "A comprehensive guide to auditing every corner of your HubSpot portal — from data quality to workflow health to user security.", tag: "Guide", date: "Coming Soon", slug: "#" },
  { title: "How to Fix HubSpot Duplicate Contacts", desc: "Step-by-step walkthrough for identifying and merging duplicate contacts, plus how to prevent them from accumulating again.", tag: "Tutorial", date: "Coming Soon", slug: "#" },
  { title: "HubSpot Email Deliverability: SPF, DKIM, DMARC Explained", desc: "Your complete guide to email authentication. Why your emails land in spam and exactly how to fix it.", tag: "Technical", date: "Coming Soon", slug: "#" },
];

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-20 grid-bg">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl font-extrabold text-white mb-4">Hublytix Blog</h1>
            <p className="text-slate-400 text-lg">HubSpot tips, audit guides, and CRM health best practices</p>
          </div>
          <div className="space-y-6 stagger">
            {posts.map(p => (
              <Link key={p.title} href={p.slug} className="card-glow p-8 block group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-full">{p.tag}</span>
                  <span className="text-xs text-slate-600">{p.date}</span>
                </div>
                <h2 className="font-display text-xl font-bold text-white group-hover:text-brand-400 transition-colors mb-2">{p.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-600 text-sm">More posts coming soon. Subscribe to get notified.</p>
            <div className="flex gap-3 justify-center mt-4 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-lg bg-surface-800 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-500/50" />
              <button className="btn-primary !py-3 !px-6 !text-sm">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
