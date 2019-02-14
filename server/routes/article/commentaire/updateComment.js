const router = require('express').Router();
const users = require('../../../models/user');
const comments = require('../../../models/comment');
const verifytoken= require('../../jwt').verifyToken;


router.post('/UpdateComment/:idUser/:idcomment',verifytoken, async (req, res) => {
    try {
        var user = await users.findById(req.params.idUser).exec();
    } catch (error) {
        res.send('false id user');
    }
    try {
        var comment = await comments.findById(req.params.idcomment).exec();
    } catch (error) {
        res.send('false id comment');
    }
    if (user.admin || (comment.IdUser == req.params.idUser)) {
        await comments.where({ _id: req.params.idcomment }).updateOne({ $set: { corps: req.body.corps } });
        const resultat = await comments.findById(req.params.idcomment).exec();
        res.send(resultat);
    } else {
        res.send('you are not allowd to modif this comment');
    }
});

module.exports = router ;