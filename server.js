const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors=require('cors')
mongoose.connect('mongodb://localhost:27017/blogDb',{ useNewUrlParser: true })
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
const ajouterComment = require('./server/routes/article/commentaire/ajouterComment')
const deleteComment = require('./server/routes/article/commentaire/deleteComment')
const listerComment = require('./server/routes/article/commentaire/listercomments')
const updateComment = require('./server/routes/article/commentaire/updateComment')
const ajouterArt = require('./server/routes/article/ajouterArt')
const consulterArt = require('./server/routes/article/consulterArt')
const listerArticles = require ('./server/routes/article/listerArticles')
const suprimerArt = require ('./server/routes/article/suprimerArt')
const updateArt = require ('./server/routes/article/updateArt')
const swagger = require('./server/routes/swagger')


app.use('/auth',login )
app.use('/home',home)
app.use('/article',ajouterArt)
app.use('/register',register)
app.use('/article',ajouterComment)
app.use('/article',updateArt)
app.use('/article',suprimerArt)
app.use('/article',listerArticles)
app.use('/dash',ajouterAdmin)
app.use('/article',consulterArt)
app.use('/dash',effacerUser)
app.use('/dash',listerUser)
app.use('/article',updateComment)
app.use('/article',deleteComment)
app.use('/article',listerComment)
app.use('/api-docs',swagger)






app.listen(3001, (err)=>{
    if(err)throw err;
    console.log('server is running on port 3001')
})