package main

import (
  "fmt"
  "net/http"

  "github.com/zauzaj/multi-client-chat/backend/pkg/websocket"
)

func serveWs(w http.ResponseWriter, r *http.Request) {
  ws, err := websocket.Upgrade(w, r)
  if err != nil {
    fmt.Println(w, "%+ V\n", err)
  }

  go websocket.Writter(ws)
  websocke.Reader(ws)
}

func setupRoutes() {
  http.HandleFunc("/ws", serveWs)
}

func main() {
  fmt.Println("Chat app v0.01")
  setupRoutes()
  http.ListenAndServe(":8080", nil)
}
