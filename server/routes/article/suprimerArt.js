const router = require('express').Router();
const article=require('../../models/article');
const user=require('../../models/user');

router.get('/deleteArt/:idUser/:idArt', async (req,res)=>{
    const idUser=req.params.idUser;
    const idArt=req.params.idArt;
    try {
        const art=await article.findById(idArt).exec();
    } catch (error) {
        res.send('erreur id article');
    }
    try {
        const use=await user.findById(idUser).exec();
    } catch (error) {
        res.send('erreur id user');
    }
    
    
    if((art.auteur==use.name)||(use.admin)){
        const resultat= await article.deleteOne({_id:idArt});
        res.send(resultat);
    }else{
    res.send('5atiiiiiiiiik');
    }
})

module.exports=router;