import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {

  

  return (
    <nav className={`flex  items-center list-none justify-between bg-${props.mode}  h-14`}>

      <p className="text-2xl">{props.logo}</p>

      <div className="links flex gap-7 pr-5">
          <li><a href="/">Home</a></li>
          <li><a href="/">{props.aboutSec}</a></li>
          <li><a href="/">Contact</a></li>
      </div>


    
    </nav>
  )
}


Navbar.propTypes ={
    logo : PropTypes.string,
    aboutSec : PropTypes.string
}

Navbar.defaultProps = {
    logo:"Logo Here",
    aboutSec: "About Section Link here"
}