import React, { useState } from 'react'
import './SingleTour.css';
import { FaStar } from 'react-icons/fa'

import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { BASE_URL } from '../../utilis/config';

const SingleTour = () => {
  const { id } = useParams();

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const[comment,setComment] = useState("")

  const handleChange = (e) => {
    setComment(e.target.value)
  }
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Rating",rating);
    console.log(comment);
    
    
  }

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tour/getsingletour/${id}`);
  // console.log(tours);

  return (
    <div className='container mt-4'>
      <div className='row'>
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
                <input type="text" className="form-control" placeholder="Share your thoughts" onChange={handleChange}/>
                <button className='btn btn-warning text-light'>Submit</button>
              </div>
            </form>
          </div>

        </div>

        <div className='col-md-4 text-center border'>

          <h4 className='mt-4'>{tours.price}/Per person <i className="bi bi-star text-warning"></i> {tours.reviews}</h4>
          <hr></hr>
          <p>Information</p>
          <form>
            <input type='text' placeholder='Full Name' />
          </form>

        </div>
      </div>
    </div>
  )
}

export default SingleTour
