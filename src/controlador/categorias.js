const knex = require('../conexao/knex')

const listarCategorias = async (req, res) => {

    const lista = await knex.select().table('categorias')

    return res.status(200).json(lista)


}


module.exports = {
    listarCategorias
}
