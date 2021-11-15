# read-line [![Build Status](https://secure.travis-ci.org/jordancalder/read-line.png?branch=master)](http://travis-ci.org/jordancalder/read-line)

An implementation of readline for Nodejs

## Getting Started
Install the module with: `npm install read-line`

```javascript
var read_line = require('read-line')
var fs = require('fs')

var input = fs.createReadStream(__dirname + '/test-file.txt')
input.pipe(read_line)
read_line.on('readable', function () {
     var line
     while (line = read_line.read()) {
          console.log(line)
     }
})

```

## License
Copyright (c) 2015 Sterling Jordan Calder  
Licensed under the MIT license.
