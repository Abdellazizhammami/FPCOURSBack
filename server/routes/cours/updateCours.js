
const router = require('express').Router();
const cours = require('../../models/cours').coursModel;
const user = require('../../models/user');
const verifytoken = require('./../jwt').verifyToken;

router.post('/upCours/:idUser/:idCours', verifytoken, async (req, res) => {

    var idCours = req.params.idCours;
    var idUser = req.params.idUser;
    var modif = req.body;
    var data = {};


    try {
        const course = await cours.findById(idCours).exec();

        const userr = await user.findById(idUser).exec();
        if (modif.validate) {

            if (userr.status == 'Teacher' || userr.status == 'Admin') {
                await cours.where({ _id: idCours }).updateOne({ $push: { validateBy: modif.validate } });
                await cours.findById(idCours).populate('validateBy').exec(async function (err, resii) {
                    if (err)
                        console.log(err);
                    else if (resii.validateBy.length >= 3) {
                        await cours.where({ _id: idCours }).updateOne({ $set: { status: "validated" } });
                        const keteb = await user.findById(resii.prof._id).exec();
                        if (keteb.status == 'Student') {
                            await user.where({ _id: resii.prof._id }).updateOne({ $set: { status: "Teacher" } });
                        }
                        await cours.findById(idCours).populate('validateBy').exec(function (err, resii2) {
                            resii = resii2;
                            data.validate = resii;
                        });
                    }

                });


            };
        } else if (course.prof._id.toString() == userr._id.toString()) {


            if (modif.titre) {
                await cours.where({ _id: idCours }).updateOne({ $set: { titre: modif.titre } });
                const resultat = await article.findOne({ _id: idCours }).exec();
                data.titre = resultat;
            };
            if (modif.chapitres) {

                await cours.where({ _id: idCours }).updateOne({ $set: { chapitres: modif.chapitres } });
                const resultat1 = await cours.findOne({ _id: idcours }).exec();
                data.chapitres = resultat1;
            };

            if (modif.tests) {
                await cours.where({ _id: idCours }).updateOne({ $set: { tests: modif.tests } });
                const resultat2 = await cours.findOne({ _id: idcours }).exec();
                data.tests = resultat2;

            };

            if (modif.status) {
                await cours.where({ _id: idCours }).updateOne({ $set: { status: modif.status } });
                const resultat3 = await cours.findOne({ _id: idcours }).exec();
                data.status = resultat3;
            };

            if (modif.categorie) {
                await cours.where({ _id: idCours }).updateOne({ $set: { categorie: modif.categorie } });
                const resultat4 = await cours.findOne({ _id: idcours }).exec();
                data.categorie = resultat4;
            };


        }
        else {
            data.err = 'ya m3allem fech ta3mel';
        }
        res.send(data);

    } catch (error) {
        console.log(error);

    }




})
module.exports = router;