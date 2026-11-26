Hublytix marketing site with GA4 (G-16PXYCNETK)

Apply:
  cd ~/Projects/hublytix-site
  unzip -o ~/Downloads/site-ga4.zip
  cp site-live/index.html public/index.html
  mkdir -p public/privacy public/terms
  cp site-live/privacy/index.html public/privacy/
  cp site-live/terms/index.html public/terms/

  git add public/
  git commit -m "Add GA4 (G-16PXYCNETK)"
  git push origin main

Verify: open https://hublytix.ai then check GA4 → Reports → Realtime
