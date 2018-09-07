import Koa from 'koa'
import bodyParser from 'koa-better-body'
import favicon from 'koa-favicon'
import convert from 'koa-convert'
import config from './config'
import context from './middleware/context'
import catcher from './middleware/catcher'
import render from './middleware/render'
import routes from './routes'

const app = new Koa()

// override koa's undocumented error handler
app.context.onerror = catcher

// Serve static files
const mount = require('koa-mount')
const serve = require('koa-static')
if (process.env.NODE_ENV !== 'production') {
  for(const [k, v] of Object.entries(config.http.static.dev)) {
    app.use(mount(k, serve(v, {index: false})))
  }
}else{
  for(const [k, v] of Object.entries(config.http.static.prod)) {
    app.use(mount(k, serve(v, {index: false})))
  }
}

// Middleware
app.use(favicon(config.http.favicon))
app.use(convert(bodyParser({
  formLimit: '200kb',
  jsonLimit: '200kb',
  bufferLimit: '4mb'
})))
app.use(context)

// Routes
app.use(routes.routes())
app.use(render)

app.listen(config.http.port, function() {
  console.info('Listening on port ' + config.http.port)
})