const router = require('express').Router();
const cours=require('../../models/cours');
var path = require('path');

router.get('/viewImg/:nameImg', (req,res) => {
    
     res.sendFile(req.params.nameImg , {root: path.join('./server/upload','/')});
})


module.exports=router;

