//  Read file on server                                                                         -----------> 16/03/2022 <-----------
var http = require("http")
var fs = require("fs")

let app = http.createServer((req,res)=>{
    console.log("Request Received..")
    fs.readFile("writef.txt","utf-8",function(error,data){
        if(error){
            res.write(500)
            res.write("Unable to Read File.")
            res.write("Please try again Or Later")
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
})

app.listen(5055,()=>{
    console.log("Server Port 5055, Has Start Successfully...")
})