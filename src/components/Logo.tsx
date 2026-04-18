// Animated Hublytix logo.
// Visual animations (shield pulse, letter bob, badge bob, spark twinkle, check-draw, hue breathe)
// are all driven by CSS classes in globals.css (.lm-bg, .lm-shield, .lm-h, .lm-badge, .lm-spark, .lm-check, .lm-badge-ring).
// The outer `.logo-mark` wrapper handles the hover rotate/glow.

export function LogoIcon() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lmG" x1="0" y1="0" x2="120" y2="120">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>
        <rect className="lm-bg" width="120" height="120" rx="28" fill="url(#lmG)" />
        <path
          className="lm-shield"
          d="M60 18 L95 36 L95 65 Q95 90 60 106 Q25 90 25 65 L25 36 Z"
          fill="rgba(255,255,255,0.12)"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
        />
        <text
          className="lm-h"
          x="60"
          y="78"
          textAnchor="middle"
          fill="white"
          fontFamily="Inter, Arial, sans-serif"
          fontSize="44"
          fontWeight="800"
        >
          H
        </text>
        <circle className="lm-spark s1" cx="30" cy="30" r="2" fill="white" />
        <circle className="lm-spark s2" cx="95" cy="28" r="1.5" fill="white" />
        <circle className="lm-spark s3" cx="40" cy="95" r="1.8" fill="white" />
        <g className="lm-badge">
          <circle cx="88" cy="88" r="16" fill="#fff" />
          <path
            className="lm-check"
            d="M81 88 L86 93 L96 83"
            stroke="#16a34a"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
        <circle className="lm-badge-ring" cx="88" cy="88" r="16" />
      </svg>
    </span>
  );
}

// Backwards-compatible wordmark — used on pricing/terms/privacy/blog sub-pages.
export function LogoWordmark() {
  return (
    <span className="logo">
      <LogoIcon />
      <span>Hublytix</span>
    </span>
  );
}
