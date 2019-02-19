const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const server = express()

app.prepare()
.then(() => {
  
  server.get('/', (req, res) => {
    res.redirect(301, '/pt-br');
  })

  server.get('/:lang', (req, res) => {
    const actualPage = '/'
    const queryParams = req.params 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/_next/*', (req, res) => {
    return handle(req, res)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})