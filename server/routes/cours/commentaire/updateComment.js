const router = require('express').Router();
const users = require('../../../models/user');
const comments = require('../../../models/comment');
const verifytoken= require('../../jwt').verifyToken;
var data={};

router.post('/UpdateComment/:idUser/:idcomment',verifytoken, async (req, res) => {
    try {
        var user = await users.findById(req.params.idUser).exec();
    
        var comment = await comments.findById(req.params.idcomment).exec();
    
    if (user.status=='Admin' || (comment.user._id == req.params.idUser)) {
        await comments.where({ _id: req.params.idcomment }).updateOne({ $set: { corps: req.body.corps } });
        const resultat = await comments.findById(req.params.idcomment).exec();
        data.resultat = resultat;
        
    } else {
        data.allow = 'you are not allowd to modif this comment';
       
    }
} catch (error) {
    data.err='false id comment or id user';
}
res.send(data);
});

module.exports = router ;