const mongoose = require('mongoose')
const { MONGODB } = require('./config')

// Conectarse
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })

// La propiedad connection me avisará si la conexión es posible o NO
const db = mongoose.connection

// Esta linea me dirá si hay un problema al conectarme
db.on('error', console.error.bind(console, 'connection error:'))

// Esta linea me dirá si he logrado conectarme
db.once('open', function() {
  console.log('Conectado a la base de datos.')
})


//mongodb+st://lina:oqIFpVmvqgtXlUv9@bit-shard-00-00.zp8cy.mongodb.net:27017,bit-shard-00-01.zp8cy.mongodb.net:27017,bit-shard-00-02.zp8cy.mongodb.net:27017/superAhorro?ssl=true&replicaSet=atlas-a3hu84-shard-0&authSource=admin&retryWrites=true&w=majority