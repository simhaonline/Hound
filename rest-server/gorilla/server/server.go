package server

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

type Server struct {
	Router *mux.Router
	DB     *sql.DB
}

func (s *Server) Initialize(user, password, dbname string) {
	connectionString := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable", user, password, dbname)
	fmt.Println("message from package server")
	var err error
	s.DB, err = sql.Open("postgres", connectionString)
	if err != nil {
		fmt.Println("error on open connection")
		log.Fatal(err)

	}

	s.Router = mux.NewRouter()
	err = s.DB.Ping()
	if err != nil {
		fmt.Println("error initializing db")
	}
	log.Println("Database connection established")

}

func (s *Server) Run(addr string) {}
