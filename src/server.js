// Importar pacotes
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// Iniciando o express
const server = express();

server
    // Utilizando os arquivos estaticos
    .use(express.static('public'))

    // Configurar o template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    // Criar uma rota 
    .get('/', pages.index)
    .get('/page-register', pages.pageRegister)
    .get('/page-register-finish', pages.pageRegisterFinish)
    .get('/page-profile', pages.pageProfile)
    .get('/page-edit-success', pages.pageEditSuccess)

// Ligar o servidor
server.listen(5500)