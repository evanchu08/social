var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var async = require('async');
const passport = require('passport');

var crypto = require('crypto');
var User = require('../models/user');
var secret = require('../secret/secret');


module.exports = (app) => {

    app.post('/signup', passport.authenticate('local.signup', {
        successRedirect: '/home',
        failureRedirect: '/signup'
    }));
    
    app.post('/login', passport.authenticate('local.login', {
//        successRedirect: '/home',
        failureRedirect: '/login',
    }), (req, res) => {
        res.redirect('/home');
    });
    
    app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));
    
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/home',
        failureRedirect: '/login'
    }));

    app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

    // 2nd route handler sends back to our page
    app.get('/auth/google/callback', passport.authenticate('google', {
            successRedirect: '/home',
            failureRedirect: '/login'
    }))

    
    app.get('/logout', (req, res) => {
		req.logout();
	    res.redirect('/');
	});
}	



