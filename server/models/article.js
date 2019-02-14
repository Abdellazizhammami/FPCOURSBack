const mongoose=require('mongoose');

const article=new mongoose.Schema({
    titre : String,
    date :{type: Date, default:Date.now},
    image :String,
    auteur : String,
    id_auteur: String,
    contenu :String,
    compteur : Number
});
const userModel = mongoose.model('articles',article);

module.exports = userModel;