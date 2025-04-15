function socketController(socket,io){
console.log(`New connection established on ${socket.id}`)

socket.on("message" , (data)=>{
    console.log(`Message : ${data}`)
    io.emit("message", data)
})

socket.on("disconnect", ()=>{
 console.log("User disconnected...")
})
}

module.exports = socketController;