"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoIcon } from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Theme init — default to light, honor stored preference, fall back to system
  useEffect(() => {
    // Site is dark-only (v2 glass design).
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  // Scroll shadow state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <nav className={`top${scrolled ? " scrolled" : ""}`}>
      <div className="wrap">
        <Link href="/" className="logo">
          <LogoIcon />
          <span>Hublytix</span>
        </Link>

        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>

        <div className="nav-cta">
          <a href="#cta" className="ghost">Log in</a>
          <a href="#cta" className="btn btn-primary">
            Start Free Scan <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
