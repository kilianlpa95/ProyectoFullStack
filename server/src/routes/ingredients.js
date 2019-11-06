const { Router } = require('express');
const router = Router();

import { postIngredient, 
            getIngredients, 
            getIngredient, 
            deleteIngredient, 
            putIngredient } from '../controllers/ingredients.controller'

// api/products
router.get('/', getIngredients);
router.post('/', postIngredient);

// api/products/:productID
router.get('/:id', getIngredient);
router.delete('/:id', deleteIngredient);
router.put('/:id', putIngredient);

module.exports = router;