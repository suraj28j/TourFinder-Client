import React, { useContext, useState } from 'react'
import './SingleTour.css';
import { FaStar } from 'react-icons/fa'

import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { BASE_URL } from '../../utilis/config';
import { AuthContext } from '../../context/AuthContext';


const SingleTour = () => {
  // window.scrollTo(0, 0)
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)

  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  
  const [hover, setHover] = useState(null);

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  // for add review and comment //
  const handleClick = async (e) => {
    e.preventDefault();
    if (user !== null) {
      // console.log(rating, comment, id, user);
      try {
        const res = await fetch(`${BASE_URL}/tour/review`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ rating, comment, id, user })
        });
        const result = await res.json();
        // console.log("result : ", result);
        
        if (result.success === true) {
          alert("Review Added")
          navigate(`/tours`)
        } else {
          alert("Somthing error")
        }

      } catch (error) {
        console.log("Internal Error", error);
      }

    } else {
      alert("Please Login")
    }
  }



  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tour/getsingletour/${id}`);
  // console.log(tours)

  return (
    <div className='container mt-4'>
      <div className='row'>

        {/* for Tour Image and user rating & comment */}
        <div className='col-md-8 mb-2'>
          <div className='row ms-1 me-1 '>
            <img src={tours.photo} alt='' className='img-fluid' />
          </div>

          <div className='border mt-4 ms-1 me-1'>
            <h3 className='m-3'>{tours.title}</h3>
            <p className='ms-3'>
              <span><i className="bi bi-star text-warning"></i> {tours.reviews}</span>
              <span className='ms-4'><i className="bi bi-geo-alt-fill"></i> {tours.address}</span>
            </p>
            <p className='ms-3'>
              <span className='me-4'><i className="bi bi-geo-alt-fill"></i> {tours.city}</span>
              <span className='ms-4 me-4'><i className="bi bi-currency-dollar"></i> {tours.price} per person</span>
              <span className='ms-4 me-4'><i className="bi bi-geo-alt"></i> {tours.distance} k/m</span>
              <span className='ms-4 me-4'><i className="bi bi-people"></i> {tours.maxGroupSize} people</span>
            </p>
            <h5 className=' ms-3 mt-2'>Discription</h5>
            <p className=' ms-3 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          {/* for user rating and comment */}
          <div className='border mt-4 ms-1 me-1'>
            <h3 className='ms-4 mt-4'>Reviews ({tours.reviews} reviews)</h3>

            <div className='ms-4 mt-4'>
              {
                [...Array(5)].map((star, index) => (
                  <label key={index}>
                    <input
                      type='radio'
                      name='rating'
                      value={index + 1}
                      onClick={() => setRating(index + 1)}
                    />
                    <FaStar
                      className='star'
                      size={30}
                      color={(index + 1) <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                      onMouseEnter={() => setHover(index + 1)}
                      onMouseLeave={() => { setHover(null) }}
                    />
                  </label>
                ))
              }
            </div>

            <form className='m-4' onSubmit={handleClick}>
              <div className="input-group mt-4 border p-2 text-center">
                <input type="text" className="form-control" placeholder="Share your thoughts" onChange={handleChange} />
                <button className='btn btn-warning'>Submit</button>
              </div>
            </form>

            {/* <div className='ms-4 d-flex justify-content-between'>
            <div className='userIcon'></div>
            <div className='starIcon'></div>
            </div> */}
          </div>

        </div>
        
        {/* for User Information and Booking */}
        <div className='col-md-4 text-center border h-100'>
          <h4 className=' priceperperson'>{tours.price}/Per person <i className="bi bi-star ms-4 text-warning"></i> {tours.reviews}</h4>
          <hr></hr>
          <h6 className='information'>Information</h6>
          <form className='userInfo border'>
            <input type='text' placeholder='Full Name' className='form-control' />
            <hr className='ms-3 me-3'/>
            <input type='text' placeholder='Phone Number' className='form-control' />
            <hr className='ms-3 me-3'/>
            <input type='date' className='form-control' />
          </form>
          {/* for booking charge */}
          <div className='bookingcharge'>
              <div className='d-flex justify-content-between'>
                <p>{tours.price} * 1 person</p>
                <p>{tours.price}</p>
              </div>
              <div className='d-flex justify-content-between'>
                <p>Service Charges</p>
                <p>10</p>
              </div>
              <div className='d-flex justify-content-between'>
                <h6>Total</h6>
                <h6>{tours.price+10}</h6>
              </div>
              <button className='btn btn-warning mb-4 mt-4 w-75'>Book Now</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SingleTour
