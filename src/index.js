const express = require('express')
const rotas = require('./rotas')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(rotas)

/* app.get('/', (req, res) => {
    return res.status(200).json('tudo certo')
}) */

const porta = process.env.PORT || 3000

app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`);
})