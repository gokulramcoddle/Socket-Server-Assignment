const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);

const socketRouter = require('./router/socketRouter');
const socketController = require('./controller/socketController')

app.use(express.static(path.join(__dirname,"./public")))
app.use('/', socketRouter);

const io = new Server(server);
socketController(io);

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
