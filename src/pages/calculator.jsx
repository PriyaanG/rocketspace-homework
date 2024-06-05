import * as React from "react";
import ReactDOM from "react-dom";


export default function Calc() {

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
  <div className="AllCalcScreenBtns">
    <div className="Number-Btns">
      <button
        type="button"
        className="btn btn-dark"
        id={1}
        style={{ height: 75, width: 75, display: "block" }}
      >
        1
      </button>
      <button
        type="button"
        className="btn btn-dark"
        id={2}
        style={{ height: 75, width: 75, display: "block" }}
      >
        2
      </button>
      <button
        type="button"
        className="btn btn-dark"
        id={3}
        style={{ height: 75, width: 75, display: "block" }}
      >
        3
      </button>
      <button
        type="button"
        className="btn btn-dark"
        id={4}
        style={{ height: 75, width: 75, display: "block" }}
      >
        4
      </button>
      <button
        type="button"
        className="btn btn-dark"
        id={5}
        style={{ height: 75, width: 75, display: "block" }}
      >
        5
      </button>
      <button
        type="button"
        className="btn btn-dark"
        id={6}
        style={{ height: 75, width: 75, display: "block" }}
      >
        6
      </button>
      <button
        type="button"
        className="btn btn-dark"
        id={7}
        style={{ height: 75, width: 75, display: "block" }}
      >
        7
      </button>
      <button
        type="button"
        className="btn btn-dark"
        id={8}
        style={{ height: 75, width: 75, display: "block" }}
      >
        8
      </button>
      <button
        type="button"
        className="btn btn-dark"
        id={9}
        style={{ height: 75, width: 75, display: "block" }}
      >
        9
      </button>
      <button
        type="button"
        className="btn btn-dark"
        id={0}
        style={{ height: 75, width: 75, display: "block" }}
      >
        0
      </button>
    </div>
    <div className="CalcBtns">
      <button
        type="button"
        className="btn btn-dark"
        id="+"
        style={{ height: 75, width: 75, display: "block" }}
      >
        +
      </button>
      <button
        type="button"
        className="btn btn-dark"
        id="-"
        style={{ height: 75, width: 75, display: "block" }}
      >
        -
      </button>
      <button
        type="button"
        className="btn btn-dark"
        id="x"
        style={{ height: 75, width: 75, display: "block" }}
      >
        x
      </button>
      <button
        type="button"
        className="btn btn-dark"
        id="/"
        style={{ height: 75, width: 75, display: "block" }}
      >
        /
      </button>
    </div>
  </div>
</>
)
}