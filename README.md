# Documentação

## Instale e inicie o servidor:
### Pre-requisitos: [Git](https://git-scm.com) & [Docker](https://www.docker.com/get-started)
```
git clone https://github.com/AndreXime/EstoqueExpress.git
cd EstoqueExpress

# Isso vai instalar o container do Mongo e do NodeJs
docker compose up
```
## Website com seguintes funcionalidades
- Arquitetura MVC (Rotas, Frontend e Banco de dados)
- Renderização server-side com EJS para gerar HTML dinâmico no servidor
- Permitir criação e gestão de múltiplos estoques e produtos por usuário
- Proteção de rotas e autenticação para acesso seguro

## Estrutura de Pastas

A estrutura de pastas do projeto:

```
/EstoqueExpress
│
├── /public  # CSS, Icons, Js, Imagens
│
├── /src
│   ├── /controllers         
│   │   ├── apiControllers.js   # Controller das apis
│   │   └── renderController.js # Controller do frontend           
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
│── init_database.js    # Inicialização do banco de dados
├── docker-compose.yml       
├── package.json
├── ...             
└── README.md                
```
