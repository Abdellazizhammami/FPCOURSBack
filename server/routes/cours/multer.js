const router = require('express').Router();
const multer = require('multer');
const parser = require('body-parser');
const path = require('path');
var fs = require('fs');

const cours = require('../../models/cours').coursModel;


var storage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, './server/upload')
    },
    filename: (req, file, next) => {
        const ext = file.mimetype.split('/')[1];
        next(null, file.originalname )
    }
});
var upload = multer({ storage });

router.post('/imgUpload', upload.single('image'), async (req, res) => {
    
    if (!req.file) {
        res.send({ 'message': 'No file received' });
    } else {
        console.log('file received');
        img = req.file.originalname;
        
        var result;

        req.body.image = req.file.originalname;
        console.log(req.body);
        var coursee={};
        new  FormData(req.body).forEach((value,key) => {
            coursee[key]=value;
            
        });
        console.log(coursee);
        
        try {
            result = await cours.create(req.body);
            res.send({ 'message': 'File uploaded successfully', data: result });
        } catch (error) {
            
            res.send({ 'message': 'File Error '});
        }
       
    }
});














module.exports = router;












module.exports = router;