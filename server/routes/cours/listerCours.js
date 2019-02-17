const router = require('express').Router();
const cours = require('../../models/cours').coursModel;
const user = require('../../models/user');

/**
 * @swagger
 *
 * /cours/listerCourses/{idCours} :
 *   get:
 *     description: lister tous les cours.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: idCours
 *         description: id of the athentified user and it should be an admin.
 *         in: path
 *         required: true
 *         type: string
 * 
 *      
 *       
 *     responses:
 *       200:
 *         description: les liste des utilisateur inscrit
 */

router.get('/listerCourses/:idCours', async (req, res) => {

    const idaut = req.params.idCours;
    var resultat;
    if (idaut == 'all') {
        resultat = await cours.find().sort({date:-1}).populate({path:'prof',select:['name','lastname']}).exec();
        //console.log(resultat);
        res.send(resultat);
    } else {
        try {
            var ketib = await user.findById(idaut).exec();
            console.log(ketib);
        } catch (error) {
            res.send({message:'Bad Id'});
        }

        if (!ketib) {
            res.send('aucun auteur correspondant a ce nom');

        } else {
            resultat = await cours.find({ prof: ketib._id }).populate({path:'prof',select:['name','lastname']}).exec();
            res.send(resultat);
        }

    }
})

module.exports = router;