# Hanumd Portfolio

Minimalist Web3 community contributor portfolio.

## Structure

```
hanumd/
├── index.html              # Main page (Home)
├── about.html              # About me
├── projects.html           # Projects list
├── contact.html            # Contact page
│
├── assets/                 # Static assets
│   ├── images/             # Images (profile, project screenshots, etc.)
│   │   ├── profile.jpg
│   │   ├── project-1.png
│   │   ├── project-2.png
│   │   ├── project-3.png
│   │   ├── project-4.png
│   │   └── project-5.png
│   ├── icons/              # Icons/favicon
│   │   └── favicon.ico
│   └── fonts/              # Custom fonts (if using @font-face)
│       └── poppins.woff2
│
├── css/
│   ├── style.css           # Main styles
│   ├── responsive.css      # Media queries
│   └── variables.css       # CSS variables
│
├── js/
│   ├── main.js             # Main script
│   └── navbar.js           # Navbar script
│
└── README.md               # This file
```

## How to Run

```bash
cd hanumd
python3 -m http.server 12345
```

Then visit `http://localhost:12345` in your browser.

## Verification

```bash
for p in "" index.html about.html projects.html contact.html css/style.css js/main.js assets/images/profile.jpg; do
  echo "$(curl -s -o /dev/null -w '%{http_code}' http://localhost:12345/$p)  /$p"
done
```

All lines must show `200`.
