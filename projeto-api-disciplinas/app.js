const express = require('express');
const app =  express();
const port = 3000;
const path = require('path');
const courseRoutes = require('./routes/courseRoutes'); //importando o nosso arquivo de rotas.

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(courseRoutes);

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
})

app.listen(port, () =>{
    console.log(`http://localhost:${port}`);
})






