import React from 'react'
import './css/Header.css'

const Header =()=> {
  function click(name){
    console.log(name);
  }
  

  return (
    <div>
        <p className='para'>Header</p>
        <p>body</p>
        <p>Footer</p>
    
    </div>
  )
  }

export default Header