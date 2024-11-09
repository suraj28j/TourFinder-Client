import React from 'react'
import { BASE_URL } from '../../utilis/config'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'

const SearchResult = () => {

    const { city } = useParams()
    const { data: tours, loading, error } = useFetch(`${BASE_URL}/tour/findtour/${city}`);
    // const{data:review} = useFetch(`${BASE_URL}/review/getreview/${id}`)

    return (
        <div className='container mt-4'>
            {loading && <div className="loader"></div>}
            {error && <h1>{error}</h1>}

            {!loading && !error && (
                <div className='row'>
                    {
                        tours.map((item) => (
                            <div className=' me-2 mb-2' style={{ width: "auto" }}>
                                <div className="card" style={{ width: "19rem" }}>
                                    <img src={item.photo} className="card-img-top" alt={item.city} />
                                    <div className="card-body">
                                        <div className='d-flex justify-content-between'>
                                            <h6 className="card-title"><i className="bi bi-geo-alt text-warning"></i> {item.city}</h6>
                                            <p><i className="bi bi-star text-warning"></i> <span>0</span></p>
                                        </div>
                                        <h5 className="card-text"><Link to={`/tours/${item._id}`} className='nav-link navhover'>{item.title}</Link></h5>
                                        <div className='d-flex justify-content-between'>
                                            <p><span className='text-warning'>${item.price}</span>/per person</p>
                                            <Link to={`/tours/${item._id}`}><button className='btn btn-warning text-light'>Book Now</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}

        </div>
    )
}

export default SearchResult
