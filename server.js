
const http = require('http')
const port = 3000
const fetch = require('node-fetch')

const requestHandler = (request, response) => {
fetch('https://cms.splendidtable.org/api/home')
    .then(res => res.json())
    .then(json => {
      response.setHeader('Content-Type', 'text/plain')
      response.end(`${json['field_top_row_of_4'][0].title}`)
    } );
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
