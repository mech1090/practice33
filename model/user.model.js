const mongoose = require('mongoose')

const SchemaDef = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        password:true
    }
},{
    collection : "Practice 33 USer"
})

const User = mongoose.model('User',SchemaDef)

module.exports = User