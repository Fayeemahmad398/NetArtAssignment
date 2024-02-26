import React from 'react'
import logo from "../assets/logo.png"

function Header() {

    return (
        <div className="header">
            <div className="img-box">
                <a href="#">
                    <img src={logo} alt="img" />
                </a>
            </div>
        </div>
    )
}

export default Header
