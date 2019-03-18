const router = require('express').Router();
const comments = require('../../../models/comment');
const users = require('../../../models/user');
const verifytoken = require('../../jwt').verifyToken;
var data = {};

router.get('/deletecomment/:idcomment/:idUser', verifytoken, async (req, res) => {
    try {
        var user = await users.findById(req.params.idUser).exec();

        var coment = await comments.findById(req.params.idcomment)


        if (user.admin || (coment.user._id == req.params.idUser)) {

            const resu = await comments.deleteOne({ _id: req.params.idcomment });
            data.resultat = resu;

        } else {
            data.allow = 'you are not allowd to modif this comment';

        }
    } catch (error) {
        data.err = 'false id comment or id user';
    }
    res.send(data);
})
module.exports = router;