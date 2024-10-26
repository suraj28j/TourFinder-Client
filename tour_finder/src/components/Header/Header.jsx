import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import '../Header/Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-brand logoDimension">
                <img className="logoDimension" src={logo} alt='logo'/>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                        <li className="nav-item ">
                            <Link className="nav-link " to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ">Tour</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link ">Login</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link ">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
