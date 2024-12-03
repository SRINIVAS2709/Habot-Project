import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import downArrow from '../../assets/SVG.png'
import menu from '../../assets/menu.png'
import mobDownArrow from '../../assets/mob-arrowdown.png'

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }


  return (
    <nav className='font-poppins w-full h-[86px] items-center flex bg-[#FFFFFF] relative'>
    {/* logo */}
      <a href="#">
        <img className='nav-logo' src={logo} alt="Habot-logo" />
      </a>
    {/* Navlinks Div */}
      <div className='nav-links'>
        <a className='find-suppliers' href="#">Find suppliers</a>
        <div onClick={() => { document.querySelector('.dropdown-content').classList.toggle('hidden') }} className='service-div flex items-center justify-center relative'>
          <a className='service' href="#">Find Service Tags</a>
          <img className='w-[16px] h-[16px]' src={downArrow} alt="down arrow" />
        {/* Dropdown for desktop view */}
          <div className='hidden dropdown-content absolute bg-[#FFFFFF] h-[200px] overflow-scroll pl-4 pr-16 py-8 pt-2 flex-col items-start justify-center top-[73px] z-10 ronded-[5px]'>
            <input type="text" placeholder='Find Service Tags' className='my-3 border-[1px] border-[#0000002d] px-3 py-[5px] outline-none rounded-[10px] font-light' />
            <ul className='flex flex-col gap-2'>
              <a href="#"><li className='dropdown-li'>Backlink creation</li></a>
              <a href="#"><li className='dropdown-li'>Image/ Video creation</li></a>
              <a href="#"><li className='dropdown-li'>Content creation</li></a>
              <a href="#"><li className='dropdown-li'>GCP Deployment</li></a>
              <a href="#"><li className='dropdown-li'>Education and career counseling</li></a>
              <a href="#"><li className='dropdown-li'>Teacher Training</li></a>
            </ul>
          </div>
        </div>
        <a href="#">
          <button className='font-inter sign-btn border-[1px] border-[#00732F] text-[#00732F] flex justify-center 
          items-center font-bold rounded-[5px] hover:text-[#FFFFFF] hover:bg-[#00732F]'>
            Login / Sign Up
          </button>
        </a>
      </div>
      <div className='nav-mobile items-center justify-around hidden'>
        <a className='text-[17px] font-medium text-[#072F57] mobile-login' href="#">Login</a>
        <div>
          <a href="#">
            <img onClick={toggleVisibility} className='w-[30px] nav-menu' src={menu} alt="menu icon" />
          </a>
        </div>
      </div>
    {/* Navlinks for mobile screen */}
      {
        isVisible && (
          <div className='mob-nav-links absolute bg-white text-naviblue w-full left-0 top-[70px] hidden'>
            <a className='mob-find-suppliers' href="#">Find suppliers</a>
            <div onClick={() => { document.querySelector('.mob-dropdown-content').classList.toggle('hidden') }} className='mob-service-div relative'>
              <a className='mob-service' href="#">Find Service Tags</a>
              <img className='text-naviblue' src={mobDownArrow} alt="down arrow" />
              <div className='hidden mob-dropdown-content absolute top-[30px] left-[-15px] bg-white h-[190px] w-[300px] overflow-scroll pl-4 pr-16 py-8 pt-2 flex-col items-start justify-center z-10 ronded-[5px]'>
                <input type="text" placeholder='Find Service Tags' className='my-3 border-[1px] border-black px-3 py-[5px] outline-none rounded-[10px] w-[200px] font-light' />
                <ul className='flex flex-col gap-2'>
                  <a href="#"><li className='mob-dropdown-li'>Backlink creation</li></a>
                  <a href="#"><li className='mob-dropdown-li'>Image/ Video creation</li></a>
                  <a href="#"><li className='mob-dropdown-li'>Content creation</li></a>
                  <a href="#"><li className='mob-dropdown-li'>GCP Deployment</li></a>
                  <a href="#"><li className='mob-dropdown-li'>Education and career counseling</li></a>
                  <a href="#"><li className='mob-dropdown-li'>Teacher Training</li></a>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    </nav>
  )
}

export default Navbar
