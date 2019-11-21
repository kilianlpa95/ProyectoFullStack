const { Router } = require('express');
const router = Router();
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
//import "../controllers/users.controller";
const authPassport = require('../controllers/passport');
const authGoogle = require('../controllers/passport.google');

import { postUser, getUsers, getUser, deleteUser, putUser, /*postLogin*/ } from '../controllers/users.controller'

// api/users
router.get('/', authPassport.isAuthenticated, /*passport.authenticate('google'), { scope: '/users' },*/ getUsers);
router.post('/', postUser);

// api/users/:userID
router.get('/:id', authPassport.isAuthenticated, getUser);
router.delete('/:id', authPassport.isAuthenticated, deleteUser);
router.put('/:id', authPassport.isAuthenticated, putUser);

// api/users/auth/google
router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { scope: ['profile'] }, { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

// api/users/login
/*router.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/api/products');
        });*/

module.exports = router;
