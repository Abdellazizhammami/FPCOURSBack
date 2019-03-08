
const router = require('express').Router();
const cours = require('../../models/cours').coursModel;
const user = require('../../models/user');
const verifytoken = require('./../jwt').verifyToken;

router.post('/upCours/:idUser/:idCours', verifytoken, async (req, res) => {
   
    var idCours = req.params.idCours;
    var idUser = req.params.idUser;
    var modif = req.body;
   

    try {
        const course = await cours.findById(idCours).exec();
       
        const userr = await user.findById(idUser).exec();
        
        
        if (course.prof._id.toString() == userr._id.toString()) {


            if (modif.titre) {
                await cours.where({ _id: idCours }).updateOne({ $set: { titre: modif.titre } });
                const resultat = await article.findOne({ _id: idCours }).exec();
                res.send(resultat);
            };
            if (modif.chapitres) {
                
                await cours.where({ _id: idCours }).updateOne({ $set: { chapitres: modif.chapitres } });
                const resultat1 = await cours.findOne({ _id: idcours }).exec();
                res.send(resultat1);
            };

            if (modif.tests) {
                await cours.where({ _id: idCours }).updateOne({ $set: { tests: modif.tests } });
                const resultat1 = await cours.findOne({ _id: idcours }).exec();
                res.send(resultat1);
            };

            if (modif.status) {
                await cours.where({ _id: idCours }).updateOne({ $set: { status: modif.status } });
                const resultat1 = await cours.findOne({ _id: idcours }).exec();
                res.send(resultat1);
            };

            if (modif.categorie) {
                await cours.where({ _id: idCours }).updateOne({ $set: { categorie: modif.categorie } });
                const resultat1 = await cours.findOne({ _id: idcours }).exec();
                res.send(resultat1);
            };



        }
        else {
            res.send('ya m3alem fech ta3mel');
        }

    } catch (error) {
        res.send('erreur id user');
    }




})
module.exports = router;