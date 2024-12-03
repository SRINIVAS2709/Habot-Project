import React from 'react'
import './Verify.css'

const Verify = () => {
  return (
    <div className='w-[1512px] h-[254px] font-poppins bg-[#E8FBFF] flex items-center justify-evenly mb-[123px] verify-container'>
        <h3 className='w-[563px] h-[40px] text-[#000000] text-[37.34px] leading-[40px] font-semibold veify-heading'>
        Let Suppliers <span className='border-b-4 border-orange verify-headspan'>Find You</span>
        </h3>
        <button className='w-[216px] h-[54px] bg-orange text-white text-[18px] leading-[24px] font-bold rounded-[5px] verify-btn'>
        Get Verified
        </button>
    </div>
  )
}

export default Verify