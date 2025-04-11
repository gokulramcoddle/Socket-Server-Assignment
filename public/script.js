const socket = io();
       function sendMessage(){
        const message = document.getElementById("messageInput").value;
        socket.emit("message",message);
        document.getElementById("messageInput").value = "";
       }

      socket.on("message", (msg)=>{
        const li = document.createElement("li");
        li.innerText = msg;
        document.getElementById("messages").appendChild(li);
      }) 