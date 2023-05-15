// let fs = require("fs")
// fs.readFile(process.argv[1],'utf8',(err,data)=>{
//   if (err) {
//     console.log(err);
//   }
//   let line = data.toString().split("\n").length-1;
//   console.log(line);
// })


let fs = require('fs')
// const buffer = process.argv[2]
fs.readFile(process.argv[1],'utf8',(err,data)=>{
    if(err){
        console.log(err);
        // return;
    }
  let lines=data.toString().split('/n').length;
  console.log(lines);
})  