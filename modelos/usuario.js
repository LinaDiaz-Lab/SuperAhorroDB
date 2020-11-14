const mongoose = require('mongoose')

const usuarioSquema = new mongoose.Schema({
    correo: String,
    contrasena: String
})

const usuarios = mongoose.model('usuarios', usuarioSquema)

module.exports = usuarios