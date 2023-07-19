const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const {validarID} = require('../middlewares/validarID');
const checks = require('../middlewares/checks');
const {validarChecks} = require('../middlewares/validarChecks');
const {validarClub} = require('../middlewares/validarClub');

router.get('/list', apiController.list);
router.post('/crear', checks, validarChecks, validarClub, apiController.crear);
router.put('/editar/id/:id',validarID, checks, validarChecks, validarClub, apiController.editar);
router.delete('/eliminar/id/:id', validarID, apiController.eliminar);
  
module.exports = router;






// router.get('/list-profesion/role/:role', apiController.listPorProfesion);
// router.get('/buscar/id/:id', validarID, apiController.buscarSegunID);
// router.get('/buscar/role/:role', apiController.buscarSegunRole);

// metodo http seguido de una expresion *middleware* seguido de un callback
// objeto -> middleware -> controller -> DB
// objeto <- middleware - controller - DB
// error <- controller <- DB
// middleware de ruta - validar la información