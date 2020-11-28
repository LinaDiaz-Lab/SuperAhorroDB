const mongoose = require('mongoose')

const usuarioSquema = new mongoose.Schema({
    nombre: String,
    ocupacion: String,
    correo: String,
    contrasena: String
})

const usuarios = mongoose.model('usuarios', usuarioSquema)

module.exports = usuarios