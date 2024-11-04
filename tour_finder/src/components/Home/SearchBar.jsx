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
    const handleClick = async(e) => {
        e.preventDefault()
        navigate(`/tour/search/${credential.city}`)

        // const res = await fetch(`${BASE_URL}/tour/getalltour`);
        // const result = await res.json()
        // console.log(result);
        
        // const exactLoaction = result.data.filter((item)=>{
        //     return item.city === credential.city; 
        // })
        // console.log(exactLoaction); 
    }

    return (
        <div className='container'>
            <form className='mt-4 mb-4'onSubmit={handleClick} >
                <div className='row'>
                    <div className='col-md-10'>

                        <div className='row mt-4 neumorphism'>
                            <div className='col-md-1 '></div>
                            <div className='col-md-2 ms-1'>
                                <i className="bi bi-geo-alt"></i> <label className='form-label' htmlFor='city'>Location</label>
                                <input type='text' id='city' name='city' placeholder='where are you going ?' className='form-control' onChange={handleChange} required />
                            </div>
                            <div className='col-md-1 mt-3 '></div>
                            <div className='col-md-2'>
                                <i className="bi bi-geo-alt-fill"></i> <label className='form-label' htmlFor='distance'>Distance</label>
                                <input type='text' id='distance' name='distance' placeholder='distance k/h' className='form-control'/>
                            </div>
                            <div className='col-md-1 '></div>
                            <div className='col-md-2'>
                                <i className="bi bi-people"></i> <label className='form-label' htmlFor='maxPeople'>Max People</label>
                                <input type='text' id='maxPeople' name='maxPeople' placeholder='0' className='form-control'/>
                            </div>
                            <div className='col-md-2 me-1 d-flex justify-content-end'>
                                <button type='submit' className='btn btn-warning mt-4'><i className="bi bi-search fs-4 text-light"></i></button>
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
