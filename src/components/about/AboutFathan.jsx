import React from 'react'
import ig from '../../assets/ig.png'
import tt from '../../assets/tt.png'
import './about.css'

const AboutFathan = () => {
  return (
    <section className='about' id='aboutFathanFinkan'>
      <div className="aboutTypo">
        <span className="typoText">Fathan About</span>
        <span className="typoText">Fathan About</span>
        <span className="typoText">Fathan About</span>
      </div>
      <div className="aboutContentFathan">
        <h3 className="aboutIsi">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Autem, architecto cum odio suscipit doloribus numquam, qui delectus dolor a doloremque est!
        </h3> <br />
        <h4>Social Media Fathan</h4>
        <a href="https://www.instagram.com/alfathaannn/"><img src={ig} alt="ig" /> </a>
        <a href="https://www.tiktok.com/@fathaanx_"> <img src={tt} alt="tt" /></a>
      </div>
    </section>
  )
}

export default AboutFathan