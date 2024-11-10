import React from 'react'
import galleryImg1 from '../../assets/images/gallery-01.jpg'
import galleryImg2 from '../../assets/images/gallery-02.jpg'
import galleryImg3 from '../../assets/images/gallery-03.jpg'
import galleryImg4 from '../../assets/images/gallery-04.jpg'
import galleryImg5 from '../../assets/images/gallery-05.jpg'
import galleryImg6 from '../../assets/images/gallery-06.jpg'
import galleryImg7 from '../../assets/images/gallery-07.jpg'
import galleryImg8 from '../../assets/images/gallery-08.jpg'

const Gallery = () => {
  return (
    <div className='container mt-4'>
      <p><spna className='bg-warning italicFont'>Gallery</spna></p>
      <h3>Visit our customers tour gallery</h3>
      <div className='gallery'>
        <div><img src={galleryImg1} alt="galleryImg1" /></div>
        <div><img src={galleryImg2} alt="galleryImg2" /></div>
        <div><img src={galleryImg3} alt="galleryImg3" /></div>
        <div><img src={galleryImg4} alt="galleryImg4" /></div>
        <div><img src={galleryImg5} alt="galleryImg5" /></div>
        <div><img src={galleryImg6} alt="galleryImg6" /></div>
        <div><img src={galleryImg7} alt="galleryImg7" /></div>
        <div><img src={galleryImg8} alt="galleryImg8" /></div>
      </div>


      {/* <div className='row g-2'>
        <div className="box col-md-3"><img src={galleryImg1} alt='galleryImg1' /></div>
        <div className="box col-md-3"><img src={galleryImg2} alt='galleryImg2' /></div>
        <div className="box col-md-3"><img src={galleryImg3} alt='galleryImg3' /></div>
        <div className="box col-md-3"><img src={galleryImg4} alt='galleryImg4' /></div>
      </div>
      <div className='row g-2 '>
        <div className="box col-md-3"><img src={galleryImg5} alt='galleryImg5' /></div>
        <div className="box col-md-3"><img src={galleryImg6} alt='galleryImg6' /></div>
        <div className="box col-md-3"><img src={galleryImg7} alt='galleryImg7' /></div>
        <div className="box col-md-3"><img src={galleryImg8} alt='galleryImg8' /></div>
      </div> */}
    </div>
  )
}

export default Gallery
