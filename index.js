const http = require("http");
const WebSocketServer = require("websocket").server
var connection = null;

const httpserver = http.createServer((req, res) =>{
    console.log("we have received a request");
})

const websocket = new WebSocketServer({
    "httpServer" : httpserver
});

//let connection = null;

httpserver.listen(8080,()=>console.log("My server is listeing on port 8080"))

websocket.on("request", (request) => {
    connection = request.accept(null, request.origin)
    connection.on("open", e =>console.log("Opened !!!"))
    connection.on("close", e =>console.log("Closed !!!"))
    connection.on("message", message => {
        console.log(`Recieved message ${message.utf8Data}`);
    });

    sendevery5seconds();
});


function sendevery5seconds(){
    connection.send(`Message ${Math.random()}`);
    setTimeout(sendevery5seconds, 5000);

}