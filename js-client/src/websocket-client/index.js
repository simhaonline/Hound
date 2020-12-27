// api/index.js
var socket = new WebSocket("ws://localhost:8081/ws");

let connect = (setID) => {
  console.log("Attempting Connection...");

  socket.onopen = (e) => {
    console.log("Successfully Connected",e);
  };

  socket.onclose = event => {
    console.log("Socket Closed Connection: ", event);
  };

  socket.onerror = error => {
    console.log("Socket Error: ", error);
  };
};

let sendMsg = msg => {
  console.log("sending msg: ", msg);
  socket.send(msg);
};

let listenMsg = (setMessages,setID,currentMessages) => {
  console.log("enters socket listen")
  socket.onmessage = msg => {
    console.log("msg:",msg)
    const {body:newMsg,type,client }= JSON.parse(msg.data)
    if (type === 0) {
      setID(client)
      console.log("Client has id:",client)
    }
    console.log("newMsg:",newMsg)
    currentMessages?setMessages([...currentMessages,{data:newMsg,time:Date.now(),client,type}]):setMessages([{data:newMsg,time:Date.now(),client,type}]);
  }
}

export { connect, sendMsg, listenMsg };