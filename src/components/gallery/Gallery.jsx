import React, { useEffect } from 'react'
import './gallery.css'

const Gallery = () => {
  useEffect(() => {
    activeslideimg();
  }, []);

  function activeslideimg(activeSlide = 2) {
    const slides = document.querySelectorAll(".slide");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
      slide.addEventListener("click", () => {
        clearActiveclasses();

        slide.classList.add("active");
      });
    }

    function clearActiveclasses() {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
  }

  return(
  <div>
    <div className="container">

      <div className="slide pict1"><h3>Our</h3>
      </div>

      <div className="slide pict2"><h3>Our</h3>
      </div>

      <div className="slide pict3"><h3>Our</h3>
      </div>

      <div className="slide pict4"><h3>Our</h3>
      </div>

      <div className="slide pict5"><h3>Our</h3>
      </div>
      
      <div className="slide pict6"><h3>Our</h3>
      </div>

      <div className="slide pict7"><h3>Our</h3>
      </div>

      <div className="slide pict8"><h3>Our</h3>
      </div>

      <div className="slide pict9"><h3>Our</h3>
      </div>

      <div className="slide pict10"><h3>Our</h3>
      </div>

      
    </div>
  </div>
  )
}

export default Gallery