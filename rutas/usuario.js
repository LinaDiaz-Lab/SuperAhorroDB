const express = require('express')
const enrutador = express.Router()
const controladorUsuario = require('../controladores/usuario')
const {middleAuthorization} = require('../utilidades/autenticacionUsuario')


enrutador.get('/list',middleAuthorization,controladorUsuario.list)
enrutador.post('/create',controladorUsuario.create)
enrutador.get('/find/:id',middleAuthorization,controladorUsuario.find)
enrutador.put('/update/:id',middleAuthorization,controladorUsuario.update)
enrutador.delete('/delete/:id',middleAuthorization,controladorUsuario.delete)
enrutador.post('/autenticacion',controladorUsuario.autenticacion)


module.exports = enrutador