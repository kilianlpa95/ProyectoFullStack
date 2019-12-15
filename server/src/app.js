import express, { json } from 'express';
const morgan = require('morgan');
const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');

const session = require('express-session');
const authPassport = require('./controllers/passport');

//imports
const productsRoutes = require('./routes/products');
const ingredientsRoutes = require('./routes/ingredients');
const usersRoutes = require('./routes/users');

//initialization
const app = express();

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(cors(/*{credentials: true}*/));


//middleware
//app.use(cookieParser('keyboard_cat'));
app.set('trust proxy', 1);
app.use(session({
    secret: 'keyboard_cat',
    resave: false, 
    saveUninitialized: true,
    cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(json());
app.use(cors(/*{credentials: true}*/));

//routes
app.use('/api/products', productsRoutes);
app.use('/api/ingredients', ingredientsRoutes);
app.use('/api/users', usersRoutes);

module.exports = app;