
const http = require('http')
const port = 3000
const fetch = require('node-fetch')

const requestHandler = (request, response) => {
fetch('https://google.com/')
    .then(res => res.text())
    .then(body => {
      response.end(body)
    } );
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
