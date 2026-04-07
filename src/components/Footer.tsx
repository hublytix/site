import Link from "next/link";
import { LogoIcon } from "./Logo";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "HubSpot Marketplace", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "HubSpot Audit Checklist", href: "/blog" },
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "mailto:hello@hublytix.ai" },
    { label: "Partners", href: "#" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-950">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoIcon size={32} />
              <span className="text-white font-bold text-lg">Hublytix</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">Automated health monitoring for your HubSpot portal. Keep your CRM at peak performance.</p>
            <p className="text-xs text-slate-600">hello@hublytix.ai</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-slate-300 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l.label}><Link href={l.href} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} Hublytix LLP. All rights reserved. Built in Chennai, India 🇮🇳</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Terms</Link>
            <Link href="/privacy" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Privacy</Link>
            <Link href="mailto:hello@hublytix.ai" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
