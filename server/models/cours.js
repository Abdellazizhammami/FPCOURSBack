const mongoose = require('mongoose');
//const users = require('./user');

var chapitre = new mongoose.Schema({
    titre: String,
    contenu: String
});
var proposition = new mongoose.Schema({
    propo: String,
    reponse: Boolean
});
var question = new mongoose.Schema({
    enonce: String,
    propos: [proposition]
});
var test = new mongoose.Schema({
    titre: String,
    questions: [question]
});




const cours = new mongoose.Schema({
    titre: String,
    date: { type: Date, default: Date.now },
    image:String,
    prof: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    chapitres: [chapitre],
    tests: [test],
    status: {
        type: String,
        default: 'druft',
        enum: ['druft', 'pending', 'validated', 'rejected']
    },
    validateBy: [{
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    }],
    categorie:{
        type:String,
        enum:['Programming languages','Web Technologies','Network & System','Project Management']
        
    },
    note:{type: Number, default:0}
});











const coursModel = mongoose.model('cours', cours);
const chapModel = mongoose.model('chapitres', chapitre);
const testModel = mongoose.model('tests', test);
const questModel = mongoose.model('questions', question);
const propModel = mongoose.model('proposition', proposition);

module.exports.coursModel = coursModel;
module.exports.chapModel = chapModel;
module.exports.testModel = testModel;
module.exports.questModel = questModel;
module.exports.propModel = propModel;
