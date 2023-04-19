const knex = require('../conexao/knex')


const listarUsuarios = async (req, res) => {

    const usuarios = await knex.select('id', 'nome', 'email').table('usuarios')

    return res.status(200).json(usuarios)

}


module.exports = {
    listarUsuarios
};