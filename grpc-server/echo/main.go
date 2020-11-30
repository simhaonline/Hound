package main

import (
	"github.com/lukajose/GoSpy/proto/echo"
	"net"
	"fmt"
	"context"
	grpc"google.golang.org/grpc"
)

type EchoServer struct {}

func (e * EchoServer) Echo(ctx context.Context, req *echo.EchoRequest) (*echo.EchoResponse, error) {
	return &echo.EchoResponse{Response:"MyEcho: " + req.Message + " Sendby: " +req.SendBy},nil
}

func check (e error) {
	if e != nil {
		panic(e)
	}
}

func main () {
	lst, err := net.Listen("tcp",":8080")
	check(err)
	s := grpc.NewServer()
	srv := &EchoServer{}

	echo.RegisterEchoServerServer(s,srv)
	fmt.Println("Now serving at port 8080")
	err = s.Serve(lst)
	check(err)
}