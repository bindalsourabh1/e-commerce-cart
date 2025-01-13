const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const products = [
    { name: 'Product 1', price: 200 },
    { name: 'Product 2', price: 500 },
    { name: 'Product 3', price: 1200 },
    { name: 'Product 4', price: 3000 },
    { name: 'Product 5', price: 6000 },
];

Product.insertMany(products)
    .then(() => {
        console.log("Products added");
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
