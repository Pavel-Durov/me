import { CodeSnippet } from 'model'

export const codeSnippets: CodeSnippet[] = [
  {
    title: 'Js: All Promises',
    language: 'javascript',
    text: `(async function () {
    const intervalPromise = new Promise((resolve) =>
      setInterval(function () {
        console.log("interval 2000");
      }, 2000)
    );
    const timeoutPromise = new Promise((resolve) =>
      setTimeout(function () {
        console.log("timeout 1000");
        resolve(true);
      }, 1000)
    );
    const result = await Promise.race([intervalPromise, timeoutPromise]);
    console.log({ result });
  })();  
`
  },
  {
    title: 'Go: Channel Ping Pong',
    language: 'go',
    text: `package main

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
    `
  }

]
