import React from 'react'
import './Footer.css'
import logo from '../../assets/footerLogo.png'
import linkedInIcon from '../../assets/linkedInIcon.png'
import twitterIcon from '../../assets/twitterIcon.png'
import facebookIcon from '../../assets/facebookIcon.png'
import instagramIcon from '../../assets/instagramIcon.png'


const Footer = () => {
    return (
        <section className='w-[1513px] h-[232px] bg-[#123557] mb-[4px] pt-[43px] pr-[151px] pb-[34px] pl-[161px] font-poppins footer-section'>
            <div className='w-[1200px] h-[155px] border-t-2 border-b-2 border-[#456381] pl-[26px] flex items-center gap-[52px] footer-container'>

                {/* logo  */}
                <div className='flex flex-col gap-4 text-center mt-auto footer-logo-div'>
                    <img className='footer-logo-img' src={logo} alt="" />
                    <p className='text-white text-[16px] leading-[32px] font-light footer-logo-text'>© R Singhania</p>
                </div>

                {/* Info Links */}
                <div className='flex translate-y-[-30px] gap-[50px] font-inter footer-links-div'>
                    <div className='w-[134.37px] h-[23px] footer-content-div'>
                        <h3 className='text-white text-[15.13px] leading-[24px] font-bold mb-[10px] footer-content-head'>Company</h3>
                        <p className='text-[14px] leading-[25px] text-white font-light footer-content-p'>About</p>
                        <p className='text-[14px] leading-[25px] text-white font-light footer-content-p'>FAQ</p>
                    </div>
                    <div className='w-[134.37px] h-[23px] footer-content-div'>
                        <h3 className='text-white text-[15.13px] leading-[24px] font-bold mb-[10px] footer-content-head'>Terms</h3>
                        <p className='text-[14px] leading-[25px] text-white font-light footer-content-p'>Data privacy</p>
                        <p className='text-[14px] leading-[25px] text-white font-light footer-content-p'>Terms</p>
                        <p className='text-[14px] leading-[25px] text-white font-light footer-content-p'>Accessibility</p>
                    </div>
                    <div className='w-[134.37px] h-[23px] footer-content-div'>
                        <h3 className='text-[#FFFFFF] text-[15.13px] leading-[24px] font-bold mb-[10px] footer-content-head'>Related</h3>
                        <p className='text-[14px] leading-[25px] text-white font-light footer-content-p'>Find Buyer</p>
                        <p className='text-[14px] leading-[25px] text-white font-light footer-content-p'>Feedback</p>
                    </div>
                </div>

                {/* social links */}
                <div className='w-[208px] h-[40px] flex ml-auto gap-[16px] footer-social-container'>
                    <img className='w-[40px] h-[40px] social-icon' src={linkedInIcon} alt="" />
                    <img className='w-[40px] h-[40px] social-icon' src={twitterIcon} alt="" />
                    <img className='w-[40px] h-[40px] social-icon' src={facebookIcon} alt="" />
                    <img className='w-[40px] h-[40px] social-icon' src={instagramIcon} alt="" />
                </div>

            </div>
        </section>
    )
}

export default Footer