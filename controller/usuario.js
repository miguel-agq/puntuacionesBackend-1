var Usuario = require('../models/usuario')

async function getAll(req, res) {
    try {
        let usuarios = await Usuario.find()
        res.status(200).send({ accion: 'get all', datos: usuarios })
    } catch (err) {
        res.status(500).send({ accion: 'get all', mensaje: `error al obtener los usuarios ${err}` })
    }
}


async function getById(req, res) {
    try {
        let usuarioId = req.params.id;
        let usuario = await Usuario.findById(usuarioId)
        res.status(200).send({ accion: 'get one', datos: usuario })
    } catch (err) {
        res.status(500).send({ accion: 'get one', mensaje: `error al obtener al usuario ${err}` })
    }
}


async function insert(req, res) {
    const usuario = new Usuario(req.body)
    usuario._id = undefined;
    console.log(req.body)
    try {
        let usuarioGuardado = await usuario.save()
        res.status(200).send({ accion: 'save', datos: usuarioGuardado })
    } catch (err) {
        res.status(500).send({ accion: 'save', mensaje: `error al guardar al usuario ${err}` })
    }
}


async function remove(req, res) {
    try {
        let usuarioId = req.params.id;
        let usuarioBorrado = await Usuario.findByIdAndRemove(usuarioId)
        if (!usuarioBorrado) {
            return res.status(404).send({ accion: 'remove', mensaje: `error no existe el id a borrar. ${err}` })
        }

        res.status(200).send({ accion: 'remove', datos: usuarioBorrado })

    } catch (err) {
        res.status(500).send({ accion: 'remove', mensaje: `error al borrar al usuario. ${err}` })
    }
}

async function update(req, res) {
    try {
        var datos = req.body;
        let usuarioId = req.params.id;
        let usuarioActualizado = await Puntuacion.findByIdAndUpdate(usuarioId, datos)
        if (!usuarioActualizado) {
            return res.status(404).send({ accion: 'update', mensaje: `error no existe el id a actualizar. ${err}` })
        }

        res.status(200).send({ accion: 'update', datos: usuarioActualizado })

    } catch (err) {
        res.status(500).send({ accion: 'update', mensaje: `error al actualizar al usuario ${err}` })
    }
}

async function login(req, res) {
    try {
        let usuarioId = req.params.id;
        let usuarioPassword = req.params.password;
        let usuario = await Usuario.findById(usuarioId)
        if(usuarioPassword === usuario.password){
            res.status(200).send({ accion: 'get login', datos: usuario })
        }else{
            res.status(401).send({ accion: 'get login', mensaje: `contraseñas no coinciden ${err}` })
        }
    } catch (err) {
        res.status(500).send({ accion: 'get login', mensaje: `error al obtener al usuario ${err}` })
    }
}


async function logout(req, res) {
    const usuario = new Usuario(req.body)
    usuario._id = undefined;
    console.log(req.body)
    try {
        let usuarioADesloguear = await usuario.send()
        res.status(200).send({ accion: 'save', datos: usuarioADesloguear })
    } catch (err) {
        res.status(500).send({ accion: 'save', mensaje: `error al desloguear usuario ${err}` })
    }
}



module.exports = { getAll, getById, insert, remove, update, login, logout }
