import React from 'react'

const SearchBar = () => {
    return (
        <div className='container'>
            <form className='mt-4 mb-4'>
                <div className='row'>
                    <div className='col-md-10'>

                        <div className='row mt-4 neumorphism'>
                            <div className='col-md-1 '></div>
                            <div className='col-md-2 ms-1'>
                                <i className="bi bi-geo-alt"></i> <label className='form-label' htmlFor='location'>Location</label>
                                <input type='text' id='location' placeholder='where are you going ?' className='form-control' />
                            </div>
                            <div className='col-md-1 mt-3 '></div>
                            <div className='col-md-2'>
                                <i className="bi bi-geo-alt-fill"></i> <label className='form-label'>Distance</label>
                                <input type='text' placeholder='distance k/h' className='form-control' />
                            </div>
                            <div className='col-md-1 '></div>
                            <div className='col-md-2'>
                                <i className="bi bi-people"></i> <label className='form-label'>Max People</label>
                                <input type='text' placeholder='0' className='form-control' />
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
