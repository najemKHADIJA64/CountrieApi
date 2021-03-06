import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">REST 🌎 API</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/"><Link to="/capital">capitales des pays</Link> </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><Link to="/codes">codes de pays</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><Link to="/langues">les langues</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><Link to="/paysN">nom du pays</Link></a>
            </li>
          </ul>
    
        </div>
    
      </div>
    </nav>
    </div>
  );
};

export default Navbar;