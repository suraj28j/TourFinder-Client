import React from 'react'
import world from '../../images/world.png'
import './Home.css'
import img1 from '../../images/hero-img01.jpg'
import img2 from '../../images/hero-img02.jpg'
import video from '../../images/hero-video.mp4'
import weatherLogo from '../../images/weather.png';
import guideLogo from '../../images/guide.png';
import customization from '../../images/customization.png';


const Home = () => {
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-6'>
                    <div className='d-flex'>
                        <p className='bg-warning p-1'>know before you go </p>
                        <img src={world} alt='world-img' className='worldImg ms-2 mt-1' />
                    </div>
                    <h1 className='heading'>Travelling opens the doors to creating <span className='text-warning'>memories</span></h1>
                    <p className='para mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio tenetur et alias architecto sunt perspiciatis
                        corporis nisi veniam nam! Similique ea ullam veniam aliquid quia, fugit perspiciatis quod expedita ad labore
                        soluta culpa explicabo neque consequatur eum, laudantium id, eos voluptatibus deserunt velit mollitia impedit facere.
                        Laborum numquam accusantium cumque.</p>
                </div>
                <div className='col-md-6 border'>
                    <div className='row justify-content-between setImages-row'>
                        <div className='col-md-4'>
                            <img src={img1} alt='img1' className='setImages' />
                        </div>
                        <div className='col-md-4'>
                            <video src={video} controls className='setImages' />
                        </div>
                        <div className='col-md-4'>
                            <img src={img2} alt='img2' className='setImages' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Searchbar */}
            <form className='mt-4 mb-4'>
                <div className='row'>
                    <div className='col-md-10'>

                        <div className='row mt-4 neumorphism'>
                            <div className='col-md-1 '></div>
                            <div className='col-md-2 ms-1'>
                                <i className="bi bi-geo-alt"></i> <label className='form-label' htmlFor='location'>Location</label>
                                <input type='text' id='location' placeholder='where are you going ?' className='form-control' />
                            </div>
                            <div className='col-md-1 mt-3 '></div>
                            <div className='col-md-2'>
                                <i className="bi bi-geo-alt-fill"></i> <label className='form-label'>Distance</label>
                                <input type='text' placeholder='distance k/h' className='form-control' />
                            </div>
                            <div className='col-md-1 '></div>
                            <div className='col-md-2'>
                                <i className="bi bi-people"></i> <label className='form-label'>Max People</label>
                                <input type='text' placeholder='0' className='form-control' />
                            </div>
                            <div className='col-md-2 me-1 d-flex justify-content-end'>
                                <button type='submit' className='btn btn-warning mt-4'><i className="bi bi-search fs-4 text-light"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>

                </div>
            </form>

            {/* Services */}
            <div className='row services_container '>
                <div className='col-md-3'>
                    <p>What we serve</p>
                    <h2>We offer our best services</h2>
                </div>
                <div className='col-md-3 services-col'>
                    <div className='services bg-warning'>
                        <img src={weatherLogo} alt='weatherLogo' />
                    </div>
                    <h4 className='mt-4'>Calculate weather</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt suscipit et doloremque mollitia. Error,
                        illo provident. Commodi nulla quod doloremque a molestias tempore voluptas perferendis?</p>
                </div>
                <div className='col-md-3 services-col'>
                    <div className='services bg-warning'>
                        <img src={guideLogo} alt='guideLogo' />
                    </div>
                    <h4 className='mt-4'>Best of guide</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt suscipit et doloremque mollitia. Error,
                        illo provident. Commodi nulla quod doloremque a molestias tempore voluptas perferendis?</p>
                </div>
                <div className='col-md-3 services-col'>
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

export default Home
