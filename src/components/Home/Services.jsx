import React from 'react'
import weatherLogo from '../../assets/images/weather.png';
import guideLogo from '../../assets/images/guide.png';
import customization from '../../assets/images/customization.png';

const Services = () => {
    return (
        <div className='container services_container'>
            <div className='row '>
                <div className='col-md-3 g-4' >
                    <p>What we serve</p>
                    <h2>We offer our best services</h2>
                </div>
                <div className='col-md-3 services-col g-4'>
                    <div className='services bg-warning'>
                        <img src={weatherLogo} alt='weatherLogo' />
                    </div>
                    <h4 className='mt-4'>Calculate weather</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt suscipit et doloremque mollitia. Error,
                        illo provident. Commodi nulla quod doloremque a molestias tempore voluptas perferendis?</p>
                </div>
                <div className='col-md-3 services-col g-4'>
                    <div className='services bg-warning'>
                        <img src={guideLogo} alt='guideLogo' />
                    </div>
                    <h4 className='mt-4'>Best of guide</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt suscipit et doloremque mollitia. Error,
                        illo provident. Commodi nulla quod doloremque a molestias tempore voluptas perferendis?</p>
                </div>
                <div className='col-md-3 services-col g-4'>
                    <div className='services bg-warning'>
                        <img src={customization} alt='customization' />
                    </div>
                    <h4 className='mt-4'>Customization</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt suscipit et doloremque mollitia. Error,
                        illo provident. Commodi nulla quod doloremque a molestias tempore voluptas perferendis?</p>
                </div>
            </div>
        </div>
    )
}

export default Services
