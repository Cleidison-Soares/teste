const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json(`Exito no deploy, Aplicação rodando perfeitamente`)
})

const porta = process.env.PORT || 3000

app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`);
})