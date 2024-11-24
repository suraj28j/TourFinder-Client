import React, { useState } from 'react'
import Header from '../Header/Header'
import Routing from '../../routes/Routing'
import Footer from '../Footer/Footer'

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const tonggleBackgroundColor = () => {
    setIsDarkMode(!isDarkMode);
  }

  const backgroundClass = isDarkMode ? "bg-dark text-light" : "bg-light text-dark";
  return (
    <div className={backgroundClass}>
      <Header isDarkMode={isDarkMode} tonggleBackgroundColor={tonggleBackgroundColor} />
      <Routing />
      <Footer />
    </div>
  )
}

export default Layout
