var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    var path = url.parse(req.url, true).pathname;
    switch (path) {
        case '/' || '':
            console.log("dirname + path : ", __dirname+"/login.html")
            console.log("path : ",path)
            fs.readFile(__dirname+path, "utf-8", function (error, data) {
                if (error) {
                    res.writeHead(404);
                    res.write(error);
                    res.end();
                } else if(data){
                    if (req.method == "post") {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        var postparameter = "";
                        console.log("parameter pa : ",postparameter)
                        req.on("data", function (data) {
                            postparameter = postparameter + data;
                            console.log("parameter :",postparameter)
                            console.log("data", data)
                        });
                        req.on("end", function () {
                            var postdata = url.parse(postparameter);
                            if (postdata["uname"] == "skill" && postdata["upwd"] == "qode") {
                                res.write("<h1> Login Successfully...!</h1>")
                            }
                            else {
                                res.write("<h1>Login Failed, Please Try Again and Later...!</h1>")
                            }
                            res.end()
                            console.log("post parameter : ", postparameter)
                        })
                    }
                }
            });
            break;
        default:
            res.writeHead(404);
            res.write("<h1>Error - 404 : Not Found</h1>");
            res.end();
            break;
    }
});
server.listen(1234, () => {
    console.log("Port No: 1234, Successfully listen")
});