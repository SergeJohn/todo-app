import React from 'react'
import "./style.css"

const Header = () => {
  return (
    <div className='header-container'>
        <nav >
            <h2>Seoji Todo App</h2>
            <div className='user-section'>
                <h3>Username</h3>
                <a href="">Login</a>
            </div>
        </nav>
    </div>
  )
}

export default Header