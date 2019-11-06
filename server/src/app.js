import express, { json } from 'express';
const morgan = require('morgan');

//imports
const productsRoutes = require('./routes/products');

//initialization
const app = express();

//middleware
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/products', productsRoutes);

module.exports = app;