const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rutasClientes = require('./rutas/cliente')
const rutasFacturas = require('./rutas/factura')
const rutasProductos = require('./rutas/producto')
const rutasUsuarios = require('./rutas/usuario')

require('./baseDeDatos')

app.use(bodyParser.json())

app.use('/api/clientes', rutasClientes)
app.use('/api/facturas', rutasFacturas)
app.use('/api/productos', rutasProductos)
app.use('/api/usuarios', rutasUsuarios)
app.use('/imagenes', express.static('imagenes'))


app.listen(3000, () => {
  console.log('¡El servidor ha sido encendido!')
})
