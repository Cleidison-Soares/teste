const express = require('express')
const { listarUsuarios } = require('./controlador/usuarios')
const { listarCategorias } = require('./controlador/categorias')
const rotas = express.Router()


rotas.get('https://kind-teal-swallow-ring.cyclic.app/usuarios', listarUsuarios)
rotas.get('/categorias', listarCategorias)

module.exports = rotas