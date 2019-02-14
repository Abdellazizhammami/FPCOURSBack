const router = require('express').Router();
const user = require('../../../models/user');
const verifyToken = require('../../jwt').verifyToken;


/**
 * @swagger
 *
 * /dash/listerUser/{idAdmin}/{idUser} :
 *   get:
 *     description: liste des utilisateur 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: idAdmin
 *         description: id of the athentified user and it should be an admin.
 *         in: path
 *         required: true
 *         type: string
 * 
 *       - name: idUser
 *         description: id of the new admin.
 *         in: path
 *         required: true
 *         type: string
 *      
 *       
 *     responses:
 *       200:
 *         description: les liste des utilisateur inscrit
 */


router.get('/ajoutAdmin/:idAdmin/:idUser', verifyToken, async (req, res) => {
    try {
        var utilisateur = await user.findById(req.params.idAdmin);
    } catch (error) {
        res.send({message :' bad id user'});
    }




    if (utilisateur.admin) {
        

        const result = await user.findById(req.params.idUser);
    
        if (result) {

            const resu = await user.where({ _id: req.params.idUser }).updateOne({ $set: { admin: true } });
            res.send(resu);
        } else {
            res.send({message:'user not registred'});
        }
    } else {
        res.send({message:'you are not admin'});
    }
})

module.exports = router;