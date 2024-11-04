import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const navigate = useNavigate()

    const [credential, setCredentials] = useState({
        city: undefined,
        distance: undefined,
        maxPeople: undefined
    })
    const handleChange = (e) => {
        setCredentials((preVal) => ({ ...preVal, [e.target.id]: e.target.value }));
    }
    const handleClick = async (e) => {
        e.preventDefault()
        navigate(`/tour/search/${credential.city}`)
    }

    return (
        <div className='container'>
            <form className='mt-4 mb-4 ' onSubmit={handleClick} >
                <div className='row'>
                    <div className='col-md-10'>

                        <div className='row mt-4 neumorphism'>
                            <div className='col-md-3'>
                                <i className="bi bi-geo-alt text-warning ms-2"></i> <label className='form-label' htmlFor='city'>Location</label>
                                <input type='text' id='city' placeholder='Where are you going ?' className='form-control' onChange={handleChange} required />
                            </div>
                            <div className='col-md-1 mt-3 d-flex justify-content-center'>
                                <div className='vLine'></div>
                            </div>
                            <div className='col-md-3'>
                                <i className="bi bi-geo-alt-fill text-warning"></i> <label className='form-label' htmlFor='distance'>Distance</label>
                                <input type='text' id='distance' placeholder='Distance k/h' className='form-control' />
                            </div>
                            <div className='col-md-1 mt-3 d-flex justify-content-center'>
                                <div className='vLine'></div>
                            </div>
                            <div className='col-md-3'>
                                <i className="bi bi-people text-warning"></i> <label className='form-label' htmlFor='maxPeople'>Max People</label>
                                <input type='text' id='maxPeople' placeholder='0' className='form-control'/>
                            </div>
                            <div className='col-md-1 d-flex justify-content-center align-items-center'>
                                <button type='submit' className='btn btn-warning'><i className="bi bi-search fs-4 text-light"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
