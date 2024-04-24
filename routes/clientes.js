// Routes for clients
const express = require('express');
const ClienteModel = require('../entidades/clienteModel');
const router = express.Router();


// Rota para adicionar um cliente
router.post('/', async (req, res) => {
   try {
    console.log(req.body)
    const { nome, cpf, endereco, telefone } = req.body;

       const  cliente = await ClienteModel.create({nome, endereco,cpf,telefone})
       res.send(cliente)
       
   } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
   }
    
});


// // Rota para listar todos os clientes
// router.get('/', (req, res) => {
//     const db = new sqlite3.Database(dbPath);
//     db.all('SELECT * FROM clientes', (err, rows) => {
//         db.close(); // Feche a conexão com o banco de dados após a operação
//         if (err) {
//             console.error(err.message);
//             res.status(500).send('Internal Server Error');
//         } else {
//             res.json(rows);
//         }
//     });
// });

module.exports = router;
