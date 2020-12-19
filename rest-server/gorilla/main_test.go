package main

import (
	"fmt"
	"github/lukajose/Photon/rest-server/gorilla/server"
	"log"
	"os"
	"testing"
)

var s server.Server

func TestMain(m *testing.M) {
	s.Initialize(
		"postgres",
		"postgres_password",
		"postgres")

	ensureTableExists()
	code := m.Run()
	os.Exit(code)
}

func ensureTableExists() {
	res, err := s.DB.QueryRow(tableCreationQuery)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Result:", res)
}

const tableCreationQuery = `SELECT count(*) FROM Users`
