// Create Server                                                                ---------> 16/03/2022 <---------
var http=require('http');
var sever = http.createServer((req, res)=>{
    console.log("Request require...");
    res.write("Hello, I am Jaimin")
    res.write("Can I Help You?")
    res.end();
})
sever.listen(50505,()=>{
    console.log("Server, 50505 has started successfully")
})