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
    <div className='container'>
      <div className='row'>
        <p><spna className='bg-warning p-2 italicFont'>Gallery</spna></p>
        <h3>Visit our customers tour gallery</h3>
        {/* <div className='row'> */}
          <div className='item mt-4 gallery' >
            <img src={galleryImg1} alt='galleryImg1' />
            <img src={galleryImg2} alt='galleryImg2' />
            <img src={galleryImg3} alt='galleryImg3' />
            <img src={galleryImg4} alt='galleryImg4' />
            <img src={galleryImg5} alt='galleryImg5' />
            <img src={galleryImg6} alt='galleryImg6' />
            <img src={galleryImg7} alt='galleryImg7' />
            <img src={galleryImg8} alt='galleryImg8' />
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Gallery
