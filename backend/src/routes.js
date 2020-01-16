const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

 

// metodos HTTP: get, post, put, delete

// tipos de parametros:

// querry params: request.querry (Filtros, ordenação, paginação e etc...)
// route params: request.params (Identificar um recurso na alteraçao ou remoção)
// body: request.body (Dados para criação ou alteração de um registro)

routes.get('/devs', DevController.index);
routes.post('/devs' , DevController.store);
routes.get ('/search' , SearchController.index);

module.exports = routes;