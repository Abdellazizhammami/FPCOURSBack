const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors=require('cors')
mongoose.connect('mongodb://localhost:27017/ElearningDb',{ useNewUrlParser: true })
const app = express()
///////////////////////////////////////////////////
//morgan
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

///////////////////////////////
app.use(cors());
// app.use((req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });




app.use(bodyparser.json())

const auth = require('./server/routes/auth')
const home=require('./server/routes/home')
const login=require('./server/routes/login')
const register=require('./server/routes/register')
const ajouterAdmin=require('./server/routes/dashboard/Admin/ajouterAdmin')
const effacerUser=require('./server/routes/dashboard/Admin/effacerUser')
const listerUser=require('./server/routes/dashboard/Admin/listerUser')
const ajouterComment = require('./server/routes/cours/commentaire/ajouterComment')
const deleteComment = require('./server/routes/cours/commentaire/deleteComment')
const listerComment = require('./server/routes/cours/commentaire/listercomments')
const updateComment = require('./server/routes/cours/commentaire/updateComment')
const ajouterArt = require('./server/routes/cours/ajouterCours')
const consulterArt = require('./server/routes/cours/consulterCours')
const listerArticles = require ('./server/routes/cours/listerCours')
const suprimerArt = require ('./server/routes/cours/suprimerCours')
const updateArt = require ('./server/routes/cours/updateCours')
const swagger = require('./server/routes/swagger')
const mult=require('./server/routes/cours/multer')
const affiche=require('./server/routes/cours/afficheImg')

// c  pas bon 
app.use('/auth',login )
app.use('/home',home)
app.use('/cours',ajouterArt)
app.use('/register',register)
app.use('/cours',ajouterComment)
app.use('/cours',updateArt)
app.use('/cours',suprimerArt)
app.use('/cours',listerArticles)
app.use('/dash',ajouterAdmin)
app.use('/cours',consulterArt)
app.use('/dash',effacerUser)
app.use('/dash',listerUser)
app.use('/cours',updateComment)
app.use('/cours',deleteComment)
app.use('/cours',listerComment)
app.use('/api-docs',swagger)
app.use('/api-img',mult)
app.use('/image',affiche)






app.listen(3001, (err)=>{
    if(err)throw err;
    console.log('server is running on port 3001')
})