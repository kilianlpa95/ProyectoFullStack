const { Router } = require('express');
const router = Router();

import { postProduct } from '../controllers/products.controller'

// api/products
router.post('/', postProduct);

module.exports = router;