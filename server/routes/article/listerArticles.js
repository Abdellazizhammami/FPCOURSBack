const router = require('express').Router();
const article = require('../../models/article');
const user = require('../../models/user');

router.get('/listerArts/:idAut', async (req, res) => {

    const idaut = req.params.idAut;
    var resultat;
    if (idaut == 'all') {
        resultat = await article.find().sort({date:-1}).exec();
        console.log(resultat);
        res.send(resultat);
    } else {
        try {
            var ketib = await user.findById(idaut).exec();
            console.log(ketib);
        } catch (error) {
            res.send('aucun auteur correspondant a ce nom');
        }

        if (!ketib) {
            res.send('aucun auteur correspondant a ce nom');

        } else {
            resultat = await article.find({ auteur: ketib.name }).exec();
            res.send(resultat);
        }

    }
})

module.exports = router;