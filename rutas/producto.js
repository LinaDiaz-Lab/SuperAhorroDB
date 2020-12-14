const express = require('express')
const enrutador = express.Router()
const controladorproducto = require('../controladores/producto')
const {middleAuthorization} = require('../utilidades/autenticacionUsuario')
const multer = require('multer')
const middleImagenes = multer({ dest: 'imagenes/' })
const subirImagenADropbox = require('../middleware/subirImagenADropbox')


enrutador.get('/list',controladorproducto.list)
enrutador.post('/create', middleImagenes.single('urlImg'),subirImagenADropbox, controladorproducto.create)//colocar autorizacion
enrutador.get('/find/:id',controladorproducto.find)
enrutador.put('/update/:id', subirImagenADropbox, controladorproducto.update)//colocar autorizacion
enrutador.delete('/delete/:id',middleAuthorization,controladorproducto.delete)

module.exports = enrutador