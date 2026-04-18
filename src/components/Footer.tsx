import Link from "next/link";
import { LogoIcon } from "./Logo";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link href="/" className="logo">
              <LogoIcon />
              <span>Hublytix</span>
            </Link>
            <p className="foot-about">
              Automated health monitoring for your HubSpot portal. Keep your CRM at peak performance.
            </p>
            <div className="foot-email">hello@hublytix.ai</div>
          </div>

          <div className="foot-col">
            <h5>Product</h5>
            <ul>
              <li><a href="/#features">Features</a></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><a href="/#how-it-works">How It Works</a></li>
              <li><a href="https://ecosystem.hubspot.com/marketplace/apps" target="_blank" rel="noopener">HubSpot Marketplace</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Resources</h5>
            <ul>
              <li><Link href="/blog">Blog</Link></li>
              <li><a href="/#features">Audit Checklist</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API Reference</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="mailto:hello@hublytix.ai">Contact</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Legal</h5>
            <ul>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Hublytix LLP. All rights reserved. Built in Chennai, India 🇮🇳</span>
          <div className="links">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="mailto:hello@hublytix.ai">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
