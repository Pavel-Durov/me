import React from 'react';
import logo from './logo.svg';
import './App.css';

function NavBar() {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <a className="navbar-brand">Pavel Durov</a>

    <div className="container">
      <ul className="collapse navbar-collapse collapse nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home">
            home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="publications-tab" data-toggle="tab" href="#publications" role="tab"
            aria-controls="publications">
            publications</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="cv-tab" data-toggle="tab" href="#cv" role="tab" aria-controls="publications">
            cv</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="talks-tab" data-toggle="tab" href="#talks" role="tab"
            aria-controls="contact-me">talks</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="talks-tab" data-toggle="tab" href="#projects" role="tab"
            aria-controls="contact-me">projects</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" id="contact-me-tab" data-toggle="tab" href="#contact-me" role="tab"
            aria-controls="contact-me">contact</a>
        </li>


      </ul>
    </div>
  </div>
  );
}

export default NavBar;
