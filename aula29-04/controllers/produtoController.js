const path = require('path');
const produtoModel = require('../models/produtoModel');
let id = 0;

class ProdutoController{
    home(req, res){
        res.send('Essa é a rota inicial dos produtos');
    }
    formCadastro(req, res){
        res.sendFile(path.join(__dirname, '../public', 'produtoForm.html'));
    }
    cadastro(req,res){
        const {nome, preco} = req.body;
        id++;
        let produto = new produtoModel(id,nome,preco);
        res.send({"Dados gravados com sucesso!": produto});
    }
}
module.exports = new ProdutoController();