var debug = require('debug')('xxx')

module.exports = function () {
  log(__dirname)
}

function log (name) {
  debug(name)
}
