package main

import (
	"fmt"
	"github/lukajose/Photon/rest-server/gorilla/server"
	"github/lukajose/Photon/rest-server/gorilla/users"
)

func main() {
	// Create a postgresql connection with mux server
	s := server.Server{}
	// Initialize connection to postgresql
	s.Initialize(
		"postgres",
		"postgres_password",
		"postgres")
	// query all users with admin access example
	u := users.User{PermType: 1}
	usersQ, _ := u.GetUsers(s.DB, 10)
	fmt.Println("users:", usersQ)
	// insert new user into database
	newu := users.User{
		FirstName:    "Go",
		LastName:     "Lang",
		Email:        "go@gmail.com",
		HashPassword: "hashpassneeded",
		PermType:     1,
	}
	newu.CreateUser(s.DB)
	// Query again to check it worked
	usersQ, _ = newu.GetUsers(s.DB, 10)
	fmt.Println("users:", usersQ)
	s.Run(":8010")
}
