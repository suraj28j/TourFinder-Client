import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import '../Header/Header.css'
import { AuthContext } from '../../context/AuthContext.js'

const Header = ({ isDarkMode, tonggleBackgroundColor }) => {
    const navbarClass = isDarkMode ? "navbar-dark bg-dark text-dark" : "navbar-light bg-light text-light";
    const btnClass = isDarkMode ? "btn btn-outline-light" : "btn";
    const modeIcon = isDarkMode ? "bi bi-brightness-high" : "bi bi-moon";
    const { user, dispatch } = useContext(AuthContext)

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" })
    }
    return (
        <nav className={`navbar navbar-expand-lg  ${navbarClass}`}>
            <div className="container-fluid">
                <div className="navbar-brand logoDimension ms-4">
                    <img className="logoDimension " src={logo} alt='logo' />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                        <li className="nav-item">
                            <Link className="nav-link navhover " to='/'>
                                <button className={`fw-semibold ${btnClass}`}>Home</button>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link navhover " to='/tours'>
                                <button className={`fw-semibold ${btnClass}`}>Tours</button>
                            </Link>
                        </li>
                        {
                            user ? (
                                <>
                                    <li className="nav-item ">
                                        <Link className="nav-link navhover" to='/'>
                                            <button className={`fw-semibold  ${btnClass}`} type='submit' onClick={logoutHandler}>Logout</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link navhover" to={`/updateuser/${user._id}`}>
                                            <button className="btn btn-warning ms-3 fw-semibold name">{user.name}</button>
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item ">
                                        <Link className="nav-link navhover" to='/login'>
                                            <button className={`fw-semibold ${btnClass}`}>Login</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link navhover" to='/register'>
                                            <button className="btn btn-warning ms-md-3 fw-semibold">Register</button>
                                        </Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                    <button  className={`fw-semibold ${btnClass}`} onClick={tonggleBackgroundColor}><i class={modeIcon}></i></button>
                </div>
            </div>
        </nav>
    )
}

export default Header
