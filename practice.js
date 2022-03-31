// Node js practice                                  
//                              ---------- > Lesson 1 < ----------          ---------- > 24/03/2022 < ----------
// const name = "jaimin";
// console.log("name: ",name)

//                              ---------- > Lesson 2 < ----------          ---------- > 24/03/2022 < ----------
// const fullname = (name)=>{               // funcvtion defination
//     console.log("name : ", name)         // name : jaimin
// }
// fullname("jaimin")                       // call function

// const fullname = (name)=>{                  // function defination
//     console.log(`name : ${name}`)           // name : hardik
// }
// fullname("hardik")                          // call function

//                                                              ---------- > Global Object < ----------
//      window
//      setTimeout
//      setInterval

//                                                              ---------- > setTimeout() < ----------
// setTimeout(() => {
//     console.log("This is in setTimeout")
//     clearInterval(stop)
// }, 5000);

//                                                              ---------- > setInterval() < ----------
// const stop = setInterval(()=>{
//     console.log("This is in setInterval")
// },1000)


//  "__dirname" is give the path of directory
// console.log("__dirname : ",__dirname)               // __dirname :  e:\Micra work\Node Js (Micra)

//  "__filename" is give the path of directory with file name
// console.log("__filename : ",__filename)             // __filename :  e:\Micra work\Node Js (Micra)\practice.js



//                                                              ---------- > Modules & Require < ----------

// const abc= require('./practice2')               // "./practice2" is a local module
// console.log("abc is : ",abc)                    // abc is :  {}


//  ----- > After using 'exports module' in "practice2"
// const abcd = require('./practice2')
// console.log("abcd is :",abcd)                   // abcd is : [ 'apple', 'banana', 'watermelon', 'gwawa' ]


// ----- > After using objects on 'exports module' in "practice2"
// const abcd = require('./practice2')
// console.log("abcd is :", abcd)
        // abcd is: {
        //     fruits: ['apple', 'banana', 'watermelon', 'gwawa'],
        //     price: [200, 50, 30, 150]
        // }

// console.log(abcd.fruits)                         // [ 'apple', 'banana', 'watermelon', 'gwawa' ]
// console.log(abcd.price)                          // [ 200, 50, 30, 150 ]

// const {fruits, price} = require("./practice2")
// console.log(fruits, price)

//                                                              ---------- > OS Module< ----------
// const os = require("os")
// console.log(os.platform())                          // win32
// console.log(os.homedir())                           // C:\Users\HP
// console.log(os.hostname())                          // JAIMIN-DESKTOP-1S5784C
// console.log(os.tmpdir())                            // C:\Users\HP\AppData\Local\Temp
// console.log(os.version())                           // Windows 10 Pro
// console.log(os.release())                           // 10.0.19043
// console.log(os.arch())                              // x64
// console.log(os.endianness())                        // LE                       // Posible value are : 'BE' & 'LE'
// console.log(os.getPriority())                       // 0
// console.log(os.loadavg())                           // [0,0,0]                  //  On Windows, the return value is always [0, 0, 0]
// console.log(os.networkInterfaces())
// console.log(os.totalmem())
// console.log(os.type())                              // Windows_NT
// console.log(os.uptime())