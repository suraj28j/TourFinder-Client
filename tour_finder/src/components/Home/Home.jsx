import React from 'react'
import world from '../../assets/images/world.png'
import './Home.css'
import img1 from '../../assets/images/hero-img01.jpg'
import img2 from '../../assets/images/hero-img02.jpg'
import video from '../../assets/images/hero-video.mp4'
import weatherLogo from '../../assets/images/weather.png';
import guideLogo from '../../assets/images/guide.png';
import customization from '../../assets/images/customization.png';
import { Card } from '../../assets/Card.js'
import experienceImg from '../../assets/images/experience.png';

import galleryImg1 from '../../assets/images/gallery-01.jpg'
import galleryImg2 from '../../assets/images/gallery-02.jpg'
import galleryImg3 from '../../assets/images/gallery-03.jpg'
import galleryImg4 from '../../assets/images/gallery-04.jpg'
import galleryImg5 from '../../assets/images/gallery-05.jpg'
import galleryImg6 from '../../assets/images/gallery-06.jpg'
import galleryImg7 from '../../assets/images/gallery-07.jpg'
import galleryImg8 from '../../assets/images/gallery-08.jpg'


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
                <div className='col-md-6'>
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

            {/* Card */}
            <div className='row g-4 mt-4'>
                <div>
                    <p>Explore</p>
                    <h3>Our feature tours</h3>
                </div>

                {
                    Card.map((item) => (
                        <div className='col-md-3' key={item.place}>
                            <div className="card" style={{ width: "19rem" }}>
                                <img src={item.imgUrl} className="card-img-top" alt={item.city} />
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <h5 className="card-title">{item.city}</h5>
                                        <p><i className="bi bi-star"></i> <span>{item.rating}</span></p>
                                    </div>
                                    <p className="card-text">{item.place}</p>
                                    <div className='d-flex justify-content-between'>
                                        <p><span className='text-warning'>${item.price}</span>/per person</p>
                                        <button className='btn btn-warning'>Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

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
            
            {/* gallery */}
            <div className='row'>
                <p><spna className='bg-warning p-1'>Gallery</spna></p>
                <h3>Visit our customers tour gallery</h3>
                <div className='item'>
                    <img src={galleryImg1} alt='galleryImg1' />
                    <img src={galleryImg2} alt='galleryImg2' />
                    <img src={galleryImg3} alt='galleryImg3' />
                    <img src={galleryImg4} alt='galleryImg4' />
                    <img src={galleryImg5} alt='galleryImg5' />
                    <img src={galleryImg6} alt='galleryImg6' />
                    <img src={galleryImg7} alt='galleryImg7' />
                    <img src={galleryImg8} alt='galleryImg8' />
                </div>
            </div>

        </div>
    )
}

export default Home
