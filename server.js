const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app)
app.use(express.static(path.join(__dirname,"./public")))

const io = new Server(server);

io.on("connection" , (socket)=>{
 console.log(`New connection established on ${socket.id}`)

 socket.on("message" , (data)=>{
    console.log(`Message : ${data}`)
    io.emit("message", data)
})

socket.on("disconnect", ()=>{
 console.log("User disconnected...")
})
})


server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
