
import Users from '../models/Users'

export async function getUsers(req, res){

    try {
            
        const users = await Users.findAll();

        res.json({
            data: users
        });

    } catch (er) {
        console.log(er);
    }

}

export async function postUser(req, res){

    const { user_name, user_password, category } = req.body;
    
    try {

        const newUser = await Users.create({
            user_name,
            user_password,
            category
        }, {
            fields: ['user_name', 'user_password', 'category']
        });

        if (newUser){
            return res.json({
                message: 'received',
                data: newUser
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

export async function getUser(req, res) {

    const { id } = req.params;

    try {

        const user = await Users.findOne({
            where: {
                id
            }
        });

        res.json(user);

    } catch (er) {
        console.log(er);
    }

}

export async function deleteUser(req, res){

    const { id } = req.params;

    try {

        const rowDeleted = await Users.destroy({
            where: {
                id
            }
        });

        res.json({
            message: 'User deleted',
            count: rowDeleted
        });

    } catch (er) {
        console.log(er);
    }

}

export async function putUser(req, res){

    const { id } = req.params;

    const { user_name, user_password, category } = req.body;

    try {

        const user = await Users.findAll({
            attributes: ['id', 'user_name', 'user_password', 'category'],
            where: {
                id
            }
        });

        if (user.length > 0){
            user.forEach(async user => {
                
                await user.update({
                    user_name,
                    user_password,
                    category
                });

            });
        }

        return res.json({
            message: 'User updated',
            data: user
        });

    } catch (er) {
        console.log(er);
    }

}