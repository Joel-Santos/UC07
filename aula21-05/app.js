const express = require('express');
const app = express();
const port  = 3000;
const path = require('path');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use('/user', userRoutes);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})
