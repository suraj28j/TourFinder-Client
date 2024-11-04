import React from 'react'
import './Tours.css';
import tourBanner from '../../assets/images/tours.jpg';
import SearchBar from '../Home/SearchBar.jsx'
import FeaturedTours from './FeaturedTours.jsx'
import Subscribe from '../Home/Subscribe.jsx'

const Tours = () => {

  return (
    <>
      <div className='tourBanner position-relative'>
        <h1 className='allTours text-light position-absolute top-50 start-50 translate-middle z-1'>All Tours</h1>
        <img src={tourBanner} alt='tour-banner' />
      </div>

      <div className='container' >
        <SearchBar />
        <FeaturedTours/>
        <Subscribe/>
      </div>
    </>
  )
}

export default Tours
