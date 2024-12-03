import React from 'react'
import './Hero.css'
import suitCase from '../../assets/suitcase.png'
import location from '../../assets/placeholder.png'


const Hero = () => {
  return (
    <section id='hero-section' className='font-poppins'>
    
    {/* Heading Text div */}
      <div className='areyousupplier-div text-white flex flex-col items-center '>
        <h1 className='flex flex-col items-center py-0 areyousupplier-text1 font-normal'><span className='areyousupplier-text2'>Are You a Supplier?</span>Explore Matching Opportunities.</h1>
      </div>

    {/* input & search button div */}
      <div className='flex items-center gap-[10px] input-div'>  
        <div className='flex bg-white pt-[10px] pr-[18px] pb-[6px] pl-[19px] items-center rounded-[5px] service-input-div'>
          <img className='w-[21px] h-[21px]' src={suitCase} alt="suitcase icon" />
          <input type="text" placeholder='Search your required service here' className='flex-1 pl-[22px] border-0 outline-none font-light service-input' />
        </div>
        <div className='flex bg-white pt-[10px] pr-[18px] pb-[6px] pl-[19px] items-center rounded-[5px] service-input-div'>
          <img className='w-[21px] h-[21px]' src={location} alt="location icon" />
          <input type="text" placeholder='Search your desired location here' className='flex-1 pl-[22px] border-0 outline-none font-light service-input' />
        </div>
        <button className='font-inter leading-[24px] bg-green text-white font-bold rounded-[5px] input-div-btn'>Search</button>
      </div>

      {/* are you a buyer text div */}
      <div className='mt-[34px] flex items-center text-white justify-center gap-3 areyoubuyer-div'>
        <h3 className='areyoubuyer-heading'>Are you a buyer?</h3>
        <p className='areyoubuyer-text font-normal'><a className='underline' href="#">Click here if you are looking to post a requirements</a></p>
      </div>

    </section>
  )
}

export default Hero