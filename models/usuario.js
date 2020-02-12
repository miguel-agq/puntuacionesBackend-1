let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UsuarioSchema = Schema(
    {
        _id: {type: Schema.ObjectId, auto:true},
        nombre: String,
        email: {type:String, required:true},
        password: {type:String, required:true, min:4},
        sexo: String,
        activado: Boolean,
        rol: String,
        puntuaciones: [{type: Schema.ObjectId, ref:'Score'}]
    }
)


module.exports = mongoose.model('User', UsuarioSchema)