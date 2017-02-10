// import http from '../xhr'
var http = require('../xhr')

export default {
  register (params, cb) {
    var url = '/api/user'
    http.get(url, params, cb)
  },

  login (params, cb) {
    let url = '/api/login'
    http.post(url, params, cb)
  },

  auth (params, cb) {
    let url = '/api/auth'
    http.get(url, {token: params}, cb)
  }
}

exports.register = {
  add: function (params, cb) {
    var url = '/api/user'
    http.get(url, params, cb)
  }
}
