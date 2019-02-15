const router = require('express').Router();
const cours=require('../../models/cours');
const user=require('../../models/user');

router.get('/deleteArt/:idUser/:idCours', async (req,res)=>{
    const idUser=req.params.idUser;
    const idCours=req.params.idCours;
    try {
        const course=await cours.findById(idCours).populate({path:'prof',select:['name','lastname']}).exec();
    } catch (error) {
        res.send('erreur id article');
    }
    try {
        const use=await user.findById(idUser).exec();
    } catch (error) {
        res.send('erreur id user');
    }
    // helllooo
    
    if((course.name==use.name)||(use.admin)){
        const resultat= await cours.deleteOne({_id:idArt});
        res.send(resultat);
    }else{
    res.send('5atiiiiiiiiik');
    }
})

module.exports=router;