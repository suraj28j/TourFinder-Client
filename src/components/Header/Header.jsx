import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import '../Header/Header.css'
import { AuthContext } from '../../context/AuthContext.js'

const Header = () => {
    const { user, dispatch } = useContext(AuthContext)

    const logoutHandler = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" })
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-brand logoDimension ms-4">
                    <img className="logoDimension" src={logo} alt='logo' />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                        <li className="nav-item">
                            <Link className="nav-link navhover " to='/'>
                                <button className='btn fw-semibold'>Home</button>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link navhover " to='/tours'>
                                <button className='btn fw-semibold'>Tours</button>
                            </Link>
                        </li>
                        {
                            user ? (
                                <>
                                    <li className="nav-item ">
                                        <Link className="nav-link navhover" to='/'>
                                            <button className="btn btn-dark ms-3 fw-semibold logout" type='submit' onClick={logoutHandler}>Logout</button>
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
                                            <button className='btn fw-semibold'>Login</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link className="nav-link navhover" to='/register'>
                                            <button className="btn btn-warning ms-3 fw-semibold">Register</button>
                                        </Link>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
