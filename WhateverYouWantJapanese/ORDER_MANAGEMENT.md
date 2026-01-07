# Order Management Guide

## How Orders Work

### For Customers:
1. Customers add items to cart from the menu page
2. They customize items (add-ons, drinks, etc.)
3. At checkout, they provide:
   - Name and phone (required)
   - Email (optional, for promos/news)
   - Pickup time (required, so you can prioritize)
   - Special instructions
   - Payment method (Pay in Person or Pay Online - coming soon)

### For Food Truck Owner:

#### Accessing Orders:
Orders are stored in the browser's localStorage. To view orders:

1. **Option 1: Browser Console (Quick Check)**
   - Open the website
   - Press F12 (or right-click → Inspect)
   - Go to Console tab
   - Type: `JSON.parse(localStorage.getItem('orders'))`
   - This shows all orders

2. **Option 2: Create Admin Page (Recommended)**
   - We can create a simple admin page at `/admin.html` (password protected)
   - Shows all orders in a table format
   - Allows marking orders as completed
   - Can export orders to CSV

3. **Option 3: Email Notifications**
   - Currently uses mailto: links (opens email client)
   - **To set up proper email notifications:**
     - Replace `owner@whateveryouwant.com` in `js/cart.js` with your actual email
     - For automatic emails, you'll need:
       - A backend service (like Formspree, EmailJS, or your own server)
       - Or use a service like Zapier to forward emails

#### Order Information Stored:
- Order ID (unique identifier)
- Customer name, phone, email
- Pickup time
- All items with customizations
- Special instructions
- Payment method
- Total amount
- Order date/time

## Recommended Setup:

### Short Term (Current Setup):
- Orders stored in localStorage
- Email notifications via mailto: (opens email client)
- Owner checks browser console or creates admin page

### Long Term (Production):
1. **Backend Integration:**
   - Set up a simple backend (Node.js, PHP, Python)
   - Store orders in a database
   - Send automatic email/SMS notifications

2. **Payment Processing:**
   - Integrate Stripe or Square for online payments
   - Keep "Pay in Person" option for cash customers

3. **Order Management System:**
   - Admin dashboard to view/manage orders
   - Mark orders as: Pending → Preparing → Ready → Completed
   - Send SMS notifications to customers when order is ready

4. **SMS Notifications:**
   - Use Twilio or similar service
   - Send order confirmation
   - Send "Your order is ready" notification

## Next Steps:

Would you like me to:
1. Create an admin page to view orders?
2. Set up email notifications (requires your email service)?
3. Add online payment integration?
4. Add SMS notifications?

