// configs
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// rota inicial / endpoint
app.get('/', (req, res) => {

    //mostrar req

    res.json({
        message: 'Hi Express!'
    })

})

// dotenv
require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

// conexão mongodb
mongoose
    .connect(
        process.env.DB_HOST
    )
    .then(() => {
        console.log('CONECTADO. MongoDB!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))