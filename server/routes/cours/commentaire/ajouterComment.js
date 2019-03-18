const router=require('express').Router();
const Comment = require('../../../models/comment');
const verifyToken = require('../../jwt').verifyToken;
router.post('/ajoutComment/:idUser/:idArt',verifyToken, async (req,res)=>{

var  newcoment = new Comment();
newcoment.user = req.params.idUser;
newcoment.cours = req.params.idArt;
newcoment.corps = req.body.corps;


newcoment.save(function(err, savedComment){
    if (err) {
        console.log(err);
        return res.status(500).send();
    }
    else{

    return res.status(200).send({message :'you have successufuly add a new comment',Com:savedComment});
} });     
})
module.exports = router ;