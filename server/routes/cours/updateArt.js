
const router = require('express').Router();
const article = require('../../models/article');
const user=require('../../models/user');

router.post('/updateArt/:idUser/:idArt', async (req, res) => {
    var idArt = req.params.idArt;
    var idUser = req.params.idUser;
    var modif = req.body;
    try {
        const art = await article.findById( idArt ).exec();
        console.log(art);
    } catch (error) {
        res.send('erreur id article');
    }
    
    try {
        const userr = await user.findById( idUser ).exec();
        console.log(userr);
    } catch (error) {
        res.send('erreur id user');
    }
    
    

    if (art.auteur === userr.name) {

        if (modif.titre) {
             await article.where({_id:idArt}).updateOne({ $set: { titre: modif.titre }});
             const resultat = await article.findOne({_id:idArt}).exec();
             res.send(resultat);
        };
        if (modif.contenu) {
            await article.where({_id:idArt}).updateOne({ $set: { contenu: modif.contenu }});
           const resultat1 = await article.findOne({_id:idArt}).exec();
           res.send(resultat1);
       };
        
        
    }
    else {
        res.send('ya m3alem fech ta3mel');
    }
})
module.exports = router;