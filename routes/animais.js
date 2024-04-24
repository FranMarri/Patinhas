// Routes for animals
const express = require('express');
const AnimalModel = require('../entidades/animalModel');
const router = express.Router();

// Rota para adicionar um animal
router.post('/', async (req, res) => {
   try {
    console.log(req.body)
    const { nome, especie, idade, dono } = req.body;

       const  animal = await AnimalModel.create({ nome, especie, idade, dono })
       res.send(animal);
       
   } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
   }
});

module.exports = router;
