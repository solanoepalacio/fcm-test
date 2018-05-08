'use strict'

const path = require('path')

const Koa = require('koa')
const mount = require('koa-mount')
const Logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static')

module.exports = function initApp () {
  const app = new Koa()

  app.use(Logger())

  app.use(bodyParser())


  const router = require('../routers')
  app.use(router.routes())

  app.use(serveDirectoryStatically('../client'))


  const port = process.env.port || 5000
  
  app.listen(5000)
  console.log('App is listening on port', port)
  console.log('==============================')

  return app
}


function serveDirectoryStatically (directory) {
  return mount('/', serve(path.join(__dirname, directory)))
}