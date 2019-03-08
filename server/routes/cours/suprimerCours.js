const router = require('express').Router();
const cours=require('../../models/cours').coursModel;
const user=require('../../models/user');
const verifytoken= require('./../jwt').verifyToken;

router.get('/deleteC/:idUser/:idCours', verifytoken,async (req,res)=>{
    
    const idUser=req.params.idUser;
    const idCours=req.params.idCours;
    //7ajaaa
    try {
        const course=await cours.findById(idCours).populate({path:'prof',select:['name','lastname']}).exec();
    
        const use=await user.findById(idUser).exec();
    
    
     
    if((course.prof._id.toString() == use._id.toString())||(use.status=='Admin')){
        
        const resultat= await cours.deleteOne({_id:idCours}).exec();
        console.log('test',resultat);
        
        res.send(resultat);
    }else{
    res.send('5atiiiiiiiiik');
    }
} catch (error) {
    res.send('erreur id cours or user');
}
})

module.exports=router;