import React from 'react'
import ig from '../../assets/ig.png'
import './about.css'

const AboutFathan = () => {
  return (
    <section className='about' id='aboutFathanFinkan'>
      <div className="aboutTypo">
        <span className="typoText">About Us</span>
        <span className="typoText">About Us</span>
        <span className="typoText">About Us</span>
      </div>
      <div className="aboutContentFathan">
        <h3 className="aboutIsi">
        Kebahagiaan yang paling sempurna adalah kebahagiaan bersama orang yang sederhana, tapi memperlakukanku dengan cara istimewa.
        </h3> <br />
        <h5>#aboutUs - 12:52 AM, 19th.</h5>
        <a className='ig1' href="https://www.instagram.com/alfathaannn/"><img src={ig} alt="ig" /> </a>
        <a className='ig1' href="https://www.instagram.com/finkanagustinaa/"> <img src={ig} alt="ig" /></a>
      </div>
    </section>
  )
}

export default AboutFathan