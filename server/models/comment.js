const mongoose=require('mongoose');

const commentaire=new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    cours: {
        type: mongoose.Schema.ObjectId,
        ref: 'cours'
    },
    date:{type: Date, default:Date.now},
    corps:String
    
});
const commentModel = mongoose.model('comments',commentaire);

module.exports = commentModel;