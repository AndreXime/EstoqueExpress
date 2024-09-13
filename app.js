const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
require('dotenv').config();  // Carrega variáveis do .env
require('./src/config/db'); // Conecta ao BD

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// Middlewares do proprio express
app.use(express.json()); // Para entender requisições JSON
app.use(express.static('public')); // Para arquivos estáticos
app.use(express.urlencoded({ extended: true })); // Para entender dados de formulários

// Rotas
app.use('/', userRoutes);

// Inicializando servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
