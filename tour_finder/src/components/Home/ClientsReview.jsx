import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import client1 from '../../assets/images/ava-1.jpg'
import client2 from '../../assets/images/ava-2.jpg'
import client3 from '../../assets/images/ava-3.jpg'

const ClientsReview = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='container'>
            <div className='row clients'>
                <p><span className='bg-warning p-2 italicFont'>Client Love</span></p>
                <h3>What our clients say about us</h3>
                <Slider {...settings}>

                    <div className='row mt-3 d-flex'>
                        <div className='col-md-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad, quam dignissimos laudantium
                                itaque pariatur quis dolore impedit ipsa sint deserunt quo quas odio aspernatur, dolor sapiente,
                                provident quia recusandae.
                            </p>
                            <div className='d-flex'>
                                <img src={client1} alt='clientImg' className='w-25' />
                                <div className='ms-4'>
                                    <h6>Jhon Deo</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad, quam dignissimos laudantium
                                itaque pariatur quis dolore impedit ipsa sint deserunt quo quas odio aspernatur, dolor sapiente,
                                provident quia recusandae.
                            </p>
                            <div className='d-flex'>
                                <img src={client2} alt='clientImg' className='w-25' />
                                <div className='ms-4'>
                                    <h6>Jhon Deo</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad, quam dignissimos laudantium
                                itaque pariatur quis dolore impedit ipsa sint deserunt quo quas odio aspernatur, dolor sapiente,
                                provident quia recusandae.
                            </p>
                            <div className='d-flex'>
                                <img src={client3} alt='clientImg' className='w-25' />
                                <div className='ms-4'>
                                    <h6>Jhon Deo</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-3 d-flex'>
                        <div className='col-md-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad, quam dignissimos laudantium
                                itaque pariatur quis dolore impedit ipsa sint deserunt quo quas odio aspernatur, dolor sapiente,
                                provident quia recusandae.
                            </p>
                            <div className='d-flex'>
                                <img src={client1} alt='clientImg' className='w-25' />
                                <div className='ms-4'>
                                    <h6>Jhon Deo</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad, quam dignissimos laudantium
                                itaque pariatur quis dolore impedit ipsa sint deserunt quo quas odio aspernatur, dolor sapiente,
                                provident quia recusandae.
                            </p>
                            <div className='d-flex'>
                                <img src={client2} alt='clientImg' className='w-25' />
                                <div className='ms-4'>
                                    <h6>Jhon Deo</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad, quam dignissimos laudantium
                                itaque pariatur quis dolore impedit ipsa sint deserunt quo quas odio aspernatur, dolor sapiente,
                                provident quia recusandae.
                            </p>
                            <div className='d-flex'>
                                <img src={client3} alt='clientImg' className='w-25' />
                                <div className='ms-4'>
                                    <h6>Jhon Deo</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='row mt-3 d-flex'>
                        <div className='col-md-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad, quam dignissimos laudantium
                                itaque pariatur quis dolore impedit ipsa sint deserunt quo quas odio aspernatur, dolor sapiente,
                                provident quia recusandae.
                            </p>
                            <div className='d-flex'>
                                <img src={client1} alt='clientImg' className='w-25' />
                                <div className='ms-4'>
                                    <h6>Jhon Deo</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad, quam dignissimos laudantium
                                itaque pariatur quis dolore impedit ipsa sint deserunt quo quas odio aspernatur, dolor sapiente,
                                provident quia recusandae.
                            </p>
                            <div className='d-flex'>
                                <img src={client2} alt='clientImg' className='w-25' />
                                <div className='ms-4'>
                                    <h6>Jhon Deo</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad, quam dignissimos laudantium
                                itaque pariatur quis dolore impedit ipsa sint deserunt quo quas odio aspernatur, dolor sapiente,
                                provident quia recusandae.
                            </p>
                            <div className='d-flex'>
                                <img src={client3} alt='clientImg' className='w-25' />
                                <div className='ms-4'>
                                    <h6>Jhon Deo</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-3 d-flex'>
                        <div className='col-md-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad, quam dignissimos laudantium
                                itaque pariatur quis dolore impedit ipsa sint deserunt quo quas odio aspernatur, dolor sapiente,
                                provident quia recusandae.
                            </p>
                            <div className='d-flex'>
                                <img src={client1} alt='clientImg' className='w-25' />
                                <div className='ms-4'>
                                    <h6>Jhon Deo</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad, quam dignissimos laudantium
                                itaque pariatur quis dolore impedit ipsa sint deserunt quo quas odio aspernatur, dolor sapiente,
                                provident quia recusandae.
                            </p>
                            <div className='d-flex'>
                                <img src={client2} alt='clientImg' className='w-25' />
                                <div className='ms-4'>
                                    <h6>Jhon Deo</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad, quam dignissimos laudantium
                                itaque pariatur quis dolore impedit ipsa sint deserunt quo quas odio aspernatur, dolor sapiente,
                                provident quia recusandae.
                            </p>
                            <div className='d-flex'>
                                <img src={client3} alt='clientImg' className='w-25' />
                                <div className='ms-4'>
                                    <h6>Jhon Deo</h6>
                                    <p>Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    )
}

export default ClientsReview
