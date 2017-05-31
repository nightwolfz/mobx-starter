const path = require('path')

export default {
  http: {
    port: 2000,
    favicon: path.join(__dirname, '../src/assets/favicon.ico'),
    static: {
      '/build': path.join(__dirname, '../../build')
    }
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
