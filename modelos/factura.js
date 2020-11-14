const mongoose = require('mongoose')

const facturaSquema = new mongoose.Schema({
    fecha: Date,
    idCliente: Object,
    detalle: [
        {
            idProducto: String,
            precioUnitario: Number,
            cantidad: Number,
            total: Number
        }
    ],
    total: Number,
    iva: Number,
    totalIva: Number,
    idDireccion: String,
    mediodePago: String
})

const facturas = mongoose.model('facturas', facturaSquema)

module.exports = facturas