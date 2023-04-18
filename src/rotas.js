const express = require('express')
const { listarUsuarios } = require('./controlador/usuarios')
const { listarCategorias } = require('./controlador/categorias')
const rotas = express.Router()


rotas.get('/usuarios', listarUsuarios)
rotas.get('/categorias', listarCategorias)

module.exports = rotas