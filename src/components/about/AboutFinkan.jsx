import React from 'react'
import ig from '../../assets/ig.png'
import tt from '../../assets/tt.png'
import './about.css'


const AboutFinkan = () => {
  return (
    <section className='about' id='aboutFinkan'>
      <div className="aboutTypo">
        <span className="typoText">About Finkan</span>
        <span className="typoText">About Finkan</span>
        <span className="typoText">About Finkan</span>
      </div>
      <div className="aboutContentFinkan">
        <h3 className="aboutIsi">
          Mungkin ga sedikit org bilang kalau "Manusia itu gada yg Sempurna" emmm aku percaya kata kata itu,  tapi setelah aku kenal dia, dibalik kata kata itu bagiku dialah  Manusia yang Sempurna dan terbaik yang aku kenal setelah ibuku,
          Sekali lagi makasih ya udah bisa selalu ngertiin aku, makasih atas semuanya, I LOVE YOU!!
        </h3>
        <p> ~ Muhammad Al Fathan, Bandar Lampung ~ </p> 
        <h4>Dia adalah (Finkan Agustina)</h4>
        <a href="https://www.instagram.com/finkanagustinaa/"><img src={ig} alt="ig" /> </a>
        <a href="https://www.tiktok.com/@nnatfan"> <img src={tt} alt="tt" /></a>
      </div>
    </section>
  )
}

export default AboutFinkan