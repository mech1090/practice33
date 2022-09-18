const User = require('../model/user.model')


const getEmail = (getEmail)=>{
    return User.findOne(getEmail)
}

const createFields = (fields)=>{
    return User.create(fields)
}

module.exports = {getEmail,createFields}