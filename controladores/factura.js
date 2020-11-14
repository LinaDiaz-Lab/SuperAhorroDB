const factura = require('../modelos/factura');
//const {crearToken} = require('../utilidades/autenticacion');

var controller = {

    test: (req, res) => {

       return res.status(200).send("Método de Prueba controlador factura");
    },
    create: (req, res) =>{
        var params = req.body;
        const nuevaFactura = new factura(params)
        nuevaFactura.save((error, facturaRegistrada) => {

            if (error !== null) {
                res.status(500).send({ error: 'No pudimos almacenar la factura', detalle: error })
            } else {
                res.status(200).send(facturaRegistrada)
            }

        })
    },
    list: (req, res) => {
        factura.find((error, facturas) => {

            if (error !== null) {
                res.status(500).send({ error: 'No hemos podido cargar las facturas.' })
            } else {
                res.status(200).send(facturas)
            }
        
        })
    },
    find: (req, res) => {
        factura.findOne({_id: req.params.id},(error, facturas) => {
            if (error !== null) {
                res.status(500).send({ error: 'No hemos podido cargar las facturas.' })
            } else {
                res.status(200).send(facturas)
            }
        })
    },
    update: (req, res) => {

        factura.updateOne({ _id: req.params.id }, req.body, (error, resultado) => {
            if (error !== null) {
                res.status(422).send(error)
            } else {
                res.send(resultado)
            }
        })
    },
    delete: (req, res) => {
        factura.findByIdAndDelete({ _id: req.params.id }, (error, resultado) => {
            if (error !== null) {
                res.status(422).send(error)
            } else {
                res.send(resultado)
            }
        })
    }, 
       
    
};

module.exports = controller;
