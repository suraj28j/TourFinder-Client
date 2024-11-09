import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import loginImg from '../../assets/images/login.png'
import userImg from '../../assets/images/user.png'
import { BASE_URL, token } from '../../utilis/config'

const UpdateUser = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        name: undefined,
        email: undefined
    })

    const handleChange = (e) => {
        setCredentials((preVal) => ({ ...preVal, [e.target.id]: e.target.value }))
    }

    // console.log(credentials);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${BASE_URL}/user/updateuser/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(credentials)
            })
            const result = await res.json();
            // console.log(result);

            if (!result.ok) {
                console.log("Error Mesasge : ", result.message);
            }
            if (result.success === true) {
                alert("Update Successfully");
                navigate("/");
            } else {
                alert("Update Faild")
            }
        } catch (error) {
            console.log("Internal Error", error);
        }
    }
    return (
        <div>
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
                                    <h3 className='mt-4'>Update Details</h3>
                                    <form onSubmit={handleClick}>
                                        <input type='text' id='name' className='form-control mt-4' placeholder='User Name' onChange={handleChange} />
                                        <input type='email' id='email' className='form-control mt-3' placeholder='New Email' onChange={handleChange} />
                                        <button className='btn btn-dark mt-3 w-100 mb-4'>Update</button>
                                        {/* <p className='mt-4'>Already have an account? <Link to='/login' className='nav-link text-dark'>Login</Link></p> */}
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser
