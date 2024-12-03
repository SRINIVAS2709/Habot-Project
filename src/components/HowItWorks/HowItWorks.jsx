import React from 'react'
import './HowItWorks.css'
import signUpIcon from '../../assets/signUpUser.png'
import postIcon from '../../assets/postIcon.png'
import reviewIcon from '../../assets/reviewIcon.png'
import getNotifiedIcon from '../../assets/getNotified.png'
import completeIcon from '../../assets/completeIcon.png'
import handShakeIcon from '../../assets/handShake.png'


const HowItWorks = () => {
    return (
        <section className='px-[156px] w-[1512px] h-[809px] flex flex-col items-center justify-center text-[#222222] font-poppins mb-110px howitworks-container'>
             {/* Heading and paragraph */}
            <h2 className='w-[287px] h-[48px] text-[37.34px] leading-[48px] font-bold mt-[15px] mb-[26px] howitworks-heading'>How it works?</h2>
            <p className='w-[839px] h-[52px] text-center text-[17.16px] leading-[26px] font-normal mb-[73px] howitworks-para'>
                Buyers post their needs and review top suppliers, while suppliers complete profiles,
                connect with potential buyers, and build successful business relationships, sharing
                valuable feedback.
            </p>
              {/* grid div*/}
              {/* we can achive this by some other methods eg: map(), but for simplicity and custom sizes of elements i choosed this */}
            <div className='howitworks-grid-main-div w-full'>
                <div className='w-[1200px] h-[508px] grid grid-cols-3 howitworks-grid-container'>
                    <div className='w-[400px] h-[254px] bg-[#E8FBFF] flex flex-col items-center justify-center gap-[38.65px] howitworks-grid-individual-div'>
                        <img className='w-[74.35px] h-[74.35px] individual-div-img' src={signUpIcon} alt="Signup icon" />
                        <h3 className='text-[#000000] w-[206px] h-[53px] text-[20px] leading-[26px] font-medium text-center individual-div-text'>Select Your Role and Sign Up</h3>
                    </div>
                    <div className='w-[400px] h-[254px] bg-[#FFFFFF] flex flex-col items-center justify-center gap-[30px] howitworks-grid-individual-div'>
                        <img className='w-[75px] h-[75px] individual-div-img' src={postIcon} alt="Signup icon" />
                        <h3 className='text-[#000000] w-[206px] h-[53px] text-[20px] leading-[26px] font-medium text-center individual-div-text'>Buyers Post Your Requirements</h3>
                    </div>
                    <div className='w-[400px] h-[254px] bg-[#E8FBFF] flex flex-col items-center justify-center gap-[24.46px] howitworks-grid-individual-div'>
                        <img className='w-[76.01px] h-[77.54px] individual-div-img' src={reviewIcon} alt="Signup icon" />
                        <h3 className='text-[#000000] w-[273px] h-[53px] text-[20px] leading-[26px] font-medium text-center individual-div-text'> Review, Select, and Contact the Best Suppliers</h3>
                    </div>
                    <div className='w-[400px] h-[254px] bg-[#FFFFFF] flex flex-col items-center justify-center gap-[30px] howitworks-grid-individual-div'>
                        <img className='w-[75px] h-[75px] individual-div-img' src={getNotifiedIcon} alt="Signup icon" />
                        <h3 className='text-[#000000] w-[267px] h-[53px] text-[20px] leading-[26px] font-medium text-center individual-div-text'> Suppliers Complete your profile and get notified for opportunities</h3>
                    </div>
                    <div className='w-[400px] h-[254px] bg-[#E8FBFF] flex flex-col items-center justify-center gap-[30px] howitworks-grid-individual-div'>
                        <img className='w-[75px] h-[75px] individual-div-img' src={completeIcon} alt="Signup icon" />
                        <h3 className='text-[#000000] w-[299px] h-[53px] text-[20px] leading-[26px] font-medium text-center individual-div-text'>Contact to Buyers and Share your Quote for the service</h3>
                    </div>
                    <div className='w-[400px] h-[254px] bg-[#FFFFFF] flex flex-col items-center justify-center gap-[29px] howitworks-grid-individual-div'>
                        <img className='w-[86.69px] h-[85.34px] individual-div-img' src={handShakeIcon} alt="Signup icon" />
                        <h3 className='text-[#000000] w-[306px] h-[53px] text-[20px] leading-[26px] font-medium text-center individual-div-text'>Both the Parties can Connect and Make Business Leave a Feedback</h3>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HowItWorks