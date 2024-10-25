# Documentação
## Pre-requisitos:
- [Git](https://git-scm.com)
- [Docker](https://www.docker.com/get-started)

## Instale e inicie o servidor:
```
git clone https://github.com/AndreXime/EstoqueExpress.git
cd EstoqueExpress

# Isso vai instalar o container do Mongo e do NodeJs
docker compose up
```

## Estrutura de Pastas

A estrutura de pastas do projeto segue uma organização modular e escalável:


```
/EstoqueExpress
│
├── /public  # CSS, Icons, Js, Imagens
│
├── /src
│   ├── /controllers         
│   │   ├── apiControllers.js   # Controller das apis
│   │   └── renderController.js # Controller do frontend
│   ├── /database            
│   │   └── init_database.js    # Inicialização do banco de dados
│   ├── /middlewares         
│   │   └── validator.js        # Validador dos dados de input
│   ├── /models              
│   │   └── models.js           # Modelo do banco de dados
│   ├── /routes              
│   │   └── routes.js           # Rotas do possiveis
│   ├── /services               
│       ├── userAuth.js         # Autorização
│       ├── userData.js         # Manipular dados do user
│       └── userProduct.js      # Manipular estoques do user
|
├── /views   # Arquivos EJS do frontend
|
├── app.js   # Arquivo principal
├── docker-compose.yml       
├── package.json
├── ...             
└── README.md                
```
