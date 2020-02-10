var controller = require('../controller/usuario')
var express = require('express');
var router = express.Router();

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.insert)
router.delete('/:id', controller.remove)
router.put('/:id', controller.update)
router.get('/:id/:password', controller.login)
router.post('/:id/:password', controller.logout)

module.exports = router;