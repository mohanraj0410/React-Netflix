import React from 'react'
import logo from "../img/Netflix_Logo.png"

const Header = () => {
  return (
    <div>
        <nav>
            <div>
                <img className='brand-logo' src={logo} alt='netflix logo'/>
            </div>
        </nav>
    </div>
  )
}

export default Header;