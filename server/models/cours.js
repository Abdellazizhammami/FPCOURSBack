const mongoose = require('mongoose');
//const users = require('./user');

var chapitre = new mongoose.Schema({
    titre: String,
    contenu: String
});

const cours = new mongoose.Schema({
    titre: String,
    date: { type: Date, default: Date.now },
    prof: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    chapitres: [chapitre],
    tests: [{
        type: mongoose.Schema.ObjectId,
        Ref: 'tests'
    }],
    status: {
        type: String,
        default: 'druft',
        enum: ['druft', 'pending', 'validated', 'rejected']
    },
    validateBy: [{
        type: mongoose.Schema.ObjectId,
        Ref: 'users'
    }],
    categorie:{
        type:String,
        enum:['Programming languages','Web Technologies','Network & Système','Embedded','Project Management']
        
    }
});

var test = new mongoose.Schema({
    titre: String,
    questions: [{
        type: mongoose.Schema.ObjectId,
        Ref: 'questions'
    }]
});

var question = new mongoose.Schema({
    enonce: String,
    propos: [{
        type: mongoose.Schema.ObjectId,
        ref: 'propositions'
    }]
});

var proposition = new mongoose.Schema({
    propo: String,
    reponse: Boolean
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
