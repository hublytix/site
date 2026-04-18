"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoIcon } from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Theme init — default to light, honor stored preference, fall back to system
  useEffect(() => {
    let theme: "light" | "dark" = "light";
    try {
      const stored = localStorage.getItem("hublytix-theme");
      if (stored === "dark" || stored === "light") {
        theme = stored;
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
      }
    } catch {}
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  // Scroll shadow state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    const next = cur === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("hublytix-theme", next);
    } catch {}
  };

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
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            <svg className="sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <svg className="moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <a href="#cta" className="ghost">Log in</a>
          <a href="#cta" className="btn btn-primary">
            Start Free Scan <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
