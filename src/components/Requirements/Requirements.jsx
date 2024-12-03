import { React, useEffect, useState } from 'react'
import requirementsImg from '../../assets/postYourReq.png'
import youtubeIcon from '../../assets/youtube.png'
import checkedIcon from '../../assets/checked.png'
import './Requirements.css'


const Requirements = () => {

    const [menu, setMenu] = useState("buyer");

    return (
        <section className='px-[98px] mb-[144px] font-poppins requirementSection'>
            <div className='w-[1316px] h-[623px] bg-naviblue rounded-[5px] pl-[72px] pt-[137px] pb-[136px] flex gap-[65px] requirements-container'>

                {/* Youtube video */}

                <iframe width="640" height="350" src="https://www.youtube.com/embed/i8tgRHXx4oQ?si=TBp6pM9Nl8VRFjdp" title="YouTube video player"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='rounded-[5px] yotube-frame'>

                </iframe>

               {/* Buyer and supplier Desktop View  */}
                <div className='buyersupplier-info-container'>
                    <div className='flex gap-[88px] buyersupplier-container'>

                        {/* used useState hook to change border and Info */}
                        <h4 onClick={() => { setMenu("buyer") }}
                            className={`w-[202px] h-[47px]  leading-[32px] text-[26px] font-bold flex flex-col gap-[11px] items-center cursor-pointer buyer-head-div
                            ${menu === "buyer" ? 'text-lightOrange border-b-[4px] border-lightOrange' : 'text-white'}`}>
                            Buyer
                        </h4>

                       {/* used useState hook to change border and Info */}
                        <h4 onClick={() => { setMenu("suppliers")}}
                            className={`w-[202px] h-[47px] leading-[32px] text-[26px] font-bold flex flex-col gap-[11px] items-center cursor-pointer supplier-head-div
                            ${menu === "suppliers" ? 'text-lightOrange border-b-[4px] border-lightOrange' : 'text-white'}`}>
                            Supplier
                        </h4>
                    </div>

                    <div className='w-[461px] h-[156px] mt-[40px] buyersupplier-info-div'>
                        <div className='flex gap-[10px] items-baseline info-div'>
                            <img className='w-[18px] h-[18px] info-icon' src={checkedIcon} alt="checked arrow" />
                            <p className='text-white text-[18.75px] leading-[39px] info-text'>{menu === "buyer" ? "Post your requirements." : "Complete your profile and get verified."}</p>
                        </div>
                        <div className='flex gap-[10px] items-baseline info-div'>
                            <img className='w-[18px] h-[18px] info-icon' src={checkedIcon} alt="checked arrow" />
                            <p className='text-[rgb(255,255,255)] text-[18.75px] leading-[39px] info-text'>{menu === "buyer" ? "Sit back for multiple suppliers to contact you." : "select service tags for relevant opportunities."}</p>
                        </div>
                        <div className='flex gap-[10px] items-baseline info-div'>
                            <img className='w-[18px] h-[18px] info-icon' src={checkedIcon} alt="checked arrow" />
                            <p className='text-white text-[18.75px] leading-[39px] info-text'>{menu === "buyer" ? "Choose among the suppliers based on the ratings and reviews." : "Contact buyers, and expand your business."}</p>
                        </div>
                    </div>
                </div>

                {/* Mobile view of buyer and supplier div*/}

                <div className='text-white mob-container hidden'>
                    <div className='mob-buyer-div'>
                        <h4 className='mob-heading'>Buyers</h4>
                        <div className='flex gap-[10px] items-baseline mob-info-div'>
                            <img className='w-[18px] h-[18px] mob-info-icon' src={checkedIcon} alt="checked arrow" />
                            <p className='text-white text-[18.75px] leading-[39px] mob-info-text'>Post your requirements.</p>
                        </div>
                        <div className='flex gap-[10px] items-baseline mob-info-div'>
                            <img className='w-[18px] h-[18px] mob-info-icon' src={checkedIcon} alt="checked arrow" />
                            <p className='text-white text-[18.75px] leading-[39px] mob-info-text'>Sit back for multiple suppliers to contact you.</p>
                        </div>
                        <div className='flex gap-[10px] items-baseline mob-info-div'>
                            <img className='w-[18px] h-[18px] mob-info-icon' src={checkedIcon} alt="checked arrow" />
                            <p className='text-white text-[18.75px] leading-[39px] mob-info-text'>Choose among the suppliers based on the ratings and reviews.</p>
                        </div>
                    </div>
                    <div className='mob-supplier-div'>
                        <h4 className='mob-heading'>Suppliers</h4>
                        <div className='flex gap-[10px] items-baseline mob-info-div'>
                            <img className='w-[18px] h-[18px] mob-info-icon' src={checkedIcon} alt="checked arrow" />
                            <p className='text-white text-[18.75px] leading-[39px] mob-info-text'>Complete your profile and get verified</p>
                        </div>
                        <div className='flex gap-[10px] items-baseline mob-info-div'>
                            <img className='w-[18px] h-[18px] mob-info-icon' src={checkedIcon} alt="checked arrow" />
                            <p className='text-white text-[18.75px] leading-[39px] mob-info-text'>select service tags for relevant opportunities</p>
                        </div>
                        <div className='flex gap-[10px] items-baseline mob-info-div'>
                            <img className='w-[18px] h-[18px] mob-info-icon' src={checkedIcon} alt="checked arrow" />
                            <p className='text-white text-[18.75px] leading-[39px] mob-info-text'>Contact buyers, and expand your business</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Requirements
