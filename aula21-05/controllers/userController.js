const User = require('../models/user');

class UserController{

   cadastro(req, res){
    const {nome, email, cep, cidade, estado, rua} = req.body;
    const newUser = new User(nome, email, cep, cidade, estado, rua);
    res.json(newUser);
   }     
   

}
module.exports = new UserController();