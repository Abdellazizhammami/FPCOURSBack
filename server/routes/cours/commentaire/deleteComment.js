const router=require('express').Router();
const comments = require('../../../models/comment');
const users = require('../../../models/user');
const verifytoken= require('../../jwt').verifyToken;


router.get('/deletecomment/:idcomment/:idUser',verifytoken, async (req,res)=>{
   try{
       var user = await users.findById(req.params.idUser).exec();
   } catch (error) {
       res.send('bad id user');
   }
   try{
       var coment = await comments.findById(req.params.idcomment)
   } catch(error){
       res.send('bad id comment');

   }
 
   if(user.admin || (coment.IdUser == req.params.idUser)){

    const resu = await comments.deleteOne({_id : req.params.idcomment});
    res.send(resu);

   } else {
       res.send('you are not allowd to delete this comment');
   }
})
module.exports = router;