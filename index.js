// configs
const express = require('express')
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

// entregar porta
app.listen(3000)