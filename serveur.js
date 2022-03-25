
let http = require('http')

let fs = require('fs')

let url = require('url')

const EventEmitter = require('events');

let App = {
    start: function(port) {

        let emmitter = new EventEmitter()
        let server = http.createServer((request, response) => {

            response.writeHead(200, {
                'content-type': 'text/html; charset=utf-8'
            })

            if (request.url === '/') {

                emmitter.emit('root', response)

            }

            response.end()

        }).listen(port)

        return emmitter

    }
}

let app = App.start(80)
app.on('root', function(response) {
    response.write('je suis à la racine')
})

/*
let server =http.createServer()

server.on('request', (request, response) => {

    response.writeHead(200)

    let query = url.parse(request.url, true).query

    let name = query.name === undefined ? 'anonyme': query.name
    
    fs.readFile('index.html', 'utf8', (err, data) => {

        if (err) {

            response.writeHead(404)

            response.end("Ce fichhier n'existe pas")

        } else {

            response.writeHead(200, {

                'content-type': 'text/html; charset=utf-8'
            })

            data = data.replace('{{ name }}', name)

            response.end(data)
        }
    })
    

    fs.readFile('index.html', (err, data) =>  {
        if (err) {

            response.writeHead(404)

            response.end("Ce ficher n'existe pas")

        } else {

            response.writeHead(200, {
                'content-type' : 'text/html; charset=utf-8'
            })
            response.end(data)

        }

  
      })
      

    })


server.listen(80)

*/
