import React from 'react'
import { SiteLogo } from '../assets';
import { BoxArrowDownRight, BoxArrowInRight} from 'react-bootstrap-icons';

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
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">

            {/* CENTER MENU */}
            <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Product
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">CRM</a></li>
                  <li><a className="dropdown-item" href="#">Automation</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                  <li><a className="dropdown-item" href="#">Docs</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Careers</a></li>
                </ul>
              </li>
            </ul>

            {/* RIGHT BUTTONS */}
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item me-lg-2">
                <a className="btn btn-blue text-white px-4 py-3" href="#">
                  Get Your Free Account
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-blue px-4 py-3"  href="#">
                  <BoxArrowInRight size={25} style={{paddingRight:'8px'}} />Login
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
