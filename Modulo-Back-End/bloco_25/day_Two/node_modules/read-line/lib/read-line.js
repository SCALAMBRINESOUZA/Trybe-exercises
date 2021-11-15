/*
 * read-line
 * https://github.com/jordancalder/read-line
 *
 * Copyright (c) 2015 Sterling Jordan Calder
 * Licensed under the MIT license.
 */

'use strict'

var read_line = require('stream').Transform( { objectMode : true } )

read_line._transform = function (chunk, encoding, callback) {
     var data = chunk.toString()
     if (this._last) data = this._last + data

     var lines = data.split('\n')
     this._last = lines.splice(lines.length-1,1)[0]

     lines.forEach(this.push.bind(this))
     callback()
}

read_line._flush = function (callback) {
     if (this._last) this.push(this._last)
     this._last = null
     callback()
}

module.exports = read_line