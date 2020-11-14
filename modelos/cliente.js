const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')
const Direccion = new mongoose.Schema({
    barrio: { type: String, required: true },
    ubicacion: { type: String, required: true }
})

const clienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: String,
    usuario: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true },
    direcciones: {type: [Direccion], required: true},
    telefono: String,
    tipoDoc: String,
    numDoc: String,
    fechaRegistro: Date
})

clienteSchema.plugin(uniqueValidator)
const clientes = mongoose.model('clientes', clienteSchema)

module.exports = clientes