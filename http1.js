//  Create Server                                                                           ----------> 16/03/2022 <----------
var http= require("http")
var server = http.createServer((req, res)=>{
    console.log("Request Recieved...");
    res.setHeader("content-type", "text/html");
    res.write("Hello");
    res.write("<h1> Hello, I am Jaimin</h1>");
    res.write("<h2> Can I Help You?</h2>");
    res.write("Request Url : "+req.url)
    res.write("Request Method"+req.method);
    res.end();
});

server.listen(5050, ()=>{
    console.log("Server port number 5050 Listening Successfully!...")
});