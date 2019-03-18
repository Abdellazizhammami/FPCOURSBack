const router=require('express').Router();
const cours = require('../models/cours').coursModel;

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
router.get('/home/:prof',async (req,res)=>{

    if(req.params.prof=='all') {
        
    const result= await cours.find().populate({path:'prof', select:['name','lastname']}).populate({path:'prof',select:['name','lastname']}).populate({path:'validateBy',select:['name','lastname']}).exec();
    
    res.send(result);
    } else{
        const result= await cours.find({prof:req.params.prof}).populate({path:'prof',select:['name','lastname']}).populate({path:'validateBy',select:['name','lastname']}).exec()
        res.send(result);  
    }
})
module.exports = router;
