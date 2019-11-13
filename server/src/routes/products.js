const { Router } = require('express');
const router = Router();
const authPassport = require('../controllers/passport');

import { postProduct, getProducts, getProduct, deleteProduct, putProduct } from '../controllers/products.controller'

// api/products
router.get('/', authPassport.isAuthenticated, getProducts);
router.post('/', authPassport.isAuthenticated, postProduct);

// api/products/:productID
router.get('/:id', authPassport.isAuthenticated, getProduct);
router.delete('/:id', authPassport.isAuthenticated, deleteProduct);
router.put('/:id', authPassport.isAuthenticated, putProduct);

module.exports = router;