const dropbox = require('../utilidades/dropbox')
const fs = require('fs').promises

const subirCaratulaADropbox = (solicitud, respuesta, next) => {
  if (solicitud.file) {
    const parts = solicitud.file.originalname.split('.')
    const extension = parts[parts.length - 1]

    const localpath = `./${solicitud.file.destination}${solicitud.file.filename}`
    const path = `/${solicitud.file.filename}.${extension}`

    fs.readFile(localpath)
      .then((contents) => {
        dropbox.filesUpload({path: path, contents: contents})
          .then(function(response) {
            dropbox.sharingCreateSharedLinkWithSettings({path: path, settings: { requested_visibility: 'public', audience: 'public', access: 'viewer' }})
            .then(function(response) {
              solicitud.body.urlImg = response.result.url.replace('www.', 'dl.')
              next()
            })
            .catch(function(error) {
              console.error('Error creating shared link: ', error)
            })

            fs.unlink(localpath)
          })
          .catch(function(error) {
            console.error('Error uploading file: ', error)
          })
      })
      .catch(function(error) {
        console.error('Error reading local file: ', error)
      })
  }
}

module.exports = subirCaratulaADropbox