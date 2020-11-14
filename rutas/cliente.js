const express = require('express')
const enrutador = express.Router()
const controladorCliente = require('../controladores/cliente')
const {middleAuthorization} = require('../utilidades/autenticacionCliente')


enrutador.get('/list',middleAuthorization,controladorCliente.list)
enrutador.post('/create',controladorCliente.create)
enrutador.get('/find/:id',middleAuthorization,controladorCliente.find)
enrutador.put('/update/:id',middleAuthorization,controladorCliente.update)
enrutador.delete('/delete/:id',middleAuthorization,controladorCliente.delete)
enrutador.post('/autenticacion',controladorCliente.autenticacion)


module.exports = enrutador