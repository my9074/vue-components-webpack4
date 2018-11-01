module.exports = (options, ctx) => {
  return {
    enhanceDevServer(app) {
      const proxy = require('koa2-proxy-middleware')
      app.use(proxy(options))
    }
  }
}
