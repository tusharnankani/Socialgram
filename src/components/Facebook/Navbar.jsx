import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <div className="navbar-nav">
          <Link to="/facebook" className="nav-item nav-link active">
            FaceBook App
          </Link>
          <Link to="/todo" className="nav-item nav-link">
            Todo App
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
