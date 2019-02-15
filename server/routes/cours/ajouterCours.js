const router = require('express').Router();
const cours=require('../../models/cours');

router.post('/createCours', async (req,res)=>{
     var art=req.body;
     const result = await cours.create(art)
    res.send(result);
})

module.exports=router;