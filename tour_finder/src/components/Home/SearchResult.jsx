import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../utilis/config'
import { Link, useParams } from 'react-router-dom'

const SearchResult = () => {

    const [tours, setTours] = useState([])

    const { city } = useParams()
    console.log(city);


    useEffect(() => {
        getResult();
    }, [])
    const getResult = async () => {
        try {
            const res = await fetch(`${BASE_URL}/tour/search/`)
            const result = await res.json()
            // console.log(result.data);
            const { data } = result;

            const toursData = data.filter((tour) => {
                return tour.city === city
            })

            setTours(toursData);

            console.log("Tours : ", tours);


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                {
                    tours.map((item) => (
                        <div className=' me-2 mb-2' style={{ width: "auto" }}>
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
        </div>
    )
}

export default SearchResult
