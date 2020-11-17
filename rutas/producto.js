const express = require('express')
const enrutador = express.Router()
const controladorproducto = require('../controladores/producto')
const {middleAuthorization} = require('../utilidades/autenticacionUsuario')
const multer = require('multer')
const middleImagenes = multer({ dest: 'imagenes/' })


enrutador.get('/list',controladorproducto.list)
enrutador.post('/create',middleAuthorization,middleImagenes.single('urlImg'),controladorproducto.create)
enrutador.get('/find/:id',controladorproducto.find)
enrutador.put('/update/:id',middleAuthorization,controladorproducto.update)
enrutador.delete('/delete/:id',middleAuthorization,controladorproducto.delete)

module.exports = enrutador