const express = require('express');
const path = require('path');
const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

// Hardcoded list of products
const products = [
    { id: 1, name: 'Product A', price: 10.00, description: 'Description for Product A' },
    { id: 2, name: 'Product B', price: 20.00, description: 'Description for Product B' },
    { id: 3, name: 'Product C', price: 30.00, description: 'Description for Product C' }
];

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Static shopping cart object
const shoppingCart = {};

// GET route to display the shop page
app.get('/', (req, res) => {
    res.render('shop', { products });
});

// GET route to display the product details
app.get('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.render('product', { product });
    } else {
        res.status(404).send('Product not found');
    }
});

// POST route to add items to the cart
app.post('/addToCart', (req, res) => {
    const { name, price } = req.body;
    if (shoppingCart[name]) {
        shoppingCart[name].quantity += 1;
        shoppingCart[name].price += parseFloat(price);
    } else {
        shoppingCart[name] = {
            name,
            price: parseFloat(price),
            quantity: 1
        };
    }
    res.redirect('/cart');
});

// GET route to display the shopping cart
app.get('/cart', (req, res) => {
    res.render('shoppingcart', { cart: shoppingCart });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
