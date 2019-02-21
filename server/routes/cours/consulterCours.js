const router=require('express').Router();
const cours=require('../../models/cours');
const verifytoken= require('./../jwt').verifyToken;


router.get('/consulterCours/:idCours', verifytoken,async (req,res)=>{
    try {
        const resultat=await cours.findById(req.params.idCours).populate({path:'prof',select:['name','lastname']}).exec();
        res.send(resultat);
    } catch (error) {
        res.send('Identificateur de article est non valide, veuillez saisir un autre identifiant');
    }
    
})
 
module.exports=router;