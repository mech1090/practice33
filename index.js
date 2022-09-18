const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('config')
const userPage = require('./route/user.route')
require('./db')

const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use('/user',userPage)

app.set('view engine','pug')
app.set('views','./views')

app.get('/',(req,res)=>{
    res.send('Testing okkk')
})

app.get('*',(req,res)=>{
    res.send('BAd_Request')
})

mongoose.connection.once('open',()=>{
    
    app.listen(config.get('port'),()=>{
    console.log(`Server is running on port ${config.get('port')}`)
})

    console.log('DB CONNECTED')

})

