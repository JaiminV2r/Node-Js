// writef.txt all data
var fs=require("fs")
fs.readFile("writef.txt","utf-8",function(error,data){
    if(data){
        console.log(data)
        fs.writeFile("writef1.txt",data,"utf-8",function(error1, data1){
            console.log("data Write in writef1.txt Successfully")
        })
    }
    else{
        console.log(error)
    }
})