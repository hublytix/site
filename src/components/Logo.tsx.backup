export function LogoIcon({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="120" height="120" rx="28" fill="url(#shieldGrad)" />
      <path d="M60 18 L95 36 L95 65 Q95 90 60 106 Q25 90 25 65 L25 36 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
      <text x="60" y="72" textAnchor="middle" fill="white" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="800">H</text>
      <circle cx="88" cy="88" r="16" fill="#fff" />
      <path d="M81 88 L86 93 L96 83" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="120" y2="120">
          <stop stopColor="#22C55E" />
          <stop offset="1" stopColor="#16A34A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function LogoWordmark({ iconSize = 32, className = "" }: { iconSize?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoIcon size={iconSize} />
      <span className="text-white font-bold text-lg tracking-tight">Hublytix</span>
    </div>
  );
}
