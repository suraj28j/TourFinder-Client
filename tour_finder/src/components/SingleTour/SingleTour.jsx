import React from 'react'

import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { BASE_URL } from '../../utilis/config';

const SingleTour = () => {
    const {id} = useParams();

    const { data: tours, loading, error } = useFetch(`${BASE_URL}/tour/getsingletour/${id}`);
    console.log(tours);
    
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-8'>
            <img src={tours.photo} alt='' className='img-fluid'/>
            <div className='row border mt-4 ms-1 me-1'>
                <h3 className='m-3'>{tours.title}</h3>
                <p className='ms-3'>
                    <span><i class="bi bi-star text-warning"></i> {tours.reviews}</span>
                    <span className='ms-4'><i class="bi bi-geo-alt-fill"></i> {tours.address}</span>
                </p>
                <p className='ms-3'>
                    <span className='me-4'><i class="bi bi-geo-alt-fill"></i> {tours.city}</span>
                    <span className='ms-4 me-4'><i class="bi bi-currency-dollar"></i> {tours.price}</span>
                    <span className='ms-4 me-4'><i class="bi bi-geo-alt"></i> {tours.distance}</span>
                    <span className='ms-4 me-4'><i class="bi bi-people"></i> {tours.maxGroupSize} people</span>
                </p>
                <h3 className=' ms-3 mt-2'>Discription</h3>
            </div>
        </div>

        <div className='col-md-4 text-center border'>
            <h4 className='mt-4'>{tours.price}/Per person <i class="bi bi-star text-warning"></i> {tours.reviews}</h4>
            <hr></hr>
            <p>Information</p>
            <form>
                <input type='text' placeholder='Full Name'/>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SingleTour
