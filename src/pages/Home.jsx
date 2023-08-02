import React from 'react'
import LoaderHome from '../components/loaderHome/LoaderHome'
import Beranda from '../components/berandaHome/Beranda'
import Navbar from '../components/navbar/Navbar'
import AboutFinkan from '../components/about/AboutFinkan'
import AboutFathan from '../components/about/AboutFathan'

const Home = () => {
  return (
    <div>
        <LoaderHome/>
        <Navbar/>
        <Beranda/>
        <AboutFinkan/>
        <AboutFathan/>
    </div>
  )
}

export default Home