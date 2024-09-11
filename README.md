# Esse Projeto

## Tecnologias e Dependências

Este projeto utiliza as seguintes dependências:

- **express**: Framework web para Node.js que facilita a criação de servidores HTTP.
- **mongoose**: Biblioteca de modelagem de dados para MongoDB e Node.js, simplificando a interação com o banco de dados.
- **dotenv**: Carrega variáveis de ambiente a partir de um arquivo `.env` para o `process.env`.

## Configuração

### Clone o repositório:
```
git clone https://github.com/seu-usuario/seu-repositorio.git
cd nodeServer
```

### Instale as dependências:

```
npm install express mongoose dotenv
```

### Configurando o arquivo .env:

Crie um arquivo .env na raiz do projeto e adicione suas variáveis de ambiente. Um exemplo de configuração:

MONGO_URI=mongodb://localhost:27017/meuBancoDeDados
PORT=3000
SECRET_KEY=mySecretKey

### Iniciando o servidor:

```
npm start
```

O servidor estará rodando em http://localhost:3000.
