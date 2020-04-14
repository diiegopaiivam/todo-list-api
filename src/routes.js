const express = require('express');
const routes = express.Router();
const TodoController = require('./controllers/TodoController');

routes.get('/', TodoController.index);
routes.post('/todo', TodoController.store);
routes.put('/todo/:id', TodoController.update);
routes.delete('/todo/:id', TodoController.delete);

module.exports = routes;