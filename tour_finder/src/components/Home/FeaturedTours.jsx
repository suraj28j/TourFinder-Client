import React from 'react'
import { BASE_URL } from '../../utilis/config'
import useFetch from '../Hooks/useFetch'
import { Link } from 'react-router-dom'

const FeaturedTours = () => {
    const { data: tours, loading, error } = useFetch(`${BASE_URL}/tour/getalltour`);
    // console.log("tours", tours);

    return (
        <div className='container'>
            {loading && <h1>Loading</h1>}
            {error && <h1>{error}</h1>}

            {!loading && !error && (
                <>
                    <div className='row g-4 mt-4'>
                        <div>
                            <p>Explore</p>
                            <h3>Our feature tours</h3>
                        </div>

                        {
                            tours.map((item) => (
                                <div className='col-md-3' key={item.place}>
                                    <div className="card" style={{ width: "19rem" }}>
                                        <img src={item.photo} className="card-img-top" alt={item.city} />
                                        <div className="card-body">
                                            <div className='d-flex justify-content-between'>
                                                <h6 className="card-title">{item.city}</h6>
                                                <p><i className="bi bi-star"></i> <span>{item.reviews}</span></p>
                                            </div>
                                            <h5 className="card-text"><Link to={`/tours/${item._id}`} className='nav-link navhover'>{item.title}</Link></h5>
                                            <div className='d-flex justify-content-between'>
                                                <p><span className='text-warning'>${item.price}</span>/per person</p>
                                                <Link to={`/tours/${item._id}`}><button className='btn btn-warning'>Book Now</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </>
            )}
        </div>
    )
}

export default FeaturedTours
