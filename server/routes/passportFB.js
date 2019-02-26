const router = require('express').Router();
const passport = require('passport');


app.get('/auth/facebook',
passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
 