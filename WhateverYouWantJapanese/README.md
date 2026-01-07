# Whatever You Want - Food Truck Website

This is a complete website for the Whatever You Want food truck, including menu, cart system, and order management.

## 🚀 Quick Start - Put It Online

**Want to share a link with the owner?** See `DEPLOYMENT_GUIDE.md` for easy hosting options (Netlify, GitHub Pages, etc.)

**Just want to view it locally?** Double-click `index.html` - that's it!

## Project Structure

```
WhateverYouWantJapanese/
├── index.html          # Home page
├── about.html          # About page
├── menu.html           # Menu page
├── services.html       # Services page
├── photos.html         # Photos page
├── css/
│   └── style.css       # Main stylesheet
├── images/             # Image assets directory
└── README.md           # This file
```

## Running Locally

### ⭐ EASIEST WAY (For Non-Tech Users)

**Just double-click `index.html`** - It will open in your web browser!

That's it! No setup needed. The website works completely offline.

### Option 1: Simple HTTP Server (Python)

If you have Python installed:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to: `http://localhost:8000`

### Option 2: Live Server (VS Code Extension)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Node.js HTTP Server

If you have Node.js installed:

```bash
# Install http-server globally
npm install -g http-server

# Run the server
http-server -p 8000
```

Then open your browser and navigate to: `http://localhost:8000`

## Pages

- **Home** (`index.html`) - Features customer reviews and image gallery
- **About** (`about.html`) - Restaurant history and culinary journey
- **Menu** (`menu.html`) - Menu items (placeholder content)
- **Services** (`services.html`) - Services information (placeholder content)
- **Photos** (`photos.html`) - Photo gallery and interior ambiance description

## Image Assets

The following images are referenced in the HTML files and should be placed in the `images/` directory:

- `burrito.jpg` - Burrito with orange sauce
- `dumpling.jpg` - Dumpling with sauce
- `sushi.jpg` - Sushi plate
- `avatar-meg.jpg` - Avatar for Meg Jeager
- `avatar-neha.jpg` - Avatar for Neha singuluri
- `gallery-1.jpg` through `gallery-5.jpg` - Gallery images
- `weeblyte-logo.png` - Weeblyte logo for footer

**Note:** Currently, these are placeholder references. You'll need to either:
1. Download the actual images from the original website
2. Replace them with your own images
3. Use placeholder images for development

## Customization

The website uses an orange color scheme (#FF6600) as the primary brand color. You can modify the colors in `css/style.css` by changing the `#FF6600` values throughout the file.

## Business Information

- **Name:** Whatever You Want
- **Address:** 2463 W Sunshine St, Springfield, MO 65807, United States
- **Phone:** +1 417 631 2503

## Next Steps for Revamping

1. Replace placeholder images with actual restaurant photos
2. Add complete menu items to the menu page
3. Add detailed services information
4. Update content as needed
5. Enhance styling and add animations
6. Add contact form or reservation system
7. Optimize for mobile devices
8. Add SEO meta tags

