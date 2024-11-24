import React, { useState } from 'react'
import { BASE_URL } from '../../utilis/config'
import { Link } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'


const ToursData = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tour/getalltour`);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = tours.slice(firstPostIndex, lastPostIndex);

  const buttonHandler = (pageNum) => {
    setCurrentPage(pageNum)
  }
  return (
    <>
      {loading && <div className="loader"></div>}
      {error && <h1>{error}</h1>}
      {!loading && !error && (
        <>
          <div className='row g-4 mt-4'>
            {
              currentPosts.map((item) => (
                <div className='col-md-3' key={item.place}>
                  <div className="card" style={{ minwidth: "19rem" }}>
                    <img src={item.photo} className="card-img-top" alt={item.city} />
                    <div className="card-body">
                      <div className='d-flex justify-content-between'>
                        <h6 className="card-title">{item.city}</h6>
                        <p>
                          <i className="bi bi-star text-warning"></i> {
                            item.reviews.length ? ((item.reviews.reduce((acc, curr) => acc + curr, 0)) / item.reviews.length).toFixed(1) : 0
                          } <span>({item.reviews.length})</span>
                        </p>
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

          <div className='row mt-4'>
            <div className='col-md-4'></div>
            <div className='col-md-4  d-flex justify-content-center'>
              {
                [1, 2].map((num) => (
                  <button className='button ms-2 mt-4' onClick={() => buttonHandler(num)}>{num}</button>
                ))
              }
            </div>
            <div className='col-md-4'></div>
          </div>

        </>
      )}
    </>
  )
}

export default ToursData
