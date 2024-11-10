import React, { useContext, useState } from 'react'
import './SingleTour.css';
import { FaStar } from 'react-icons/fa'

import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { BASE_URL, token } from '../../utilis/config';
import { AuthContext } from '../../context/AuthContext';
import avatar from '../../assets/images/avatar.jpg';
import { toast } from 'react-toastify';

const SingleTour = () => {

  // window.scrollTo(0, 0)

  const nevigate = useNavigate();
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [hover, setHover] = useState(null);

  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  const [userInfo, setUserInfo] = useState({
    name: undefined,
    phone: undefined,
    date: undefined,
    guest: undefined
  })


  // geting tour data and review data
  // --------------------------------------------------------------------------------------- //
  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tour/getsingletour/${id}`);
  const { data: review } = useFetch(`${BASE_URL}/review/getreview/${id}`)
  const totalRating = review.reduce((acc, curr) => { return acc + curr.rating }, 0)
  const avgRating = review.length ? totalRating / review.length : 0
  // --------------------------------------------------------------------------------------- //



  // ------------------------- for add review and comment -------------------------- //

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  const handleClick = async (e) => {
    e.preventDefault();

    if (user !== null) {

      try {
        const res = await fetch(`${BASE_URL}/review/createreview/`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({ rating, comment, id, user })
        })
        const result = await res.json();
        // console.log(result);
        if (result.success === true) {
          toast.success("Review Created Successfully");
          setTimeout(() => {
            window.location.reload();
          }, 1000)
        } else {
          toast.error("Somthing error");
          console.log(result.message);
        }
      } catch (error) {
        console.log("Internal Error", error);
      }

    } else {
      toast.warn("Please Login")
    }

  }
  // -------------------------------------------------------------------------------// 



  // ------------------------------ for tour booking ----------------------------- //

  const bookingHandleChange = (e) => {
    setUserInfo((preVal) => ({ ...preVal, [e.target.id]: e.target.value }));
    // console.log(userInfo);
  }

  const dateHandleChange = (e) => {
    setUserInfo((preVal) => ({ ...preVal, date: e.target.value }));
    // console.log(userInfo);
  }

  const bookingHandleClick = async (e) => {
    e.preventDefault();

    if (user !== null) {
      try {
        const res = await fetch(`${BASE_URL}/booking/createbooking`, {
          method: "POST",
          headers: { "Content-type": "application/json",
                    Authorization: ` Bearer ${token}`
           },
          body: JSON.stringify(userInfo)
        })
        const result = await res.json();
        if (result.success === true) {
          nevigate("/thank-you");
        } else {
          toast.error("Something Error");
          console.log(result.message);
        }
      } catch (error) {
        console.log("Internal Error : ", error);
      }
    } else {
      toast.warn("Please Login");
    }
  }
  // -------------------------------------------------------------------------------// 



  return (
    <div className='container mt-4'>
      {loading && <div className="loader"></div>}
      {error && <h1>{error}</h1>}
      {!loading && !error && (
        <>
          <div className='row'>
            {/* for Tour Image and user rating & comment */}
            <div className='col-md-8 mb-2'>
              <div className='row ms-1 me-1 '>
                <img src={tours.photo} alt='tour-img' className='img-fluid' />
              </div>

              {/* Tour discription */}
              <div className='border mt-4 ms-1 me-1'>
                <h3 className='m-3'>{tours.title}</h3>
                <p className='ms-3'>
                  <span><i className="bi bi-star text-warning"></i> {avgRating.toFixed(1)} ({review.length})</span>
                  <span className='ms-4'><i className="bi bi-geo-alt-fill"></i> {tours.address}</span>
                </p>
                <p className='ms-3'>
                  <span className='me-md-4'><i className="bi bi-geo-alt-fill"></i> {tours.city}</span>
                  <span className='ms-4 me-4'><i className="bi bi-currency-dollar"></i> {tours.price} per person</span>
                  <span className='ms-md-4 me-md-4'><i className="bi bi-geo-alt"></i> {tours.distance} k/m</span>
                  <span className='ms-4 me-4'><i className="bi bi-people"></i> {tours.maxGroupSize} people</span>
                </p>
                <h5 className=' ms-3 mt-2'>Discription</h5>
                <p className=' ms-3 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              </div>

              {/* for user rating and comment */}
              <div className='border mt-4 ms-1 me-1'>
                <h3 className='ms-4 mt-4'>Reviews ({review.length} reviews)</h3>

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
                          className='star ms-1'
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
                  <div className=" mt-4 p-2 InputGroup ">
                    <input type="text" className=" me-2 p-2" placeholder="Share your thoughts" onChange={handleChange} />
                    <button className='btn btn-warning me-1'>Submit</button>
                  </div>
                </form>

                {/*Show users name and their comments and reviews  */}
                <div className='m-4'>
                  {
                    review.map((item) => (
                      <div className='row d-flex justify-content-evenly '>
                        <div className='col-md-1 avatar'>
                          <img src={avatar} alt='avatar-img' />
                        </div>
                        <div className='col-md-5 '>
                          <span className='fw-bolder'>{item.user.name}</span><br />
                          <span className=''>{item.createdAt.split("T")[0]}</span>
                          <p className='mt-1'>{item.comment}</p>
                        </div>
                        <div className='col-md-6 d-flex justify-content-end'>
                          <p className='mt-2'>{item.rating} <i className="bi bi-star-fill text-warning"></i></p>
                        </div>
                      </div>
                    ))
                  }

                  <div className='userIcon'></div>
                  <div className='starIcon me-4'></div>

                </div>
              </div>

            </div>

            {/* for User Information and Booking */}
            <div className='col-md-4 text-center border h-100'>
              <h4 className=' priceperperson'>{tours.price}/Per person <i className="bi bi-star ms-4 text-warning"></i> {avgRating.toFixed(1)} ({review.length}) </h4>
              <hr></hr>
              <h6 className='information'>Information</h6>

              <form onSubmit={bookingHandleClick}>
                <div className='bookingForm border'>
                  <input type='text' id='name' required placeholder='Full Name' className='form-control' onChange={bookingHandleChange} />
                  <hr className='ms-3 me-3' />
                  <input type='text' id='phone' required placeholder='Phone Number' className='form-control' onChange={bookingHandleChange} />
                  <hr className='ms-3 me-3' />
                  <div className='d-flex justify-content-center mb-1'>
                    <input type='date' id='date' required className='form-control' onChange={dateHandleChange} />
                    <input type='text' id='guest' required placeholder='Number of Guest' className='form-control' onChange={bookingHandleChange} />
                  </div>
                </div>

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
                    <h6>{tours.price + 10}</h6>
                  </div>
                  <button type='submit' className='btn btn-warning mb-4 mt-4 w-75'>Book Now</button>
                </div>

              </form>
            </div>

          </div>
        </>
      )}

    </div>
  )
}

export default SingleTour
