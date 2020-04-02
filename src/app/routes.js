const express = require('express');

const LoginController = require('./controllers/controller.login.js');
const OngController = require('./controllers/controller.ong.js');
const IncidentesController = require('./controllers/controller.incidentes.js');
const PerfilController = require('./controllers/controller.perfil.js');

const routes = express.Router();

/*-------Login route-----------*/
routes.post('/login', OngController.create);

/*-------Ongs routes-----------*/
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/*-------Incidentes routes-----------*/
routes.get('/incidentes', IncidentesController.index);
routes.post('/incidentes', IncidentesController.create);
routes.delete('/incidentes/:id', IncidentesController.delete);

/*---------Perfil routes------------*/
routes.get('/perfil', PerfilController.index);


module.exports = routes;