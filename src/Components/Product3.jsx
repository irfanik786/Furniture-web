import React from 'react'
import './product3.css';

const Product3 = () => {
  return (
    <div id='product3'>
      <div className='divv-1'>
        <h1>TOP PICK</h1>
        <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi</p>
         <p>quis viverra ornare, eros dolor interdum nulla.</p>
      </div>
      <div className="items">
        <div className="item-1">
          <img
            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular7.png"
            alt="item-1"
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$367</p>
        </div>
        <div className="item-1">
          <img
            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular8.png"
            alt="item-2"
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$367</p>
        </div>
        <div className="item-1">
          <img
            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular9.png"
            alt="item-3"
          />
          <a>Bly Microfiber / Microsuede 56" Armless Loveseat</a>
          <p>$367</p>
        </div>
      </div>
      <div className='dis-btns'>
      <a className='dis-btn'>DISCOVER MORE</a>
      </div>
    </div>
  )
}

export default Product3
