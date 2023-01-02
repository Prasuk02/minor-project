import React from 'react';
import {
  Link
} from "react-router-dom";

export default function Navbar() {

  return (
    <div >
        <nav className="navbar bg-primary">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Book Here</span>
            <form className="d-flex" role="search">
            
        <Link className="mx-2 btn btn-light" to="/login">Login</Link>
        <Link className="mx-2 btn btn-light" to="/signup">SignUp</Link>
      </form>
        </div>
        </nav>
      
    </div>
  );
}
