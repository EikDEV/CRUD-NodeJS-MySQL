const express = require('express');
const app = express();
const bodyParser = require("body-parser");
var path = require('path');

app.use(express.static('public'));
app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/js', express.static(path.join(__dirname, 'js')));
app.set('view engine', 'ejs');

//Rotas
app.use('/', require('./routes/principal'));
app.use('/cadastro', require('./routes/cadastro'));

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor iniciado na porta 3000");
});

module.exports = app;