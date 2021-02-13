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
	// Create resolver
	r := mux.NewRouter()
	var srv http.Handler = handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{Conn: db}}))
	var playgroundHandler http.Handler = playground.Handler("GraphQL playground", "/query")
	r.HandleFunc("/", playgroundHandler.ServeHTTP)
	r.HandleFunc("/query", srv.ServeHTTP)

	// Run
	fmt.Println("Running server on port 8080")
	http.ListenAndServe(":8080", r)

}
