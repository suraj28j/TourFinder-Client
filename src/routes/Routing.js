import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import Register from '../components/Register/Register'
import Tours from '../components/Tours/Tours'
import SingleTour from '../components/SingleTour/SingleTour'
import UpdateUser from '../components/UpdateUser/UpdateUser'
import SearchResult from '../components/Home/SearchResult'


const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/tours/:id' element={<SingleTour />} />
            <Route path='/updateuser/:id' element={<UpdateUser />} />
            <Route path='/tour/search/:city' element={<SearchResult />} />

        </Routes>
    )
}

export default Routing
