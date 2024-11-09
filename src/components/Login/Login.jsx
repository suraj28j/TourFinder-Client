import React, { useContext, useState } from 'react'
import loginImg from '../../assets/images/login.png'
import userImg from '../../assets/images/user.png'
import './Login.css';

import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../utilis/config';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';


const Login = () => {

  const { dispatch } = useContext(AuthContext)

  const nevigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  })

  const handleChange = (e) => {
    setCredentials((preVal) => ({ ...preVal, [e.target.id]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${BASE_URL}/auth/loginuser`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        credentials:'include',
        body: JSON.stringify(credentials)
      })
      const result = await res.json();
      // console.log(result);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: result.data,
        token: result.token,
        role: result.role
      })

      if (result.success === true) {
        toast.success("Login Successful");
        nevigate("/");
      } else {
        toast.error("Login Failed");
      }

    } catch (error) {
      dispatch(
        {
          type: "LOGIN_FAILURE",
          payload: error.message
        })
    }

  }

  return (
    <div className='container' style={{ marginTop: '5%' }}>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>

          <div className='row shadow  mb-5 bg-white rounded text-light'>
            <div className='col-md-7'>
              <img src={loginImg} alt='loginImg' className='w-100' />
            </div>
            <div className='col-md-5 bg-warning'>
              <div className='ms-4 me-4 text-center mt-4'>
                <img src={userImg} alt='userImg' className='w-25 userImg' />
                <h3 className='mt-4'>Login</h3>
                <form onSubmit={handleClick}>
                  <input type='email' id='email' className='form-control mt-4' placeholder='Email' onChange={handleChange} />
                  <input type='password' id='password' className='form-control mt-3' placeholder='Password' onChange={handleChange} />
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
