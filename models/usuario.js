let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsuarioSchema = Schema(
    {
        _id: { type: Schema.ObjectId, auto: true },
        nombre: String,
        email: String,
        password: String
    }
)


module.exports = mongoose.model('Player', UsuarioSchema)