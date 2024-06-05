import * as React from "react";
import ReactDOM from "react-dom";


export default function Home() {
  
  return (
    
   <>
      
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <title>Rocketspace Homework</title>
  {/* import the webpage's stylesheet */}
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  
  <div>
      <nav className="navbar fixed-top bg-body-tertiary" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://cdn.glitch.global/febe269e-2e7c-4cae-8c43-477e746f2735/rocketspacehomework.png?v=1714254608176"
            alt="Rocketspace Homework Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-center logo"
          />
          <span className="text"> Rocketspace Homework</span>
        </a>
      </div>
    </nav>
  </div>
  <div className="buttons">
    <a href="/calculator.html">
      <button
        type="button"
        className="btn btn-dark"
        id="Calc"
        style={{ height: 125, width: 125 }}
      >
        Calculator
      </button>
    </a>
    <button
      type="button"
      className="btn btn-dark"
      style={{ height: 125, width: 125 }}
    >
      Image Input
    </button>
    <button
      type="button"
      className="btn btn-dark"
      style={{ height: 125, width: 125 }}
    >
      Story Problems
    </button>
    <button
      type="button"
      className="btn btn-dark"
      style={{ height: 125, width: 125 }}
    >
      States and Capitals
    </button>
    <button
      type="button"
      className="btn btn-dark"
      style={{ height: 125, width: 125 }}
    >
      Reading
    </button>
    <button
      type="button"
      className="btn btn-dark"
      style={{ height: 125, width: 125 }}
    >
      Book Image
    </button>
  </div>
</>

  );
}
