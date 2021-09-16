import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { AppProvider, useGlobalContext } from './context'
import sublinks from './data'

const Navbar = (e) => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  const displaySubmenu = (e) => {
    //console.log(e.target.classList.contains('link-btn'))
    const page = e.target.textContent
    // return the size of an element and position relative to the viewport
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3

    openSubmenu(page, { center, bottom })
  }
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stript' className='nav-logo' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {sublinks.map((link, index) => {
            const { page } = link
            return (
              <li key={index}>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                  {page}
                </button>
              </li>
            )
          })}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
