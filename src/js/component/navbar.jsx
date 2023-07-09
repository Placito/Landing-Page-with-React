import React from "react";

//create the navbar component
    const Navbar = () => {
        return (
            <nav className="navbar navbar-nav-scroll navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
          <div className="offcanvas-body ">
            <ul className="navbar-nav d-flex flex-row justify-content-end">
              <li className="nav-item me-3">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#" >Services</a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#" >Contact</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
        );
    };

export default Navbar;