# Configuração
## Pre-requisito:
- NodeJs: [https://nodejs.org](https://nodejs.org)
- MongoDB: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

## Instale o repositório:
```
git clone https://github.com/AndreXime/ServerNode.git
cd ServerNode
npm install
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
