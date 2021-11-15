'use strict';

var read_line = require('../lib/read-line.js')

var fs = require('fs')
var input = fs.createReadStream(__dirname + '/test-file.txt')
input.pipe(read_line)
read_line.on('readable', function () {
     var line
     while (line = read_line.read()) {
          console.log(line)
     }
})