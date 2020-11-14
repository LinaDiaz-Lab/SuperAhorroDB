const cliente = require('../modelos/cliente');
const { crearToken } = require('../utilidades/autenticacionCliente');

var controller = {

    test: (req, res) => {

       return res.status(200).send("Método de Prueba controlador Cliente");
    },
    create: (req, res) =>{
        var params = req.body;
        const nuevoCliente = new cliente(params)
        nuevoCliente.save((error, clienteRegistrado) => {

            if (error !== null) {
                res.status(500).send({ error: 'No pudimos almacenar el cliente', detalle: error })
            } else {
                res.status(200).send(clienteRegistrado)
            }

        })
    },
    list: (req, res) => {
        cliente.find((error, clientes) => {

            if (error !== null) {
                res.status(500).send({ error: 'No hemos podido cargar los clientes.' })
            } else {
                res.status(200).send(clientes)
            }
        
        })
    },
    find: (req, res) => {
        cliente.findOne({_id: req.params.id},(error, clientes) => {
            if (error !== null) {
                res.status(500).send({ error: 'No hemos podido cargar los clientes.' })
            } else {
                res.status(200).send(clientes)
            }
        })
    },
    update: (req, res) => {

        cliente.updateOne({ _id: req.params.id }, req.body, (error, resultado) => {
            if (error !== null) {
                res.status(422).send(error)
            } else {
                res.send(resultado)
            }
        })
    },
    delete: (req, res) => {
        cliente.findByIdAndDelete({ _id: req.params.id }, (error, resultado) => {
            if (error !== null) {
                res.status(422).send(error)
            } else {
                res.send(resultado)
            }
        })
    },
    autenticacion:(req, res) => {
            cliente.findOne({
              usuario: req.body.usuario,
              contrasena: req.body.contrasena
            }, (error, cliente) => {
              if (error) {
                res.status(500).send(error)
              } else if (cliente) { // Si el cliente es encontrado, deberíamos devolver la llave
                res.send({ jwt: crearToken(cliente) })
              } else { // Cuando el cliente esta vacio, es decir, cuando no se encontró
                res.status(401).send({ error: 'El correo o contraseña no son validos' })
              }
            })
    }
};

module.exports = controller;