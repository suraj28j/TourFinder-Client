import React from 'react'
import './Home.css'
import FeaturedTours from './FeaturedTours.jsx'
import Services from './Services.jsx'
import Experience from './Experience.jsx'
import ClientsReview from './ClientsReview.jsx'
import Gallery from './Gallery.jsx'
import SearchBar from './SearchBar.jsx'
import Subscribe from './Subscribe.jsx'
import Heading from './Heading.jsx'


const Home = () => {
    return (
        <>
            <Heading />
            <SearchBar />
            <Services />
            <FeaturedTours />
            <Experience />
            <Gallery />
            <ClientsReview />
            <Subscribe />
        </>
    )
}

export default Home
