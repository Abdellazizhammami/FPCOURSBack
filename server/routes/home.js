const router=require('express').Router();
const article = require('../models/article');

/**
 * @swagger
 *
 * /home/home/{auth}:
 *   get:
 *     description: liste article by author
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: auth
 *         description: auther name or all.
 *         in: params
 *         required: true
 *         type: string
 *       
 *     responses:
 *       200:
 *         description: 
 */
router.get('/home/:auth',async (req,res)=>{
    if(req.params.auth=='all') {
    const result= await article.find().exec()
    res.send(result);
    } else{
        const result= await article.find({auteur:req.params.auth}).exec()
        res.send(result);  
    }
})
module.exports = router;
