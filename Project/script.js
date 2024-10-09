// Hero Slider Animation (automatically handled by CSS animation)

/* Example: Add any custom interactive feature such as menu toggle for mobile */
document.addEventListener('DOMContentLoaded', function() {
    const productsGrid = document.getElementById('products-grid');

    // Placeholder function to render products
    function renderProducts(products) {
        productsGrid.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
                <button class="buy-now">Buy Now</button>
            `;
            productsGrid.appendChild(productDiv);
        });
    }

    // Shopify API integration example (using a backend proxy)
    async function loadShopifyProducts() {
        const response = await fetch('/api/shopify-products');
        const products = await response.json();
        renderProducts(products);
    }

    // WooCommerce API integration example (using a backend proxy)
    async function loadWooCommerceProducts() {
        const response = await fetch('/api/woocommerce-products');
        const products = await response.json();
        renderProducts(products);
    }

    // Amazon API integration example (using a backend proxy)
    async function loadAmazonProducts() {
        const response = await fetch('/api/amazon-products');
        const products = await response.json();
        renderProducts(products);
    }

    // eBay API integration example (using a backend proxy)
    async function loadEbayProducts() {
        const response = await fetch('/api/ebay-products');
        const products = await response.json();
        renderProducts(products);
    }

    // Alibaba API integration example (using a backend proxy)
    async function loadAlibabaProducts() {
        const response = await fetch('/api/alibaba-products');
        const products = await response.json();
        renderProducts(products);
    }

    // Button click event listeners
    document.getElementById('loadShopify').addEventListener('click', loadShopifyProducts);
    document.getElementById('loadWooCommerce').addEventListener('click', loadWooCommerceProducts);
    document.getElementById('loadAmazon').addEventListener('click', loadAmazonProducts);
    document.getElementById('loadEbay').addEventListener('click', loadEbayProducts);
    document.getElementById('loadAlibaba').addEventListener('click', loadAlibabaProducts);
});

