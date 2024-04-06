// # express conn 
const express = require("express");

// python - cursor. app 변수 = client
// port = 사용할 포트 번호
// http://localhost:3000
const app = express();
const port = 3000;

// json 사용
app.use(express.json());

// api mapping '/' = home. 초기 접속 화면
// res = response.
app.get('/', (req, res) =>
{
    res.send('<h2> welcome to server</h2>')
});

// listen. 
app.listen(port, () =>
{
    console.log(`server 실행됨 "${port}`);
});

const http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Hello. Welcome to my homepage')
    res.end();
}).listen(3000, function(){
    console.log("Server response : http://localhost:8000");
})