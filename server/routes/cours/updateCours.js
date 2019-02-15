
const router = require('express').Router();
const cours = require('../../models/cours');
const user=require('../../models/user');

router.post('/updateArt/:idUser/:idCours', async (req, res) => {
    var idCours = req.params.idCours;
    var idUser = req.params.idUser;
    var modif = req.body;
    try {
        const course = await cours.findById( idCours ).exec();
        console.log(course);
    } catch (error) {
        res.send('erreur id article');
    }
    
    try {
        const userr = await user.findById( idUser ).exec();
        console.log(userr);
    } catch (error) {
        res.send('erreur id user');
    }
    
    

    if (cours.prof === userr._id) {

        if (modif.titre) {
             await cours.where({_id:idCours}).updateOne({ $set: { titre: modif.titre }});
             const resultat = await article.findOne({_id:idCours}).exec();
             res.send(resultat);
        };
        if (modif.contenu) {
            await cours.where({_id:idCours}).updateOne({ $set: { contenu: modif.contenu }});
           const resultat1 = await cours.findOne({_id:idcours}).exec();
           res.send(resultat1);
       };
        
        
    }
    else {
        res.send('ya m3alem fech ta3mel');
    }
})
module.exports = router;