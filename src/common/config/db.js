'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '',
      database: 'router',
      user: 'root',
      password: 'root',
      prefix: 'wifi_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};