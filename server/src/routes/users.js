const { Router } = require('express');
const router = Router();

import { postUser, getUsers, getUser, deleteUser, putUser, postLogin } from '../controllers/users.controller'

// api/users
router.get('/', getUsers);
router.post('/', postUser);

// api/users/:userID
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', putUser);

// api/users/login
router.post('/login', postLogin);

module.exports = router;