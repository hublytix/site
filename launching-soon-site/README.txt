Hublytix — Launching Soon overlay (with app logo)

Apply:
  cd ~/Projects/hublytix-site
  unzip -o ~/Downloads/launching-soon-site.zip
  cp launching-soon-site/index.html public/index.html
  mkdir -p public/assets
  cp launching-soon-site/assets/favicon-blue-512.png public/assets/

  git add public/index.html public/assets/favicon-blue-512.png
  git commit -m "Launching soon overlay with app logo"
  git push origin main
