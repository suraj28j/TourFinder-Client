import React from 'react'
import logo from '../../images/logo.png'
import '../../index.css'
const Footer = () => {
    return (
        <div className='container mt-2'>
            <div className='row'>
                <div className="col-md-3 mb-2">
                    <img className='logoDimension' src={logo} alt='logo' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, voluptatibus.</p>
                    <div className='d-flex'>
                        <i className="bi bi-person me-3"></i>
                        <i className="bi bi-github me-3"></i>
                        <i className="bi bi-linkedin me-3"></i>
                        <i className="bi bi-instagram"></i>
                    </div>
                </div>
                <div className="col-md-3">
                    <h6 className='mb-4'>Dicover</h6>
                    <p>Home</p>
                    <p>About</p>
                    <p>Tour</p>
                </div>
                <div className="col-md-3">
                <h6 className='mb-4'>Quick Link</h6>
                    <p>Gallery</p>
                    <p>Login</p>
                    <p>Register</p>
                </div>
                <div className="col-md-3">
                <h6 className='mb-4'>Contact</h6>
                <p><i className="bi bi-geo-alt"></i> Address: Brookfield Bangalore</p>
                <p><i className="bi bi-envelope"></i> Email: suraj28j@gmail.com</p>
                </div>
            </div>
            <p className='text-center'>Copyright 2024 Design and develov by Suraj Kumar. All rights recived</p>
        </div>
    )
}

export default Footer
