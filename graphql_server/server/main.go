package main

import (
	"database/sql"
	"fmt"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/ConDai/simpleGraphQL/graph"
	"github.com/ConDai/simpleGraphQL/graph/generated"
	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

const defaultPort = "8080"

// type Server struct {
// 	Router *mux.Router
// 	DB     *sql.DB
// }

func main() {

	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}
	// Connect to the database
	user := "postgres"
	pass := "postgres_password"
	dbname := "postgres"
	connectionString := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable", user, pass, dbname)

	db, err := sql.Open("postgres", connectionString)
	err = db.Ping()
	if err != nil {
		fmt.Println("error initializing db")
	}
	rows, err := db.Query("SELECT * FROM pg_aggregate")
	defer rows.Close()

	if err != nil {
		fmt.Println(err)
	}
	for rows.Next() {
		fmt.Println(rows)
	}

	// Create resolver
	r := mux.NewRouter()
	var srv http.Handler = handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{Conn: db}}))
	var playgroundHandler http.Handler = playground.Handler("GraphQL playground", "/query")
	r.HandleFunc("/", playgroundHandler.ServeHTTP)
	r.HandleFunc("/query", srv.ServeHTTP)

	// Run
	http.ListenAndServe(":8080", r)
	fmt.Println("Running server")
}

// func (s *Server) InitDB(user, password, dbname string) {
// 	connectionString := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable", user, password, dbname)
// 	fmt.Println("message from package server")

// 	// Select the driver and which database to connect to

// 	if err != nil {
// 		fmt.Println("error on open connection")
// 		log.Fatal(err)

// 	}
// 	s.Router = mux.NewRouter()
// 	err = s.DB.Ping()
// 	if err != nil {
// 		fmt.Println("error initializing db")
// 	}
// 	log.Println("Database connection established")

// }

// func (s *Server) InitMux() {
// 	var srv http.Handler = handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))
// 	var playgroundHandler http.Handler = playground.Handler("GraphQL playground", "/query")

// 	s.Router.HandleFunc("/", playgroundHandler.ServeHTTP)
// 	s.Router.HandleFunc("/query", srv.ServeHTTP)

// }

// func (s *Server) Run(addr string) {}
