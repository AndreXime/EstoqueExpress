import express from 'express';
import routes from './routes/routes.js';
import session from 'express-session';
import './models/initDatabase.js'; // Conecta ao BD

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.set('x-powered-by', false);

app.use(express.json()); // Para entender requisições JSON
app.use(express.static('public')); // Para arquivos estáticos
app.use(express.urlencoded({ extended: true })); // Para entender dados de formulários

app.use(
  session({
    secret: process.env.SESSION_KEY || "a3A1njak2MC12DALJ", // Uma chave secreta para assinar o cookie da sessão
    resave: false, // Não salva a sessão de volta no store se ela não foi modificada
    saveUninitialized: true, // Salva sessões não inicializadas
    cookie: {
      secure: false,
      maxAge: undefined,
    },
  })
);

//Medir o tempo de resposta
app.use((req, res, next) => {
    const start = process.hrtime();
    // Evento 'finish' é disparado quando a resposta termina
    res.on('finish', () => {
      const diff = process.hrtime(start); // Calcula a diferença
      const seconds = diff[0]; // Segundos
      const milliseconds = diff[1] / 1e6; // Converte nanosegundos em milissegundos
      console.log(`Tempo de resposta: ${seconds}s e ${milliseconds.toFixed(3)}ms`);
    });
    next(); // Continua para o próximo middleware
});

// Rotas
app.use('/', routes);

// Inicializando servidor
const port = 3000;
app.listen(port,'0.0.0.0',() => {
    console.log(`\nAplicação está rodando em http://localhost:${port}\n`);
});
