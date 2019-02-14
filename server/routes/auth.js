const router = require('express').Router()
const User = require('../models/user')
const mongoose = require('mongoose');


router.post('/register', async (req, res) => {
    
})
    

router.post('/users', async (req, res) => {
    const result = await User.find().exec()
    res.send(result);
});

router.post('/login', async (req, res) => {
    const result = await User.findOne({ email: req.body.email }).exec()
    if (result.password === req.body.password) {
        res.send(result);
    } else {
        res.send('bad pass')
    }
});



module.exports = router;