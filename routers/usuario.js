var controller = require('../controller/usuario')
var express = require('express');
var router = express.Router();
var verificacionToken = require('./verificacionToken')

router.get('/', /*verificacionToken.validarToken ,*/controller.getAll ) // lista todos los usuarios
router.get('/:id', controller.getById ) // muestra los datos de un 1 usuario
router.post('/', controller.registrar) // registra un nuevo usuario
router.post('/login', controller.login) // login del usuario (obtiene el token)
router.delete('/:id', controller.remove) // borra un usuario (falta borarr sus puntuaciones)
router.put('/:id', controller.update) // modifica un usuario

//'http://localhost:5200/usuario/ioe4rthg289345hrt93uwhi9/puntuaion'
router.post('/:id/puntuacion', controller.insertaPuntuacion)// Añadir una puntuacion a un usuario en particular

//'http://localhost:5200/usuario/ioe4rthg289345hrt93uwhi9/puntuacion
// Devuelve los datos del usuario junto con todas sus puntuaciones
router.get('/:id/puntuacion', controller.getPuntuacionesUsuario) 


// Borrar una puntuacion a un usuario en particular

module.exports = router;