const producto = require('../modelos/producto');
//const {crearToken} = require('../utilidades/autenticacion');

var controller = {

    test: (req, res) => {

       return res.status(200).send("Método de Prueba controlador producto");
    },
    create: (req, res) =>{
        var params = req.body;
        const nuevoproducto = new producto(params)

        nuevoproducto.urlImg = `${req.protocol}://${req.get('host')}/${req.file.destination}${req.file.filename}`

        nuevoproducto.save((error, productoRegistrado) => {
            if (error !== null) {
                res.status(500).send({ error: 'No pudimos almacenar el producto', detalle: error })
            } else {
                res.status(200).send(productoRegistrado)
            }
        })
    },
    list: (req, res) => {
        producto.find((error, productos) => {

            if (error !== null) {
                res.status(500).send({ error: 'No hemos podido cargar los productos.' })
            } else {
                res.status(200).send(productos)
            }
        
        })
    },
    find: (req, res) => {
        producto.findOne({_id: req.params.id},(error, productos) => {
            if (error !== null) {
                res.status(500).send({ error: 'No hemos podido cargar los productos.' })
            } else {
                res.status(200).send(productos)
            }
        })
    },
    update: (req, res) => {

        producto.updateOne({ _id: req.params.id }, req.body, (error, resultado) => {
            if (error !== null) {
                res.status(422).send(error)
            } else {
                res.send(resultado)
            }
        })
    },
    delete: (req, res) => {
        producto.findByIdAndDelete({ _id: req.params.id }, (error, resultado) => {
            if (error !== null) {
                res.status(422).send(error)
            } else {
                res.send(resultado)
            }
        })
    }
};

module.exports = controller;