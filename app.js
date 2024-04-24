// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db/db');


const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

db.sync()

// Routes
app.use('/clientes', require('./routes/clientes'));
app.use('/animais', require('./routes/animais'));
app.use('/produtos', require('./routes/produtos'));
app.use('/agendamentos', require('./routes/agendamentos'));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
