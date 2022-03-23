const http = require("http")
const queryString = require("querystring")
const server = http.createServer((req, res)=>{
    res.writeHead(200,("content-type","text/html"))
    if(req.method == "POST"){
        var postparameter = "";
        req.on("data", function(data){
            postparameter = postparameter + data;
        });
        req.on("end", function(){
            var postdata = queryString.parse(postparameter);
            console.log("postdata : ",postdata)
            console.log("post uname : ", postdata.uname)
            console.log("post password :",postdata.upwd)
            if(postdata["uname"]=="skill" && postdata["upwd"] =="qode"){
                res.write("<h1> Login Successfully...!</h1>")
            }
            else{
                res.write("<h1>Login Failed, Please Try Again and Later...!</h1>")
            }
            res.end()
            console.log("post parameter : ",postparameter)
        })
    }
})
server.listen(4321,()=>{
    console.log("Succecfully listen port no : 1234")
})