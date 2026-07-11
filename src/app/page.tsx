// Hublytix homepage — Claude Design v2 (glass), integrated into the site repo.
//
// The markup and page-scoped CSS live in home-content.ts. The design is
// self-contained: it brings its own sticky nav and footer (matching the glass
// aesthetic), so this page does not use the shared Navbar/Footer components —
// those remain in use on /blog, /pricing, /privacy, /terms.
//
// The whole site is forced to dark (see layout.tsx), which is the native
// context for this translucent-glass design.

import { HOME_CSS, HOME_HTML } from "./home-content";

export default function HomePage() {
  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: HOME_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: HOME_HTML }} />
    </main>
  );
}
