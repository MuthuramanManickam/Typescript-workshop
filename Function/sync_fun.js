var fs = require('fs')


var data = fs.readFileSync('async_fun.js')
console.log(data);
console.log(data.toString())
// read file 


// sync is single thread operation .
// one operation or programs run at a time.



var fs = require('fs')

var data = 'muthtrajmsrxfchgj' 
fs.appendFileSync('async_fun.js',data,'utf8')
console.log('app sucess')

var data = fs.readFileSync('sync_fun.js')
console.log(data);
console.log(data.toString())

// append a data