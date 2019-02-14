const router = require('express').Router();
const multer = require('multer');
const path = require('path');
router.post('/multer', upload.single('avatar'), (req, res) => {
    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });

    } else {
        console.log('file received');
        return res.send({
            success: true
        })
    }


});

const host = req.host;
const path = req.protocol + "://" + host + '/' + req.file.path;














module.exports = router;