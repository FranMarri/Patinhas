// Routes for products
const express = require('express');
const ProdutoModel = require('../entidades/produtoModel');
const router = express.Router();

// Rota para adicionar um produto
router.post('/', async (req, res) => {
   try {
    console.log(req.body)
    const { nome, preco, quantidade } = req.body;

       const  produto = await ProdutoModel.create({ nome, preco, quantidade })
       res.send(produto);
       
   } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
   }
});

module.exports = router;
