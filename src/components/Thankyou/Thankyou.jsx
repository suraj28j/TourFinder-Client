import React from 'react'
import img from '../../assets/images/correct.webp'
import "./Thankyou.css";
import { Link } from 'react-router-dom';

const Thankyou = () => {
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-4'></div>
                <div className='col-md-4 text-center'>
                    <img src={img} alt='correct' className='mt-4 w-25' />
                    <h1 className='mt-3 mb-4 billy'>Thankyou</h1>
                    <h5 className='mb-2'>Your Tour is booked</h5>
                    <Link to='/'>
                    <button className='btn btn-warning mt-2 mb-4 text-light'>Back to Home</button>
                    </Link>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default Thankyou
