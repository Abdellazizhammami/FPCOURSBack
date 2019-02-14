const router=require('express').Router();
const user = require('../../../models/user');
const verifyToken = require('../../jwt').verifyToken;


/**
 * @swagger
 *
 * /dash/deleteUser/{idAdmin}/{idUser} :
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

router.get('/deleteUser/:idadmin/:idUser',verifyToken, async (req, res)=>{
    const utilisateuradmin = await  user.findById(req.params.idadmin);
    const utilisateur = await  user.findById(req.params.idUser);
    console.log(utilisateuradmin,utilisateur);
    if (utilisateuradmin.admin&&(!utilisateur.admin)){
        const resultat= await user.deleteOne({_id : req.params.idUser});
        res.send(resultat)

    } else {
        res.send('you are not administrator')
    }
})

module.exports=router; 