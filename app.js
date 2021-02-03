const express = require('express');
const Product = require('./models/productSchema');

const app = express();

app.use((req, res, next) => {
  req.requestTime = new Date().toString();
  console.log(req.headers);
  next();
});

//Get List Of Products
app.get('/api/v1/getProducts', async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    status: 'succes',
    results: products.length,
    data: {
      products,
    },
  });
});

app.get('/api/v1/product/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({
      status: 'fail',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});

app.post('api/v1/createProduct', async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      product: newProduct,
    },
  });
});

module.exports = app;
