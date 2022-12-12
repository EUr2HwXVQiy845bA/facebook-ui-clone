import React, { useContext } from 'react'
import logo from '../imgs/facebook.png'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context'
import { useState } from 'react'


const Navbar = () => {
  const theme = useContext(ThemeContext)
  const [dark, setDark] = useState(true)

  const handleClick = () => {
    theme.dispatch({type: 'TOGGLE'})
    setDark(!dark)
  }
  return (
    <div className='navbar'>
      <Link to={''}>
        <img className='logo' src={logo} alt="logo" />
      </Link>
      <div className="search">
        <input type="text" placeholder='Search' />
        <i class='bx bx-search'></i>
      </div>
      <div className="menu">
        <div className="menu-child">
          <Link to={''} className='menu-item'>
            <i class='bx bx-home'></i>
          </Link>
          <Link to={'explore'} className='menu-item'>
            <i class='bx bx-compass' ></i>
          </Link>
          <Link to={'video/78d'} className='menu-item'>
            <i class='bx bxs-videos' ></i>
          </Link>
          <Link to={'chat'} className='menu-item'>
            <i class='bx bx-chat'></i>
          </Link>
          <Link className='menu-item'>
            <i class='bx bx-bell' ></i>
          </Link>
        </div>
      </div>
      <div className="right">
        {dark ? <i class='bx bxs-sun' onClick={handleClick}></i> : <i class='bx bxs-moon' onClick={handleClick}></i>}
        <Link to={'profile/aa'}>
          <img className='img-profile' src='https://picsum.photos/200/300' alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Navbar