const express = require('express');
const db = require('../models/connection');
const router = express.Router();

router.get('/', (req, res) => {
    let sql = 'select * from estoque';

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render('cadastro', { data: result});
    });
});

router.post("/inserir", (req, res) => {
    let cod = req.body.cod;
    let nome = req.body.nome;
    let valor = req.body.valor;
    let qtd = req.body.qtd;
    let unidade = req.body.unidade;

    let query = `insert into estoque (nome_produto, valor_produto, qtd_produto, unidade_produto) values ("${nome}", "${valor}", "${qtd}", "${unidade}")`;

    db.query(query, function(error, data){
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    });

});

module.exports = router;