const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    marca: String,
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    cantInventario: Number,
    urlImg: String
  })

const productos = mongoose.model('productos', productoSchema)

module.exports = productos