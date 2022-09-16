import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
      <div className="container-fluid">

        <a className="navbar-brand" href="/#">{props.title}</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>




          </ul>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Disable Mode</label>
          </div>

          <div className="btn-group my-3 mx-3 " role="group" aria-label="Basic mixed styles example">
            {/* <label className="m-3" for="favcolor">Select your favorite color:</label> */}
            <button type="button" onClick={props.togglemode1} className="btn btn-danger">Blood</button>
            <button type="button" onClick={props.togglemode2} className="btn btn-warning">Warning</button>
            <button type="button" onClick={props.togglemode3} className="btn btn-success">Success</button>
            <button type="button" onClick={props.togglemode8} className="btn btn-dark"  >Night</button>
            <button type="button" onClick={props.togglemode4} className="btn btn-primary">Blue</button>
            <button type="button" onClick={props.togglemode5} className="btn btn-secondary">Grey</button>
            <button type="button" onClick={props.togglemode6} className="btn btn-info">Sky</button>
            <button type="button" onClick={props.togglemode7} className="btn btn-light">LED</button>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>

          </form>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Title dal edr fir chla',
  aboutText: 'About{Auto genetated by props}'
}
