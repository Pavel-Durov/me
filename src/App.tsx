import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  // Routes, //replaces "Switch" used till v5
  // Route,
} from "react-router-dom";

import "./App.css";

import NavBar from "./NavBar";

import "./js/bootstrap.bundle";

import "./css/bootstrap.css";
import { Home } from "./routes/home";
import { Error } from "./routes/error";
import { Cv } from "./routes/cv";
import {BrowserRouter} from "react-router-dom";


/**
 * https://github.com/remix-run/react-router/blob/main/docs/start/tutorial.md
 */
const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/cv",
    element: <Cv />,
  },
]);

export default class App extends React.Component {
  componentDidMount(): void {
    console.log("componentDidMount");
  }
  render() {
    return (
      // <React.StrictMode>

      
      // <BrowserRouter>
      <div>
        <div className="App">
          <NavBar />  
          <section className="row">
          </section>
          <section className="row">
            <RouterProvider router={router} />
          </section>
        </div>
        </div>
        // </BrowserRouter>
      // </React.StrictMode>
    );
  }
}
