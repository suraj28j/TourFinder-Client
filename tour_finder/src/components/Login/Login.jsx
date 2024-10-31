import React from 'react'
import loginImg from '../../assets/images/login.png'
import userImg from '../../assets/images/user.png'
import './Login.css';

import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='container' style={{marginTop:'5%'}}>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>

          <div className='row shadow  mb-5 bg-white rounded text-light'>
            <div className='col-md-7'>
              <img src={loginImg} alt='loginImg' className='w-100' />
            </div>
            <div className='col-md-5 bg-warning'>
              <div className='ms-4 me-4 text-center mt-4'>
                <img src={userImg} alt='userImg' className='w-25 userImg'/>
                <h3 className='mt-4'>Login</h3>
                <form>
                  <input type='email' className='form-control mt-4' placeholder='Email' />
                  <input type='password' className='form-control mt-3' placeholder='Password' />
                  <button className='btn btn-dark mt-3 w-100'>Login</button>
                  <p className='mt-4'>Don't have an account? <Link to='/register' className='nav-link text-dark'>Register</Link></p>
                </form>
              </div>
            </div>

          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>
  )
}

export default Login
