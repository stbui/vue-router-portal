import http from '../xhr'

export default {
  register (params, cb) {
    var url = '/api/user'
    http.get(url, params, cb)
  }
}

exports.register = {
  add: function (params, cb) {
    var url = '/api/user'
    http.get(url, params, cb)
  }
}
