import React from 'react'
import experienceImg from '../../assets/images/experience.png';

const Experience = () => {
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-6'>

                    <p>Experience</p>
                    <h3>With our all experience</h3>
                    <h3>we will servr you</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, incidunt. Placeat voluptates similique blanditiis
                        quae id perspiciatis fuga deserunt voluptate.</p>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <div className='numBox bg-warning'>12k+</div>
                            <p>successful trip</p>
                        </div>
                        <div>
                            <div className='numBox bg-warning'>2k+</div>
                            <p>Regular Clients</p>
                        </div>
                        <div>
                            <div className='numBox bg-warning'>15</div>
                            <p>Year Experience</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 d-flex justify-content-center'>
                    <img src={experienceImg} alt='experienceImg' className='w-75' />
                </div>
            </div>
        </div>
    )
}

export default Experience
