const { Router } = require('express');
const router = Router();

import { postUser, getUsers, getUser, deleteUser, putUser } from '../controllers/users.controller'

// api/products
router.get('/', getUsers);
router.post('/', postUser);

// api/products/:productID
router.get('/:user_name', getUser);
router.delete('/:user_name', deleteUser);
router.put('/:user_name', putUser);

module.exports = router;