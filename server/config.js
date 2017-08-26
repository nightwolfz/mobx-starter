const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
const root = (dir) => path.resolve(__dirname, '..', dir)

// We need these globals to fetch data on server-side
global.HOSTNAME = 'localhost'
global.PORT = 2000

export default {
  http: {
    port: global.PORT,
    hostname: global.HOSTNAME,
    favicon: path.join(__dirname, '../src/assets/favicon.ico'),
    static: {
      //'/build': root('build'),
      '/assets': root('src/assets')
    }
  },
  server: {
    DEV: !isProduction,
    SSR: false // Server side rendering
  },
  session: {
    salt: 'SUPER_SALTY_YES?',
    secret: 'SUPER_SECRET_KEY_KERE',
    expires: 4 * 3600 * 1000 // 4 hours
  },
  databases: {
    mongo: 'mongodb://127.0.0.1:27017/mobx-starter'
  }
}
