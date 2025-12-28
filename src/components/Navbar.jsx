import React from 'react'
import {SiteLogo} from '../assets'

const Navbar = () => {
  return (
   <header className="site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={SiteLogo} alt="LeadCRM Logo" />
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><a className="nav-link" href="#">Product</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Resources</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Company</a></li>
              <li className="nav-item ms-lg-3">
                <a className="btn btn-blue text-white py-3" href="#">Get Started Free Account</a>
              </li>
              <li className="nav-item ms-lg-3">
                <a className="btn btn-outline-blue txt-blue py-3" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar