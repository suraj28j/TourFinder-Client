import React from 'react'
import maleTourist from '../../assets/images/male-tourist.png';

const Subscribe = () => {
    return (
        <div className='container'>
            <div className='row align-items-center subscribe'>
                <div className='col-md-1'></div>
                <div className='col-md-5 mt-2'>
                    <h3>Subscribe now for useful</h3>
                    <h3>travling information</h3>

                    <div className="input-group mt-4">
                        <input type="text" className="form-control p-2" placeholder="Enter your email" />
                        <button className='btn btn-warning text-light'>Subscribe</button>
                    </div>

                    <p className='mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Natus laborum enim vero vel! Quasi, neque!</p>
                </div>
                <div className='col-md-5 d-flex justify-content-center'>
                    <img src={maleTourist} alt='male-tourist' className='mb-4' style={{height:"18rem"}} />
                </div>
                <div className='col-md-1'></div>
            </div>
        </div>
    )
}

export default Subscribe
