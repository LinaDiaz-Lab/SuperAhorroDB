const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator')

const usuarioSquema = new mongoose.Schema({
    nombre: { type: String, required: true },
    ocupacion: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true, unique: true }
})

usuarioSquema.plugin(uniqueValidator)
const usuarios = mongoose.model('usuarios', usuarioSquema)

module.exports = usuarios