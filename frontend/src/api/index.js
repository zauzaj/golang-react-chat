var socket = new WebSocket("ws://localhost:8080/ws")

let connect = cb => {
  console.log("Attepmpting Connection...")

  socket.onopen = () => {
    console.log('Successfully connected...')
  }

  socket.onmessage = msg => {
    console.log(msg)
    cb(msg)
  }

  socket.onclose = event => {
    console.log("Socket Closed Connection", event)
  }

  socket.onerror = error => {
    console.log("Socket error", error)
  }
}

let sendMsg = msg => {
  console.log("sending msg", msg)
  socket.send(msg)
}

export { connect, sendMsg }

