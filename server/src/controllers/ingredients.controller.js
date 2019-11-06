
import Ingredients from '../models/Ingredients'

export async function getIngredients(req, res){

    try {
            
        const ingredients = await Ingredients.findAll();

        res.json({
            data: ingredients
        });

    } catch (er) {
        console.log(er);
    }

}

export async function postIngredient(req, res){

    const { name, description, price, imgurl } = req.body;
    
    try {

        const newIngredient = await Ingredients.create({
            name,
            description,
            price,
            imgurl
        }, {
            fields: ['name', 'description', 'price', 'imgurl']
        });

        if (newIngredient){
            return res.json({
                message: 'received',
                data: newIngredient
            });
        }

    } catch (er) {
        console.log(er);
        res.status(500).json({
            message: 'error papu',
            data: {}
        })
    }
}

export async function getIngredient(req, res) {

    const { id } = req.params;

    try {

        const ingredient = await Ingredients.findOne({
            where: {
                id
            }
        });
        res.json(ingredient);

    } catch (er) {
        console.log(er);
    }

}

export async function deleteIngredient(req, res){

    const { id } = req.params;

    try {

        const rowDeleted = await Ingredients.destroy({
            where: {
                id
            }
        });

        res.json({
            message: 'Ingredient deleted',
            count: rowDeleted
        });

    } catch (er) {
        console.log(er);
        res.status(500).json({
            message: 'error papu',
            data: {}
        })
    }

}

export async function putIngredient(req, res){

    const { id } = req.params;

    const { name, description, price, imgurl } = req.body;

    try {

        const ingredient = await Ingredients.findAll({
            attributes: ['id', 'name', 'description', 'price', 'imgurl'],
            where: {
                id
            }
        });

        if (ingredient.length > 0){
            ingredient.forEach(async ingredient => {
                
                await ingredient.update({
                    name,
                    description,
                    price,
                    imgurl
                });

            });
        }

        return res.json({
            message: 'Ingredient updated',
            data: ingredient
        });

    } catch (er) {
        console.log(er);
    }

}