// Routes for appointments
const express = require('express');
const AgendamentoModel = require('../entidades/agendamentoModel');
const router = express.Router();

// Rota para agendar um compromisso
router.post('/', async (req, res) => {
   try {
    console.log(req.body)
    const { data, hora, cliente, servico } = req.body;

       const  agendamento = await AgendamentoModel.create({ data, hora, cliente, servico })
       res.send(agendamento);
       
   } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
   }
});

module.exports = router;
