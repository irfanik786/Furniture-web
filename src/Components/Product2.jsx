import React from 'react'
import './product2.css';

const Product2 = () => {
  return (
    <div className='main-divv'>
      <div className='divv-1'>
        <h2>PRODUCTS YOU MAY LIKE</h2>
        <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi</p>
         <p>quis viverra ornare, eros dolor interdum nulla.</p>
      </div>
      <div className='divv-2'>
        <div className='content'>
            <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular4.png.webp" alt="image" />
            <a>Bly Microfiber / Microsuede 56" Armless <br />Loveseat</a>
          <p>$367</p>
        </div>
        <div className='content'> 
            <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular5.png.webp" alt="image" />
            <a>Bly Microfiber / Microsuede 56" Armless<br /> Loveseat</a>
            <p>$367</p>
        </div>
        <div className='content'>
            <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular6.png.webp" alt="image" />
            <a>Bly Microfiber / Microsuede 56" Armless<br /> Loveseat</a>
            <p>$367</p>
        </div>
      </div>
      <div>
        <a className='dis-btn'>DISCOVER MORE</a>
      </div>
      <div className='divv-3'>
        <div className='dd-1'>
          <img src='https://preview.colorlib.com/theme/furn/assets/img/gallery/insta.png.webp' alt='instagram-icon' />
          <h2>Get Inspired with Instagram</h2>
          <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          <a className='dis-btn'>DISCOVER MORE</a>
        </div>
        <div className='dd-2'>
          <img src='https://preview.colorlib.com/theme/furn/assets/img/gallery/instra1.png.webp' alt='sofa-img-1'/>
          <img src='https://preview.colorlib.com/theme/furn/assets/img/gallery/instra2.png.webp' alt='sofa-img-2'/>
        </div>
      </div>
    </div>
  )
}

export default Product2
