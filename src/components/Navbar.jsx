import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
  return (
    <>


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/reactnotes">
            React Notes
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
            
            {/* <div className="col-md-3 fs-4 d-flex justify-content-evenly">
              <Link to="/register"><i className="bi bi-person-plus"></i></Link>
              <Link to="/signin"><i className="bi bi-box-arrow-in-left"></i></Link>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar