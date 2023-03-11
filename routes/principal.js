const express = require('express');
const db = require('../models/connection');
const router = express.Router();

router.get('/', (req, res) => {
    let sql = 'select * from estoque';

    db.query(sql, (err, result) => {
        if (err) throw err;
        res.render('principal', { data: result});
    });
});

module.exports = router;