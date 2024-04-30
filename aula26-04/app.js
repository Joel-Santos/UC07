const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
let orcamentos = [];

app.use(express.static('public'));//definir uma pasta para acessar arquivos estaticos (html, img, js, css..)
app.use(express.json()); // comando para tratar dados json
app.use(express.urlencoded({extended: false})); // Tratar requisições html (formulários)

app.get('/', (req,res)=>{
    res.send('Bem-vindo!');
});

app.get('/cadastro', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'html', 'cadastro.html'));
});

app.post('/cadastro', (req, res)=>{
const {nome, telefone, servico, descricao} = req.body;
    orcamentos.push({nome, telefone, servico, descricao});
    res.send('Enviado com sucesso!');
    console.table(orcamentos);
});

app.get('/orcamentos', (req, res)=>{
    res.json({Orçamentos: orcamentos})
});




 /* 
 outras rotas rotas:
    /cadastro -> get
    /cadastro -> post
    /orcamentos -> get
 */

app.listen(port, ()=>{
    console.log(`Aplicação ativa em http://localhost:${port}`);
});

