import express, { json } from 'express';
const morgan = require('morgan');

//imports
const productsRoutes = require('./routes/products');
const ingredientsRoutes = require('./routes/ingredients');

//initialization
const app = express();

//middleware
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/products', productsRoutes);
app.use('/api/ingredients', ingredientsRoutes);

module.exports = app;