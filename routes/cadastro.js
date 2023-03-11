const express = require('express');
const db = require('../models/connection');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('cadastro');
});

router.post("/", (req, res) => {
    let nome = req.body.nome;
    let preco = req.body.preco;
    let qtd = req.body.qtd;
    let unidade = req.body.unidade;

    let query = `insert into estoque (nome_produto, valor_produto, qtd_produto, unidade_produto) values ("${nome}", "${preco}", "${qtd}", "${unidade}")`;

    db.query(query, function(error, data){
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    });

});

module.exports = router;