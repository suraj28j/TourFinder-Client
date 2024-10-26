import React from 'react'
import world from '../../images/world.png'
import './Home.css'
import img1 from '../../images/hero-img01.jpg'
import img2 from '../../images/hero-img02.jpg'


const Home = () => {
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-6'>
                    <div className='d-flex'>
                        <p>know before you go </p>
                        <img src={world} alt='world-img' className='worldImg ms-2 mt-1' />
                    </div>
                    <h1>Travelling opens the doors to creating memories</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio tenetur et alias architecto sunt perspiciatis
                        corporis nisi veniam nam! Similique ea ullam veniam aliquid quia, fugit perspiciatis quod expedita ad labore
                        soluta culpa explicabo neque consequatur eum, laudantium id, eos voluptatibus deserunt velit mollitia impedit facere.
                        Laborum numquam accusantium cumque.</p>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={img1} alt='img1' className='setImages' />
                        </div>
                        <div className='col-md-4'>
                            <img src={img2} alt='img1' className='setImages' />
                        </div>
                        <div className='col-md-4'>
                            <img src={img1} alt='img1' className='setImages' />
                        </div>
                    </div>
                </div>
            </div>

            <form className='mt-2'>
                <div className='row row-cols-4 neumorphism'>
                    <div className='col'>
                        <label className='form-label' htmlFor='location'>Location</label>
                        <input type='text' id='location' placeholder='where are you going ?' className='form-control' />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Distance</label>
                        <input type='text' placeholder='distance k/h' className='form-control' />
                    </div>
                    <div className='col'>
                        <label className='form-label'>Max People</label>
                        <input type='text' placeholder='0' className='form-control' />
                    </div>
                    <div className='col'>
                        <button type='submit' className='btn btn-outline-warning mt-4'><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Home
