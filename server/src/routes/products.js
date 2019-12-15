const { Router } = require('express');
const router = Router();
const authPassport = require('../controllers/passport');

import { postProduct, getProducts, getProduct, deleteProduct, putProduct } from '../controllers/products.controller'

// api/products
router.get('/',  getProducts);
router.post('/',  postProduct);

// api/products/:productID
router.get('/:id',  getProduct);
router.delete('/:id',  deleteProduct);
router.put('/:id', /*authPassport.isAuthenticated,*/ putProduct);

module.exports = router;