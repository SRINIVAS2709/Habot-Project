import React from 'react'
import './Signup.css'
import rightArrow from '../../assets/rightArrow.png'

const Signup = () => {
    return (
        <div className='flex font-poppins items-center justify-start pl-[102px] signup-container'>
            <div className='flex justify-center items-start flex-col signup-div1'>
                <h2 className='font-bold signup-div1-heading'>Ready to dive into HABOT?</h2>
                <p className='w-[620px] h-[120px] text-[17.16px] leading-[28px] font-light mt-[35px] justify-start font-poppins signup-div1-para'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth.
                    Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take
                    the first step towards realizing your entrepreneurial dreams
                </p>
                <button className='mt-[37px] bg-[#00732F] w-[317px] h-[54px] flex items-center justify-evenly py-[19px] pl-[43px] text-[18px] text-white font-bold signup-div1-btn'>Sign up Today !
                    <img className='signup-btn-arrow' src={rightArrow} alt="right arrow" />
                </button>
            </div>
        {/* Locations Grid div   */}
        {/* we can achive this by some other methods eg: map(), but for simplicity and custom sizes of elements i choosed this */}
            <div className='signup-right'>
                <div className='w-[541px] h-[244px] grid grid-cols-2 grid-rows-2 gap-[21px] signup-div2'>
                    <button className='hover:bg-orange hover:flex hover:text-white hover:ease-out hover:duration-200 font-inter w-[260px] h-[65px] text-lightgrey text-[18.75px] leading-[32px] border-[2px]
                 border-orange pt-[17px] pb-[16px] flex items-center justify-center relative font-medium signup-div2-btn'>
                        Abu Dhabi
                        <img className='absolute right-6 btn-arrow' src={rightArrow} alt="right arrow" />
                    </button>
                    <button className='hover:bg-orange hover:flex hover:text-white hover:ease-out hover:duration-200 font-inter w-[260px] h-[65px] text-lightgrey text-[18.75px] leading-[32px] border-[2px]
                 border-orange pt-[17px] pb-[16px] flex items-center justify-center relative font-medium signup-div2-btn'>
                        Dubai
                        <img className='absolute right-10 btn-arrow' src={rightArrow} alt="right arrow" />
                    </button>
                    <button className='hover:bg-orange hover:flex hover:text-white hover:ease-out hover:duration-200 font-inter w-[260px] h-[65px] text-lightgrey text-[18.75px] leading-[32px] border-[2px]
                 border-orange pt-[17px] pb-[16px] flex items-center justify-center relative font-medium signup-div2-btn'>
                        Sharjah & Ajman
                        <img className='absolute right-3 btn-arrow' src={rightArrow} alt="right arrow" />
                    </button>
                    <button className='hover:bg-[#E7760D] hover:flex hover:text-white hover:ease-out hover:duration-200 font-inter w-[260px] h-[65px] text-lightgrey text-[18.75px] leading-[32px] border-[2px]
                 border-orange pt-[17px] pb-[16px] flex items-center justify-center relative font-medium signup-div2-btn'>
                        Fujairah
                        <img className='absolute right-10 btn-arrow' src={rightArrow} alt="right arrow" />
                    </button>
                    <button className='hover:bg-orange hover:flex hover:text-white hover:ease-out hover:duration-200 font-inter w-[260px] h-[65px] text-lightgrey text-[18.75px] leading-[32px] border-[2px]
                 border-orange pt-[17px] pb-[16px] flex items-center justify-center relative font-medium signup-div2-btn'>
                        Ras Al Khaimah
                        <img className='absolute right-4 btn-arrow' src={rightArrow} alt="right arrow" />
                    </button>
                    <button className='hover:bg-orange hover:flex hover:text-white hover:ease-out hover:duration-200 font-inter w-[260px] h-[65px] text-lightgrey text-[18.75px] leading-[32px] border-[2px]
                 border-orange pt-[17px] pb-[16px] flex items-center justify-center relative font-medium signup-div2-btn'>
                        Umm Al Quwain
                        <img className='absolute right-4 btn-arrow' src={rightArrow} alt="right arrow" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup