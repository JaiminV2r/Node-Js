const http = require("http")
const url = require("url")
const server = http.createServer((req,res)=>{
    res.writeHead(200,("content-type","text/html"))
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);

    const uname = queryObject.uname;
    const upwd = queryObject.upwd;
    uname === "" && upwd === "" ? res.write("<h1> Login Success </h1>") : res.write("<h1> Login Failed </h1>");
    res.end();
})
server.listen(7896,()=>{
    console.log("Port 7896 successfully listen..")
})