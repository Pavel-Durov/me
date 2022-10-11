import React from "react";
import logo from "./logo.svg";
import "./App.css";

import NavBar from "./NavBar";

// eslint-disable-next-line
import "./js/bootstrap.bundle";

import "./css/bootstrap.css";

export default class App extends React.Component {
  componentDidMount(): void {
    console.log('componentDidMount');
  } 
  render() {
    return(
      <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      ></script>
    

    </div>
    )
  }
}
