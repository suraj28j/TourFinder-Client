import React from 'react'
import world from '../../assets/images/world.png'
import img1 from '../../assets/images/hero-img01.jpg'
import img2 from '../../assets/images/hero-img02.jpg'
import video from '../../assets/videos/hero-video.mp4'

const Heading = () => {
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
        </div>
    )
}

export default Heading
