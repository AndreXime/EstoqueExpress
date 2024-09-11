const express = require('express');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();  // Carrega variáveis do .env
require('./config/db'); // Conecta ao BD

const app = express();

// Middlewares do proprio express
app.use(express.json()); // Para entender requisições JSON
app.use(express.static('public')); // Para arquivos estáticos
app.use(express.urlencoded({ extended: true })); // Para entender dados de formulários

// Rotas
app.use('/api', userRoutes);

// Inicializando servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
