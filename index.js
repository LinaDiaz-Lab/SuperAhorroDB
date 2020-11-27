const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

require('./baseDeDatos')
//rutas
const rutasClientes = require('./rutas/cliente')
const rutasFacturas = require('./rutas/factura')
const rutasProductos = require('./rutas/producto')
const rutasUsuarios = require('./rutas/usuario')
const {PORT} = require('./config')

app.use(cors())
app.use(bodyParser.json())

//rutas, servidor
app.use('/api/clientes', rutasClientes)
app.use('/api/facturas', rutasFacturas)
app.use('/api/productos', rutasProductos)
app.use('/api/usuarios', rutasUsuarios)
app.use('/imagenes', express.static('imagenes'))


app.listen(PORT, () => {
  console.log(`Aplicacion corriendo en http://localhost:${PORT}`)
})
