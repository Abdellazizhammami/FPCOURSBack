const router=require('express').Router();
const cours=require('../../models/cours');
const verifytoken= require('./../jwt').verifyToken;


router.get('/consulterArt/:idCours', verifytoken,async (req,res)=>{
    try {
        const resultat=await cours.findById(req.params.idCours).exec();
        res.send(resultat);
        console.log (resultat);
    } catch (error) {
        res.send('Identificateur de article est non valide, veuillez saisir un autre identifiant');
    }
    
})
 
module.exports=router;