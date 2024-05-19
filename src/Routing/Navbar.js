import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      {/* <div>
        <ul>
          <li>
            <Link to="/aboutus">About Us </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div> */}

      {/* <li>
        <Link to="/login">Login</Link>
      </li> */}

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink
                  className="navbar-brand"
                  to="/aboutus"
                  style={{ fontWeight: 'bold' }}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/Contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <NavLink
                  style={{ color: 'Red' }}
                  className="navbar-brand"
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="navbar-brand" to="/Login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="navbar-brand" to="/mobile/Category">
                  mobile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
