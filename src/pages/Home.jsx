import React from 'react'
import LoaderHome from '../components/loaderHome/LoaderHome'
import Beranda from '../components/berandaHome/Beranda'
import Navbar from '../components/navbar/Navbar'
import AboutFathan from '../components/about/AboutFathan'

const Home = () => {
  return (
    <div>
        <LoaderHome/>
        <Navbar/>
        <Beranda/>
        <AboutFathan/>
    </div>
  )
}

export default Home