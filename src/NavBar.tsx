import { Outlet, Link } from "react-router-dom";
import "./App.css";

function NavBar() {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <a className="navbar-brand">Pavel Durov</a>

      <div className="container">
        <ul
          className="collapse navbar-collapse collapse nav nav-tabs"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item">
            <a href={`/`} className="nav-link">
              home
            </a>
          </li>
          <li className="nav-item">
            <a href={`/publications`} className="nav-link">
              {" "}
              publications
            </a>
          </li>
          <li className="nav-item">
            <a href={`./cv`} className="nav-link">
              cv
            </a>
          </li>
          <li className="nav-item">
            <a href={`/talks`} className="nav-link">
              talks
            </a>
          </li>
          <li className="nav-item">
            <a href={`/projects`} className="nav-link">
              projects
            </a>
          </li>

          <li className="nav-item">
            <a href={`/contact`} className="nav-link">
              contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
