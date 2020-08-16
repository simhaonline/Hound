package main

import (
	echo"github.com/lukajose/GoSpy/proto/echo"
	"net"
	"fmt"
	"context"
	grpc "google.golang.org/grpc"
)

type EchoServer struct {}

func (e * EchoServer) Echo(ctx context.Context, req *EchoRequest) (*EchoRequest, error) {
	return &echo.EchoResponse{Response:"MyEcho: " + req.Message},nil
}

func check (e *Error) {
	if e != nil {
		panic(e)
	}
}

func main () {
	list, err := net.Listen("tcp",":8080")
	check(err)
	s := grpc.NewServer()
	srv := &EchoServer{}

	echo.RegisterEchoServer(s,srv)
	err = s.Serve(lst)
	fmt.Println("Now serving at port 8080")
	check(err)
}