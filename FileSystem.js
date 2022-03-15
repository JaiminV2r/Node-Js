//      ------------>  writeFile Method                                                                                  --------> 15/03/2022 <--------
// var fs = require("fs")
// fs.writeFile("writef.txt","I am jaimin 2","utf-8",write)

// function write(error){
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("Write file successfuly create!")
//     }
// }

//      -------------> writeFileSync Method                                                                             ---------> 15/03/2022 <--------
// var fs = require("fs")
// fs.writeFileSync("writef.txt","Jaimin is here", "utf-8", function(error,data){
//     console.log(data)
// })

//      -------------> readFile Method                                                                                  ---------> 15/03/2022 <--------
// var fs = require("fs")
//  fs.readFile("writef.txt","utf-8",function(error,data){
//     console.log(data)
// })


//      -------------> readFileSyncMethod                                                                               ---------> 15/03/2022 <---------
// var fs = require("fs")
// var a =fs.readFileSync("writef.txt","utf-8")
// console.log(a)

//      -------------> rename Method                                                                                    ---------> 15/03/2022 <---------
// var fs = require("fs")
// fs.rename("readf.txt","writef.txt",function(error,data){
//     console.log("Rename Successfully..!")
// })

//      --------------> unlink Method                                                                                   ---------> 15/03/2022 <---------
// var fs= require("fs")
// fs.unlink("writef2.txt",function(error,data){
//     console.log("writef2.txt file has successfully deleted...!")
// })