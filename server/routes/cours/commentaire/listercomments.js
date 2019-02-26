const router=require('express').Router();
const comments = require('../../../models/comment');
const verifyToken = require('../../jwt').verifyToken;


router.get('/listercomment/:idArt',verifyToken, async (req,res)=>{
 var results = await comments.find({ cours : req.params.idArt}).sort({date :-1}).populate({path:'user',select:['name','lastname']}).populate({path:'cours',select:['_id']}).exec();
 res.send(results);
 
});
module.exports = router;