import React from 'react'
import HeaderImg from '../assets/images/banner.jpg'

function Header() {
    return (
        <div>
            <img className="header-img" src={HeaderImg} alt="pattern in blue" />
        </div>
    )
}

export default Header