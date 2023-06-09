package main

import (
	"fmt"
	"time"
)

func ping(c chan string) {
	pongs := 0
	time.Sleep(time.Second * 2)
	for {
		c <- "ping"
		fmt.Println(<-c)
		if pongs == 2 {
			fmt.Printf("got %d pongs\n", pongs)
			break
		}
		pongs++
	}
}

func pong(c chan string) {
	for {
		fmt.Println(<-c)
		c <- "pong"
	}
}

func main() {
	c := make(chan string)
	go ping(c)
	go pong(c)
	var input string
	fmt.Scanln(&input)
}
