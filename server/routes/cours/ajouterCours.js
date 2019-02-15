const router = require('express').Router();
const cours=require('../../models/cours');

router.post('/createCours', async (req,res)=>{
     var course=req.body;
     const result = await cours.create(course)
    res.send(result);
})

module.exports=router;