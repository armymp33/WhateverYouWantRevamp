# 📋 Owner's Guide - How to View Orders

## Quick Start

### Step 1: Access the Admin Page
1. Go to your website (any page)
2. Look for the yellow **"OWNER"** button in the top right corner
3. Click it (or go directly to: `yourwebsite.com/admin.html`)

### Step 2: Login
- **Password:** `admin123` (you can change this later)
- Type the password and click "Enter"
- You'll stay logged in until you close the browser

### Step 3: View Orders
- All orders appear automatically
- Orders are sorted by pickup time (soonest first)
- The page refreshes every 30 seconds automatically

## Understanding the Page

### Top Stats Bar
Shows you at a glance:
- **Total Orders** - All orders ever placed
- **Pending Orders** - Orders not completed yet
- **Today's Orders** - Orders for today
- **Total Revenue** - Money from all orders

### Order Cards
Each order shows:
- **Order Number** (like ORD-1234567890)
- **Customer Name & Phone** (click phone to call)
- **Pickup Time** (when customer wants to pick up)
- **All Items** with customizations
- **Total Price**
- **Special Instructions** (if any)

### Color Coding
- **Red Border** = Urgent (pickup in less than 2 hours)
- **Gray Border** = Completed order
- **Black Border** = Normal order

### Buttons
- **🔄 Refresh** - Manually update the orders list
- **All/Pending/Today/Completed** - Filter orders
- **Mark as Completed** - Click when order is picked up
- **📞 Call Customer** - Click to call the customer

## Daily Workflow

### Morning
1. Open admin page
2. Click "Today" filter to see today's orders
3. Plan your day based on pickup times

### During Service
1. Check "Pending" orders
2. Look for urgent orders (red border)
3. Prepare orders by pickup time
4. When customer picks up, click "Mark as Completed"

### End of Day
1. Review "Today" orders
2. Make sure all are marked completed
3. Check total revenue for the day

## Tips

- **Urgent Orders**: Orders with red border need attention soon (less than 2 hours)
- **Past Due**: Orders past pickup time show "PAST DUE" in red
- **Auto-Refresh**: Page updates every 30 seconds, but you can click Refresh anytime
- **Calling Customers**: Click the phone number or "Call Customer" button to call
- **Completed Orders**: Stay in the list but are grayed out (you can still see them)

## Changing the Password

1. Open `admin.html` in a text editor
2. Find this line: `const ADMIN_PASSWORD = 'admin123';`
3. Change `'admin123'` to your new password
4. Save the file

## Troubleshooting

**No orders showing?**
- Make sure customers are placing orders through the menu page
- Check if orders exist: Press F12, go to Console, type: `JSON.parse(localStorage.getItem('orders'))`

**Can't login?**
- Default password is: `admin123`
- Make sure you're typing it correctly (case-sensitive)

**Orders not updating?**
- Click the "🔄 Refresh" button
- Or refresh the page (F5)

## Need Help?

If you need to see all orders in the browser:
1. Press F12 (or right-click → Inspect)
2. Click "Console" tab
3. Type: `JSON.parse(localStorage.getItem('orders'))`
4. Press Enter
5. You'll see all orders in a list

---

**Remember:** The "OWNER" button is visible on every page, so you can check orders anytime!

