node.js web sockets test  
install node.js on your computer  
on the server run  
npm init -y  
npm install websocket  

on the client now run  

let ws = new WebSocket("ws://localhost:8080")
ws.onmessage = message => console.log(`we recieved a message from server ${message.data}`)
ws.send("hello server")