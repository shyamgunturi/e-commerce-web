// cart.js
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');

const laptops = [
    { id: 1, name: 'ThinkPad X1 Carbon', price: 13995, image: 'https://p1-ofp.static.pub/ShareResource/sasia/subseries/product-image/IdeaPad-Slim-5i-12th-Gen-40.64cms-Intel-i5.jpg', description: 'Lightweight and durable, perfect for professionals.' },
    { id: 2, name: 'IdeaPad 3', price: 69944, image: 'https://p1-ofp.static.pub/ShareResource/sasia/subseries/product-image/IdeaPad-Slim-3i-12th-Gen-39.62cms-Intel-i5.jpg', description: 'Affordable and versatile for everyday use.' },
    { id: 3, name: 'Legion 5 Pro', price: 15994, image: 'https://p1-ofp.static.pub//fes/cms/2023/06/08/t2y9bc86e6bjrrm5a9qu2go1d3x9pw139172.png', description: 'High-performance gaming laptop with cutting-edge graphics.' },
    { id: 4, name: 'Yoga 7i', price: 119954, image: 'https://p3-ofp.static.pub//fes/cms/2024/02/13/jk8n4yscxrxtllkjme7upw7qqvg55r832585.png', description: '2-in-1 laptop with a flexible hinge and high-resolution display.' },
    { id: 5, name: 'ThinkPad T14s', price: 13959, image: 'https://m.media-amazon.com/images/I/71MuvuEjyAL._AC_UL480_FMwebp_QL65_.jpg', description: 'Business laptop with robust security features and top-notch performance for professionals.' },
    { id: 6, name: 'IdeaPad Flex 5', price: 849, image: 'https://m.media-amazon.com/images/I/71vm-E3y70L._AC_UL480_FMwebp_QL65_.jpg', description: 'Convertible laptop with a touchscreen and 360-degree hinge, great for both work and entertainment.' },
    { id: 7, name: 'Legion 7i', price: 18999, image: 'https://m.media-amazon.com/images/I/81rSur88g3L._AC_UL480_FMwebp_QL65_.jpg', description: 'Premium gaming laptop with high-refresh-rate display and top-tier graphics for the ultimate gaming experience.' },
    { id: 8, name: 'ThinkPad L14', price: 99499, image: 'https://m.media-amazon.com/images/I/81XI2oO6y1L._AC_UL480_FMwebp_QL65_.jpg', description: 'Affordable business laptop with reliable performance and essential features for everyday tasks.' },
    { id: 9, name: 'Yoga Slim 7i', price: 129519, image: 'https://m.media-amazon.com/images/I/51W7yr0NrIL._AC_UL480_FMwebp_QL65_.jpg', description: 'Sleek and lightweight laptop with high-speed performance and a stylish design for on-the-go professionals.' },
    { id: 10, name: 'Legion 5i Pro', price: 16599, image: 'https://m.media-amazon.com/images/I/81FyIdtMK+L._AC_UL480_FMwebp_QL65_.jpg', description: 'Powerful gaming laptop with advanced cooling and high-end specs for serious gamers.' },
    { id: 11, name: 'ThinkBook 14s', price: 11749, image: 'https://m.media-amazon.com/images/I/81tmCrtiRgL._AC_UL480_FMwebp_QL65_.jpg', description: 'Modern business laptop with a sleek design and performance for productivity and multimedia.' },
    { id: 12, name: 'IdeaPad Gaming 3', price: 74559, image: 'https://m.media-amazon.com/images/I/51H1yPI7-xL._AC_UL480_FMwebp_QL65_.jpg', description: 'Affordable gaming laptop with good performance for casual gaming and multimedia consumption.' },
    { id: 13, name: 'ThinkPad X12 Detachable', price: 15599, image: 'https://m.media-amazon.com/images/I/61fuRbFah0L._AC_UL480_FMwebp_QL65_.jpg', description: '2-in-1 detachable laptop with high-performance specs and a detachable keyboard for flexibility.' },
    { id: 14, name: 'Yoga Pro 9i', price: 15799, image: 'https://m.media-amazon.com/images/I/61RYoF94M5L._AC_UL480_FMwebp_QL65_.jpg', description: 'High-end convertible laptop with premium build quality, performance, and a stunning display.' },
    { id: 15, name: 'Legion 5i', price: 19399, image: 'https://m.media-amazon.com/images/I/81T5jRKDkvL._AC_UL480_FMwebp_QL65_.jpg', description: 'Gaming laptop with a balance of performance and affordability, equipped for both work and play.' },
    { id: 16, name: 'IdeaPad 5 Pro', price: 105499, image: 'https://m.media-amazon.com/images/I/617Ykb5YvLL._AC_UL480_FMwebp_QL65_.jpg', description: 'Versatile laptop with high performance, good for both professional tasks and entertainment.' },
    { id: 17, name: 'ThinkPad X1 Yoga Gen 6', price: 1599, image: 'https://m.media-amazon.com/images/I/61pBGWvM8EL._AC_UL480_FMwebp_QL65_.jpg', description: 'High-end 2-in-1 laptop with a flexible design and top-notch performance for professionals.' },
    { id: 18, name: 'IdeaPad Gaming 7i', price: 14959, image: 'https://m.media-amazon.com/images/I/71Gci5++tFL._AC_UL480_FMwebp_QL65_.jpg', description: 'Powerful gaming laptop with advanced graphics and cooling, designed for serious gamers.' },
    { id: 19, name: 'ThinkBook Plus', price: 154399, image: 'https://m.media-amazon.com/images/I/71mBe9xEEdL._AC_UL960_FMwebp_QL65_.jpg', description: 'Innovative business laptop with an additional e-ink display for enhanced productivity.' },
    { id: 20, name: 'Legion 9i', price: 19199, image: 'https://m.media-amazon.com/images/I/81NsonvJOwL._SX679_.jpg', description: 'Flagship gaming laptop with cutting-edge technology and high-end specifications for the ultimate gaming experience.' },
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>₹${item.price.toLocaleString()}</span>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');

        totalPrice = cart.reduce((total, item) => total + item.price, 0);
        document.getElementById('item-price').innerText = totalPrice.toLocaleString();
        document.getElementById('total').innerText = (totalPrice + 1000).toLocaleString(); // Including delivery charge
    }
}

function addToCart(productId) {
    const product = laptops.find(laptop => laptop.id == productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (!existingItem) {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        updateCart();
        document.body.innerHTML += '<div class="order-placed">Your order has been placed!</div>';
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function applyCoupon() {
    const couponCode = document.getElementById('coupon-code').value;
    let discount = 0;

    if (couponCode === 'SAVE10') {
        discount = 1000;
    }

    document.getElementById('discount').innerText = discount.toLocaleString();
    const itemPrice = parseFloat(document.getElementById('item-price').innerText.replace(/,/g, ''));
    document.getElementById('total').innerText = (itemPrice + 1000 - discount).toLocaleString();
}

window.onload = function() {
    if (productId) {
        addToCart(productId);
    } else {
        updateCart();
    }
};

// cart.js
function addToCart(productId) {
    const product = laptops.find(laptop => laptop.id == productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (!existingItem) {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        updateCart();
        showOrderPlacedAnimation();
    }
}

function showOrderPlacedAnimation() {
    const body = document.body;
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order-placed';
    orderDiv.innerText = 'Your order has been placed!';
    body.appendChild(orderDiv);
    
    // Remove the animation element after it's done
    setTimeout(() => {
        body.removeChild(orderDiv);
    }, 3000); // Duration should match the CSS animation duration
}

