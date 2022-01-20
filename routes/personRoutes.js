const router = require('express').Router()

const Person = require('../models/Person')

// ROTAS API

// CREATE
router.post('/', async (req, res) => {
    const {
        nome,
        salario,
        aprovado,
    } = req.body

    const person = {
        nome,
        salario,
        aprovado,
    }

    try {
        await Person.create(person)

        res.status(201).json({
            message: 'Pessoa inserida no sistema com sucesso!'
        })
    } catch (error) {
        res.status(500).json({
            erro: error
        })
    }
})

// READ
router.get('/', async (req, res) => {
    try {
        const people = await Person.find()

        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({
            erro: error
        })
    }
})

module.exports = router