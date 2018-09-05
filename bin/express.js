const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');

//Criando / invocando Api/Server Web do express
const app = express();

//configração de parse do json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Configurando a conexão com o banco de dados
mongoose.connect(variables.Database.connection);

//Configuração das rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

//Exportando App
module.exports = app;