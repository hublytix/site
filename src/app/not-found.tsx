import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-950">
      <div className="text-center px-6">
        <div className="font-display text-8xl font-extrabold text-white/5 mb-4">404</div>
        <h1 className="font-display text-2xl font-bold text-white mb-2 -mt-12">Page not found</h1>
        <p className="text-slate-500 text-sm mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="btn-primary">Go Home</Link>
      </div>
    </div>
  );
}
