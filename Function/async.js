var fs = require('fs')

console.log('Asynchrounous');
fs.readFile('about.txt',function(err,res){
    if (err){
        console.log("error",err)
    }
    else{
        console.log(res.toString())    
    }
})
console.log('this file is not read')

// Asynchronuous function


// append and read async
// data ='\n dayataaaaaa'
// fs.appendFile('about.txt',data,'utf8',function(err){
//     if (err) throw err;{
//         console.log("data append sucesssfuly \n")
//         // console.log(err)
//     }
// })
// fs.readFile('about.txt',(err,res)=>{
//     if (err) {
//         // console.log(err)
//     }
//     console.log(res.toString())

// })
// console.log('does not read')



//rename the file. 

// fname()
// fs.rename('about.txt','alter.txt',()=>{
//     console.log('Rename the file');
// })

// function fname(){
//     console.log('\n current file:')
//     fs.readdirSync(__dirname).forEach (e =>{
//         console.log(e)
//     })
// }
