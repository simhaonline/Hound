package main

import (
	"google.golang.org/grpc"
	"github.com/lukajose/GoSpy/proto/echo"
	"context"
	"fmt"	
)

func main() {
	ctx := context.Background()
	conn, err := grpc.Dial("localhost:8080",grpc.WithInsecure())
	if err != nil {
		panic(err)
	}
	defer conn.Close()
	e := echo.NewEchoServerClient(conn)
	resp,err := e.Echo(ctx, &echo.EchoRequest{
		Message:"Hello World!!!",
		SendBy:"Luka",
	})
	if err != nil {
		panic(err)
	}
	fmt.Println("Got from server response:",resp)
}