const { Router } = require('express');
const router = Router();
const authPassport = require('../controllers/passport');

import { postIngredient, 
            getIngredients, 
            getIngredient, 
            deleteIngredient, 
            putIngredient } from '../controllers/ingredients.controller'

// api/ingredients
router.get('/', getIngredients);
router.post('/', postIngredient);

// api/ingredients/:ingredientID
router.get('/:id', getIngredient);
router.delete('/:id', deleteIngredient);
router.put('/:id', putIngredient);

module.exports = router;