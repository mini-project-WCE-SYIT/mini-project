const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'please provide a username']
    },
    password:{
        type:String,
        required:[true,'please provide a password']
    }
})

module.exports = mongoose.model('User', userSchema);