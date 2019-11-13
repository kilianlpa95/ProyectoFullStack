const { Router } = require('express');
const router = Router();
const authPassport = require('../controllers/passport');

import { postIngredient, 
            getIngredients, 
            getIngredient, 
            deleteIngredient, 
            putIngredient } from '../controllers/ingredients.controller'

// api/ingredients
router.get('/', authPassport.isAuthenticated, getIngredients);
router.post('/', authPassport.isAuthenticated, postIngredient);

// api/ingredients/:ingredientID
router.get('/:id', authPassport.isAuthenticated, getIngredient);
router.delete('/:id', authPassport.isAuthenticated, deleteIngredient);
router.put('/:id', authPassport.isAuthenticated, putIngredient);

module.exports = router;