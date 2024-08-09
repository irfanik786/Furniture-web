import React from 'react'

import  {useState} from 'react'; 
import { FaLevelUpAlt } from "react-icons/fa";
import { Button } from './scroll.js'; 

const ScrollButton = () => {
  const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  
  window.addEventListener('scroll', toggleVisible); 

  return (
    <div>
      <Button style={{display: visible ? 'inline' : 'none'}}> 
      <FaLevelUpAlt onClick={scrollToTop} 
      />
     {/* <FaArrowCircleUp onClick={scrollToTop}  
        style={{display: visible ? 'inline' : 'none'}} />  */}
    </Button> 
    </div>
  )
}

export default ScrollButton
