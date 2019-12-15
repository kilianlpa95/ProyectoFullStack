
import Products from '../models/Products'

export async function getProducts(req, res){

    try {
            
        const products = await Products.findAll();

        res.json({
            data: products
        });

    } catch (er) {
        console.log(er);
    }

}

export async function postProduct(req, res){

    const { name, description, price, imgurl } = req.body;
    
    try {

        const newProduct = await Products.create({
            name,
            description,
            price,
            imgurl
        }, {
            fields: ['name', 'description', 'price', 'imgurl']
        });

        if (newProduct){
            return res.json({
                message: 'received',
                data: newProduct
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

export async function getProduct(req, res) {

    const { id } = req.params;

    try {

        const product = await Products.findOne({
            where: {
                id
            }
        });
        res.json(product);

    } catch (er) {
        console.log(er);
    }

}

export async function deleteProduct(req, res){

    const { id } = req.params;

    try {

        const rowDeleted = await Products.destroy({
            where: {
                id
            }
        });

        res.json({
            message: 'Product deleted',
            count: rowDeleted
        });

    } catch (er) {
        console.log(er);
    }

}

export async function putProduct(req, res){

    const { id } = req.params;

    const { name, description, price, imgurl } = req.body;

    try {

        const product = await Products.findAll({
            attributes: ['id', 'name', 'description', 'price', 'imgurl'],
            where: {
                id
            }
        });

        if (product.length > 0){
            product.forEach(async product => {
                
                await product.update({
                    name,
                    description,
                    price,
                    imgurl
                });

            });
        }

        return res.json({
            message: 'Product updated',
            data: product
        });

    } catch (er) {
        console.log(er);
    }

}