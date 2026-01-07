// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentItem = null;

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCart();
});

// Open customization modal
function openCustomizationModal(itemName, price, category) {
    currentItem = {
        name: itemName,
        basePrice: parseFloat(price),
        category: category,
        customizations: [],
        drink: '',
        quantity: 1
    };
    
    document.getElementById('modalItemName').textContent = itemName;
    document.getElementById('modalItemPrice').textContent = `$${price.toFixed(2)}`;
    document.getElementById('itemQuantity').value = 1;
    document.getElementById('drinkSelect').value = '';
    document.getElementById('sodaSelection').style.display = 'none';
    document.getElementById('sodaTypeSelect').value = 'pepsi';
    
    // Reset checkboxes
    document.querySelectorAll('input[name="customization"]').forEach(cb => cb.checked = false);
    
    updateModalTotal();
    document.getElementById('customizationModal').style.display = 'block';
}

// Handle drink selection change
function handleDrinkChange() {
    const drinkSelect = document.getElementById('drinkSelect');
    const sodaSelection = document.getElementById('sodaSelection');
    
    if (drinkSelect.value === 'soda') {
        sodaSelection.style.display = 'block';
    } else {
        sodaSelection.style.display = 'none';
    }
    updateModalTotal();
}

// Close customization modal
function closeCustomizationModal() {
    document.getElementById('customizationModal').style.display = 'none';
    currentItem = null;
}

// Increase quantity
function increaseQuantity() {
    const qtyInput = document.getElementById('itemQuantity');
    let qty = parseInt(qtyInput.value);
    if (qty < 10) {
        qtyInput.value = qty + 1;
        if (currentItem) currentItem.quantity = qty + 1;
        updateModalTotal();
    }
}

// Decrease quantity
function decreaseQuantity() {
    const qtyInput = document.getElementById('itemQuantity');
    let qty = parseInt(qtyInput.value);
    if (qty > 1) {
        qtyInput.value = qty - 1;
        if (currentItem) currentItem.quantity = qty - 1;
        updateModalTotal();
    }
}

// Update modal total
function updateModalTotal() {
    if (!currentItem) return;
    
    let total = currentItem.basePrice * currentItem.quantity;
    
    // Add customization costs
    const checkedOptions = document.querySelectorAll('input[name="customization"]:checked');
    checkedOptions.forEach(option => {
        if (option.value === 'extra-cheese') total += 0.50 * currentItem.quantity;
        if (option.value === 'extra-sauce') total += 0.25 * currentItem.quantity;
    });
    
    // Add drink cost
    const drinkSelect = document.getElementById('drinkSelect');
    const drinkPrices = {
        'soda': 2.00,
        'water': 1.00,
        'juice': 2.50,
        'iced-tea': 2.00,
        'lemonade': 2.50
    };
    if (drinkSelect.value && drinkPrices[drinkSelect.value]) {
        total += drinkPrices[drinkSelect.value] * currentItem.quantity;
    }
    
    // Store soda type if soda is selected
    if (drinkSelect.value === 'soda') {
        currentItem.sodaType = document.getElementById('sodaTypeSelect').value;
    } else {
        currentItem.sodaType = null;
    }
    
    document.getElementById('modalTotal').textContent = total.toFixed(2);
    
    // Update current item
    currentItem.customizations = Array.from(checkedOptions).map(cb => cb.value);
    currentItem.drink = drinkSelect.value;
    currentItem.quantity = parseInt(document.getElementById('itemQuantity').value);
}

// Add event listeners for real-time total updates
document.addEventListener('DOMContentLoaded', () => {
    const customizationInputs = document.querySelectorAll('input[name="customization"]');
    const drinkSelect = document.getElementById('drinkSelect');
    const qtyInput = document.getElementById('itemQuantity');
    
    if (customizationInputs.length > 0) {
        customizationInputs.forEach(input => {
            input.addEventListener('change', updateModalTotal);
        });
    }
    
    if (drinkSelect) {
        drinkSelect.addEventListener('change', () => {
            handleDrinkChange();
            updateModalTotal();
        });
    }
    
    const sodaTypeSelect = document.getElementById('sodaTypeSelect');
    if (sodaTypeSelect) {
        sodaTypeSelect.addEventListener('change', updateModalTotal);
    }
    
    if (qtyInput) {
        qtyInput.addEventListener('change', () => {
            if (currentItem) {
                currentItem.quantity = parseInt(qtyInput.value) || 1;
                updateModalTotal();
            }
        });
    }
});

// Add item to cart
function addItemToCart() {
    if (!currentItem) return;
    
    // Calculate final price
    let itemPrice = currentItem.basePrice;
    const checkedOptions = document.querySelectorAll('input[name="customization"]:checked');
    checkedOptions.forEach(option => {
        if (option.value === 'extra-cheese') itemPrice += 0.50;
        if (option.value === 'extra-sauce') itemPrice += 0.25;
    });
    
    const drinkSelect = document.getElementById('drinkSelect');
    const drinkPrices = {
        'soda': 2.00,
        'water': 1.00,
        'juice': 2.50,
        'iced-tea': 2.00,
        'lemonade': 2.50
    };
    if (drinkSelect.value && drinkPrices[drinkSelect.value]) {
        itemPrice += drinkPrices[drinkSelect.value];
    }
    
    const cartItem = {
        id: Date.now(),
        name: currentItem.name,
        category: currentItem.category,
        price: itemPrice,
        quantity: currentItem.quantity,
        customizations: currentItem.customizations,
        drink: currentItem.drink,
        sodaType: currentItem.sodaType || null
    };
    
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartCount();
    closeCustomizationModal();
    
    // Show success message
    alert(`${currentItem.quantity}x ${currentItem.name} added to cart!`);
}

// Open cart sidebar
function openCart() {
    renderCart();
    document.getElementById('cartSidebar').classList.add('active');
}

// Close cart sidebar
function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = totalItems;
        cartCountEl.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// Render cart items
function renderCart() {
    const cartItemsEl = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
        if (cartTotalEl) cartTotalEl.textContent = '0.00';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        let drinkText = '';
        if (item.drink) {
            if (item.drink === 'soda' && item.sodaType) {
                const sodaNames = {
                    'pepsi': 'Pepsi',
                    'starry': 'Starry',
                    'coke': 'Coke',
                    'sprite': 'Sprite',
                    'dr-pepper': 'Dr. Pepper',
                    'root-beer': 'Root Beer',
                    'mountain-dew': 'Mountain Dew'
                };
                drinkText = `Drink: ${sodaNames[item.sodaType] || 'Soda'}`;
            } else {
                const drinkNames = {
                    'soda': 'Soda',
                    'water': 'Water',
                    'juice': 'Juice',
                    'iced-tea': 'Iced Tea',
                    'lemonade': 'Lemonade'
                };
                drinkText = `Drink: ${drinkNames[item.drink] || item.drink}`;
            }
        }
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    ${item.customizations.length > 0 ? `<p class="cart-customizations">${item.customizations.join(', ')}</p>` : ''}
                    ${drinkText ? `<p class="cart-drink">${drinkText}</p>` : ''}
                    <p class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <button onclick="removeFromCart(${item.id})" class="remove-item-btn">Remove</button>
                </div>
            </div>
        `;
    });
    
    cartItemsEl.innerHTML = html;
    if (cartTotalEl) cartTotalEl.textContent = total.toFixed(2);
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// Start checkout
function startCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    closeCart();
    document.getElementById('checkoutModal').style.display = 'block';
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('checkoutTotal').textContent = total.toFixed(2);
}

// Close checkout modal
function closeCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// Handle checkout form submission
document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(checkoutForm);
            const orderData = {
                orderId: 'ORD-' + Date.now(),
                customerName: checkoutForm.querySelector('input[type="text"]').value,
                customerPhone: checkoutForm.querySelector('input[type="tel"]').value,
                customerEmail: checkoutForm.querySelector('input[type="email"]').value,
                pickupTime: checkoutForm.querySelector('input[type="datetime-local"]').value,
                specialInstructions: document.getElementById('specialInstructions')?.value || '',
                paymentMethod: checkoutForm.querySelector('input[name="paymentMethod"]:checked')?.value || 'in-person',
                items: cart,
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                orderDate: new Date().toISOString()
            };
            
            // Store order in localStorage (for owner to access)
            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(orderData);
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Send order notification email (using mailto link as fallback)
            // In production, this would be sent to a backend API
            const emailSubject = encodeURIComponent(`New Order #${orderData.orderId} - ${orderData.customerName}`);
            const emailBody = encodeURIComponent(generateOrderEmail(orderData));
            const ownerEmail = 'owner@whateveryouwant.com'; // TODO: Replace with actual owner email
            
            // Option 1: Create mailto link (opens email client - works but requires user action)
            // Uncomment the line below if you want mailto notifications
            // window.location.href = `mailto:${ownerEmail}?subject=${emailSubject}&body=${emailBody}`;
            
            // Option 2: For automatic email sending, integrate with:
            // - EmailJS (https://www.emailjs.com/) - Free tier available
            // - Formspree (https://formspree.io/) - Free tier available
            // - Your own backend API
            
            // Option 3: For SMS notifications, integrate with:
            // - Twilio (https://www.twilio.com/) - Paid service
            // - TextLocal (https://www.textlocal.com/) - Paid service
            
            console.log('New Order Received:', orderData);
            console.log('To view all orders, run: JSON.parse(localStorage.getItem("orders"))');
            
            // Show confirmation to customer
            showOrderConfirmation(orderData);
            
            // Clear cart
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            renderCart();
            closeCheckoutModal();
        });
    }
});

// Generate order email body
function generateOrderEmail(orderData) {
    let emailBody = `NEW ORDER RECEIVED\n\n`;
    emailBody += `Order ID: ${orderData.orderId}\n`;
    emailBody += `Customer: ${orderData.customerName}\n`;
    emailBody += `Phone: ${orderData.customerPhone}\n`;
    emailBody += `Email: ${orderData.customerEmail}\n`;
    emailBody += `Pickup Time: ${new Date(orderData.pickupTime).toLocaleString()}\n`;
    emailBody += `Payment Method: ${orderData.paymentMethod === 'in-person' ? 'Pay in Person' : 'Pay Online'}\n\n`;
    
    emailBody += `ORDER ITEMS:\n`;
    emailBody += `----------------------------------------\n`;
    orderData.items.forEach((item, index) => {
        emailBody += `${index + 1}. ${item.name} (${item.category})\n`;
        emailBody += `   Quantity: ${item.quantity}\n`;
        emailBody += `   Price: $${item.price.toFixed(2)} each\n`;
        if (item.customizations && item.customizations.length > 0) {
            emailBody += `   Customizations: ${item.customizations.join(', ')}\n`;
        }
        if (item.drink) {
            if (item.drink === 'soda' && item.sodaType) {
                const sodaNames = {
                    'pepsi': 'Pepsi',
                    'starry': 'Starry',
                    'coke': 'Coke',
                    'sprite': 'Sprite',
                    'dr-pepper': 'Dr. Pepper',
                    'root-beer': 'Root Beer',
                    'mountain-dew': 'Mountain Dew'
                };
                emailBody += `   Drink: ${sodaNames[item.sodaType] || 'Soda'}\n`;
            } else {
                emailBody += `   Drink: ${item.drink}\n`;
            }
        }
        emailBody += `\n`;
    });
    emailBody += `----------------------------------------\n`;
    emailBody += `TOTAL: $${orderData.total.toFixed(2)}\n\n`;
    
    if (orderData.specialInstructions) {
        emailBody += `Special Instructions:\n${orderData.specialInstructions}\n\n`;
    }
    
    emailBody += `Order placed at: ${new Date(orderData.orderDate).toLocaleString()}\n`;
    
    return emailBody;
}

// Show order confirmation
function showOrderConfirmation(orderData) {
    const confirmationHTML = `
        <div class="order-confirmation">
            <h2>✅ Order Confirmed!</h2>
            <p><strong>Order ID:</strong> ${orderData.orderId}</p>
            <p><strong>Pickup Time:</strong> ${new Date(orderData.pickupTime).toLocaleString()}</p>
            <p><strong>Total:</strong> $${orderData.total.toFixed(2)}</p>
            <p><strong>Payment:</strong> ${orderData.paymentMethod === 'in-person' ? 'Pay when you pick up' : 'Paid online'}</p>
            <p>You'll receive a confirmation text/email shortly. See you at the food truck!</p>
            <p><strong>Location:</strong> 2463 W Sunshine St, Springfield, MO 65807</p>
            <button onclick="closeOrderConfirmation()" class="close-confirmation-btn">Close</button>
        </div>
    `;
    
    // Create confirmation modal
    const confirmationModal = document.createElement('div');
    confirmationModal.id = 'orderConfirmation';
    confirmationModal.className = 'modal';
    confirmationModal.style.display = 'block';
    confirmationModal.innerHTML = `
        <div class="modal-content confirmation-content">
            ${confirmationHTML}
        </div>
    `;
    document.body.appendChild(confirmationModal);
}

// Close order confirmation
function closeOrderConfirmation() {
    const confirmationModal = document.getElementById('orderConfirmation');
    if (confirmationModal) {
        confirmationModal.remove();
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    const customizationModal = document.getElementById('customizationModal');
    const checkoutModal = document.getElementById('checkoutModal');
    
    if (event.target === customizationModal) {
        closeCustomizationModal();
    }
    if (event.target === checkoutModal) {
        closeCheckoutModal();
    }
}

