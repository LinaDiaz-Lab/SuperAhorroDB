const usuario = require('../modelos/usuario');
const { crearToken } = require('../utilidades/autenticacionUsuario');

var controller = {

    test: (req, res) => {

       return res.status(200).send("Método de Prueba controlador usuario");
    },
    create: (req, res) =>{
        var params = req.body;
        const nuevoUsuario = new usuario(params)
        nuevoUsuario.save((error, usuarioRegistrado) => {

            if (error !== null) {
                res.status(500).send({ error: 'No pudimos almacenar el usuario', detalle: error })
            } else {
                res.status(200).send(usuarioRegistrado)
            }

        })
    },
    list: (req, res) => {
        usuario.find((error, clientes) => {

            if (error !== null) {
                res.status(500).send({ error: 'No hemos podido cargar los usuarios.' })
            } else {
                res.status(200).send(clientes)
            }
        
        })
    },
    find: (req, res) => {
        usuario.findOne({_id: req.params.id},(error, usuarios) => {
            if (error !== null) {
                res.status(500).send({ error: 'No hemos podido cargar los usuarios.' })
            } else {
                res.status(200).send(usuarios)
            }
        })
    },
    update: (req, res) => {

        usuario.updateOne({ _id: req.params.id }, req.body, (error, resultado) => {
            if (error !== null) {
                res.status(422).send(error)
            } else {
                res.send(resultado)
            }
        })
    },
    delete: (req, res) => {
        usuario.findByIdAndDelete({ _id: req.params.id }, (error, resultado) => {
            if (error !== null) {
                res.status(422).send(error)
            } else {
                res.send(resultado)
            }
        })
    },
    autenticacion:(req, res) => {
            usuario.findOne({
              correo: req.body.usuario,
              contrasena: req.body.contrasena
            }, (error, cliente) => {
              if (error) {
                res.status(500).send(error)
              } else if (cliente) { // Si el usuario es encontrado, deberíamos devolver la llave
                res.send({ jwt: crearToken(usuario) })
              } else { // Cuando el cliente esta vacio, es decir, cuando no se encontró
                res.status(401).send({ error: 'El correo o contraseña no son validos' })
              }
            })
    }
};

module.exports = controller;