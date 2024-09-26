# Configuração
## Pre-requisito:
- ~~NodeJs: [https://nodejs.org](https://nodejs.org)~~
- ~~MongoDB: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)~~
- Docker [https://www.docker.com/](https://www.docker.com/)

## Instale e inicie o servidor:
```
git clone https://github.com/AndreXime/ServerNode.git
cd ServerNode

# Isso vai instalar o container do Mongo e do NodeJs
docker compose up --build 

#Para depois de encerra o build não é necassario mais usar --build
docker compose up
```
