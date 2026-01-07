# How to View the Website

## Quick Start - Easiest Way

### Option 1: Double-Click Method (Simplest)
1. Go to the `WhateverYouWantJapanese` folder
2. Find `index.html`
3. **Double-click** `index.html`
4. It will open in your web browser!

### Option 2: Drag and Drop
1. Open your web browser (Chrome, Firefox, Edge, etc.)
2. Go to the `WhateverYouWantJapanese` folder
3. **Drag** `index.html` into the browser window
4. The website will load!

## Viewing Different Pages

Once the website is open, you can:
- Click the navigation buttons (Home, About, Menu, Service, Photo)
- Or directly open any page:
  - `index.html` = Home page
  - `about.html` = About page
  - `menu.html` = Menu page (with cart!)
  - `services.html` = Services page
  - `photos.html` = Photos page
  - `admin.html` = Admin/Order Management page

## Testing the Cart System

1. Open `menu.html`
2. Click "Add to Cart" on any menu item
3. Customize the item (add extras, choose drink, etc.)
4. Click "Add to Cart" in the popup
5. Click the shopping cart icon (🛒) in the top right
6. View your cart and proceed to checkout
7. Fill out the checkout form
8. Submit the order

## Testing the Admin Page

1. Open `admin.html` (or click "OWNER" button on any page)
2. Enter password: `admin123`
3. You'll see all orders that were placed
4. Try the filter buttons: Pending, Completed, Today, All
5. Click "Mark as Completed" on an order
6. Click phone numbers to call customers

## Important Notes

- **All pages work offline** - No internet needed!
- **Orders are saved in the browser** - If you clear browser data, orders will be lost
- **Cart works across pages** - Add items on menu page, view cart from any page
- **Admin page shows all orders** - Orders from all customers appear here

## Troubleshooting

**Page looks broken?**
- Make sure all files are in the same folder
- Don't move files around
- Try refreshing the page (F5)

**Cart not working?**
- Make sure `js/cart.js` file exists
- Check browser console for errors (F12 → Console tab)

**Admin page not showing orders?**
- Make sure you've placed at least one test order
- Check if orders exist: Press F12, go to Console, type: `JSON.parse(localStorage.getItem('orders'))`

## For Production (When Ready to Go Live)

When you're ready to put this online:
1. Upload all files to a web hosting service
2. Make sure all files stay in the same folder structure
3. Share the website URL with customers

---

**That's it!** Just double-click `index.html` to get started! 🚀

