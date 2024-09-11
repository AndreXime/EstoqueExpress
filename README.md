# Configuração

## Clone o repositório:
```
git clone https://github.com/AndreXime/ServerNode.git
cd ServerNode
```

## Instale as dependências:

```
npm install express mongoose dotenv ejs
```

## Configure o arquivo .env:

Crie um arquivo .env e adicione variáveis de ambiente, exemplo:
```
MONGO_URI=mongodb://localhost:27017/meuBancoDeDados
PORT=3000
SECRET_KEY=mySecretKey
```

## Inicie o servidor:

```
npm start
```

# Documentação

## Estrutura

Public -> Arquivos estaticos html,css e js
Config -> Conecta ao banco de dados
Routes -> Rotas que o client pode fazer
Models -> Model do banco de dados dentro do Javascript
Middlewares-> Atualmente não está usando nada
