const jwt = require('jwt-simple')
const moment = require('moment')
const SECRET = 'verdurasyfrutas'

const crearToken = (usuario) => {
    const payload = {
      id: usuario._id,
      correo: usuario.correo,
      fechaDeExpiracion: moment().add(1, 'day').unix()
    }
    return jwt.encode(payload, SECRET)
}
  
const validarAutorizacion = (authorization) => {
    const token = authorization.split(' ')[1]
    if (token) {
      try {
        const payload = jwt.decode(token, SECRET)
        if (payload.fechaDeExpiracion <= moment().unix()) {
          console.error('Este token ha expirado')
          return false
        }
        return true
      } catch (error) {
        console.error('Error al validar el token ', error)
      }
    }
    return false
}

const middleAuthorization = (solicitud, respuesta, siguiente) => {
    const authorization = solicitud.headers.authorization
  
    if (authorization && validarAutorizacion(authorization)) {
      siguiente()
    } else {
      respuesta.status(401).send({ mensaje: 'Debe autenticarse para poder realizar la acción' })
    }
  }
  
  module.exports = { crearToken, middleAuthorization, validarAutorizacion }