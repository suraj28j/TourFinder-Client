import React from 'react'
import img from '../../assets/images/correct.webp'

const Thankyou = () => {
    return (
        <div className='container'>
            <div className='rol'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <img src={img} alt='correct' />
                    <h3>Thankyou</h3>
                    <h5>Your Tour is booked</h5>
                    <button className='btn btn-warning'>Back to Home</button>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
    )
}

export default Thankyou
