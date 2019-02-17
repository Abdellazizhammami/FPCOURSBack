const router = require('express').Router();
const cours=require('../../models/cours').coursModel;
const user = require('../../models/user');

router.post('/createCours/:idprof', async (req,res)=>{

   // console.log(req.body);
    
    var newcours = new cours;
    newcours.titre = req.body.titre;
    newcours.categorie = req.body.categorie;
    for (var i=0; i<req.body.chapitres.length;i++){
        newcours.chapitres[i]= req.body.chapitres[i]; 
    
    }
   
    newcours.prof= req.params.idprof;

    newcours.save(function(err, savedUser){
        if (err) {
            console.log(err);
            return res.status(200).send({message :'there is an error while adding a new cours'});
        }
        else{
    
        return res.status(200).send({message :'you have successufuly add a new cours'});
    } });   



})

module.exports=router;