const { Router } = require('express');
const router = Router();

import { postUser, getUsers, getUser, deleteUser, putUser } from '../controllers/products.controller'

// api/products
router.get('/', getUsers);
router.post('/', postUser);

// api/products/:productID
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', putUser);

module.exports = router;