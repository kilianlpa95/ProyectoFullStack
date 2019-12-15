
import Users from '../models/Users';
var User = require('../models/Users');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;
const passport = require('passport');

export async function validateEmail(email){

    const validEmail = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    if (validEmail.test(String(email).toLowerCase())){
        return true;
    } else {
        return false;
    }

}

export async function validUser(name, password){

    //const email = false;
    //const userEmail = user.user_email;

    const userName = typeof name == 'string' && 
                    name.trim() != '' &&
                    name.trim().length >= 5;

    /*if (userEmail.match(validEmail)){
        email = typeof user.user_email == 'string' && 
                        user.user_email.trim() != '';
    } else {
        email = false;
    }*/

    const pass = typeof password == 'string' && 
                        password.trim() != '' &&
                        password.trim().length >= 8;
                        
    return userName && /*email &&*/ pass;
    //return false;
}

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

    const { user_name, user_password, category, user_email } = req.body;
    
    /*if(validateEmail(user_email) && validUser(user_name, user_password)){*/

        try {

            //console.log(user_password);
            const hash = bcrypt.hashSync(user_password, 10);
            //console.log(hash);
            
            const newUser = await Users.create({
                user_name,
                user_password,
                category,
                user_email
            }, {
                fields: ['user_name', 'user_password', 'category', 'user_email']
            });
            //console.log(hash);
            if (newUser){
                newUser.update({
                    user_password: hash
                });
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
            });
        }
/*
    } else {
        return res.json({
            message: 'Campos no válidos, revise email, contraseña (8+ longitud) y usuario (5+ logintud)'
        });
    }*/
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

export async function getUserName(req, res) {
    const { user_name } = req.params;
    try {

        const user = await Users.findOne({
            where: {
                user_name
            }
        });
        if (!user) { res.json({ message: 'No user' }); } else { res.json(user); }

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

    const { user_name, user_password, category, user_email } = req.body;

    const hash = bcrypt.hashSync(user_password, 10);

    try {

        const user = await Users.findAll({
            attributes: ['id', 'user_name', 'user_password', 'category', 'user_email'],
            where: {
                id
            }
        });

        if (user.length > 0){
            user.forEach(async user => {
                
                await user.update({
                    user_name,
                    user_password: hash,
                    category,
                    user_email
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

export async function postLogin(req, res){

    const { user_name, user_password } = req.body;
    const userName = user_name;
    const userPass = user_password;
/*
    passport.use(
        new localStrategy(function (username, password, done){

            Users.findOne({
                where: {
                    user_name
                }
            }, function (err, user){
                if(err){ return done(err); }
                if(!user) { return done(null, false); }
                if (!user.verifyPassword(password)) {
                    return done (null, false);
                }
                return done(null, user);
            });
        }));*/





    try {
        
        //if(/*validateEmail(user_email) &&*/ validUser(userName, userPass) && user != null){

            try {
                
                //const hash = bcrypt.hashSync(userPass, 10);

                //console.log(user.user_password, hash);
                
                await bcrypt.compare(userPass, user.user_password, function(err, result){
                    if(result && !err){
                        /*res.cookie('user_id', user.id, {
                            httpOnly: true,
                            signed: true,
                            secure: true
                        });*/
                        res.json(user);
                        console.log("Login correcto");
                    } else {
                        res.json({
                            message: 'Contraseña incorrecta'
                        });
                    }
                });
    
            } catch (er) {
                console.log(er);
                res.status(500).json({
                    message: 'error, mirar deep deep',
                    data: {}
                });
            }
    /*
        } else {
            return res.json({
                message: 'Usuario o contraseña incorrectos'
            });
        }*/
        /*
        if (user){
            console.log("OK");
        } else {
            console.log('Usuario incorrecto');
        }*/
        //console.log(userName, userPass);

    } catch (er) {
        console.log(er);
    }
}

