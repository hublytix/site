"use client";
import { useState } from "react";
import Link from "next/link";
import { LogoIcon } from "./Logo";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-surface-950/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <LogoIcon size={32} className="group-hover:scale-105 transition-transform" />
          <span className="text-white font-bold text-lg tracking-tight">Hublytix</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">{l.label}</Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Link href="#cta" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">Log in</Link>
          <Link href="#cta" className="btn-primary !py-2.5 !px-5 !text-sm !rounded-lg">
            Start Free Scan
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-400 p-2" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/5 bg-surface-950/95 backdrop-blur-xl px-6 py-4 space-y-3">
          {links.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-slate-400 hover:text-white py-2">{l.label}</Link>)}
          <Link href="#cta" className="btn-primary !text-sm mt-3 w-full justify-center">Start Free Scan</Link>
        </div>
      )}
    </nav>
  );
}
