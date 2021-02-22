// package main

// import (
// 	"fmt"
// 	"github/lukajose/Photon/rest-server/gorilla/server"
// 	"github/lukajose/Photon/rest-server/gorilla/users"
// )

// func main() {
// 	// Create a postgresql connection with mux server
// 	s := server.Server{}
// 	// Initialize connection to postgresql
// 	s.Initialize(
// 		"postgres",
// 		"postgres_password",
// 		"postgres")
// 	// query all users with admin access example
// 	u := users.User{PermType: 1}
// 	usersQ, _ := u.GetUsers(s.DB, 10)
// 	fmt.Println("users:", usersQ)
// 	// insert new user into database
// 	newu := users.User{
// 		FirstName:    "Go",
// 		LastName:     "Lang",
// 		Email:        "go@gmail.com",
// 		HashPassword: "hashpassneeded",
// 		PermType:     1,
// 	}
// 	newu.CreateUser(s.DB)
// 	// Query again to check it worked
// 	usersQ, _ = newu.GetUsers(s.DB, 10)
// 	fmt.Println("users:", usersQ)
// 	s.Run(":8010")
// }
package main

import (
	"fmt"
	"github/lukajose/Hound/rest-server/gorilla/websocket"
	"net/http"
	"strconv"
)

func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request, id int) {
	fmt.Println("WebSocket Endpoint Hit")
	conn, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
		ID:   strconv.Itoa(id),
	}

	pool.Register <- client
	client.Read()
}

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()
	id := 0
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		id += 1
		serveWs(pool, w, r, id)
	})
}

func main() {
	fmt.Println("Chat app running on port: 8081")
	setupRoutes()
	http.ListenAndServe(":8081", nil)
}
