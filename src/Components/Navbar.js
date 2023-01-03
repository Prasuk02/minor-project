import React from 'react';
import './Navbar.css';
import {
  Link
} from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary nav">
        <div class="container-fluid mt-2 mb-1">
          <a class="navbar-brand nav-head" href="#">BookHere.com</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Hotel Booking</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Flights</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Car Rental</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">Airport Taxis</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <Link className="mx-2 btn btn-warning" to="/login">Login</Link>
              <Link className="mx-2 btn btn-warning" to="/signup">SignUp</Link>
            </form>
            
          </div>
          
        </div>
      </nav>
      
    </>
    );
  
}
