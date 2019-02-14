const router = require('express').Router();
const article=require('../../models/article');

router.post('/createArt', async (req,res)=>{
     var art=req.body;
     const result = await article.create(art)
    res.send(result);
})

module.exports=router;