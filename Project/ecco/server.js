const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

// Shopify API
app.get('/api/shopify-products', async (req, res) => {
    const shopifyAPIKey = 'YOUR_SHOPIFY_API_KEY';
    const shopUrl = 'YOUR_SHOP_URL';
    const endpoint = `/admin/api/2023-04/products.json`;

    const url = `https://${shopUrl}${endpoint}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-Shopify-Access-Token': shopifyAPIKey,
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    const products = data.products.map(product => ({
        title: product.title,
        image: product.images[0]?.src,
        price: product.variants[0]?.price
    }));
    res.json(products);
});

// WooCommerce API
app.get('/api/woocommerce-products', async (req, res) => {
    const wooConsumerKey = 'YOUR_WOOCOMMERCE_CONSUMER_KEY';
    const wooConsumerSecret = 'YOUR_WOOCOMMERCE_CONSUMER_SECRET';
    const wooUrl = 'YOUR_WOOCOMMERCE_URL';

    const url = `${wooUrl}/wp-json/wc/v3/products?consumer_key=${wooConsumerKey}&consumer_secret=${wooConsumerSecret}`;
    const response = await fetch(url);
    const data = await response.json();
    const products = data.map(product => ({
        title: product.name,
        image: product.images[0]?.src,
        price: product.price
    }));
    res.json(products);
});

// Amazon API (use Amazon Product Advertising API)
app.get('/api/amazon-products', async (req, res) => {
    // Replace with actual Amazon Product Advertising API integration
    res.json([
        { title: 'Amazon Echo', image: 'amazon-echo.jpg', price: '99.99' }
    ]);
});

// eBay API (use eBay Buy API)
app.get('/api/ebay-products', async (req, res) => {
    // Replace with actual eBay API integration
    res.json([
        { title: 'PlayStation 5', image: 'ps5.jpg', price: '499.99' }
    ]);
});

// Alibaba API (use Alibaba API)
app.get('/api/alibaba-products', async (req, res) => {
    // Replace with actual Alibaba API integration
    res.json([
        { title: 'Xiaomi Phone', image: 'xiaomi.jpg', price: '299.99' }
    ]);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
