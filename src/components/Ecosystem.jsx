import React from 'react'
import menwithpaper from '../assets/image/menwithpaper.png'
import about_logo_1 from '../assets/image/about_logo_1.svg'
import about_logo_2 from '../assets/image/about_logo_2.svg'
import about_logo_3 from '../assets/image/about_logo_3.svg'
import about_logo_4 from '../assets/image/about_logo_4.svg'
import about_logo_5 from '../assets/image/about_logo_5.png'
import glasses from '../assets/image/glasses.svg'
import chart_paper from '../assets/image/chart_paper.png'
const Ecosystem = () => {
    return (
        <>
            <section className=' ecosystem_bg position-relative'>
                <div className=" container py-5 mt-lg-5">
                    <div className=" row py-lg-5 ">
                        <div className=" col-12 col-lg-5">
                            <div>
                                <img className=' w-100 men_withpaper' src={menwithpaper} alt="men" />
                            </div>
                        </div>
                        <div className=" col-12 col-lg-6 d-flex justify-content-end pt-5">
                            <div>
                                <div className=' d-flex flex-wrap align-items-center gap-4'>
                                    <a href="https://www.google.com/search?q=dextools" target=' blank'>
                                        <img src={about_logo_1} alt="about_logo_1" />
                                    </a>
                                    <a href="#">
                                        <img src={about_logo_2} alt="about_logo_2" />
                                    </a>
                                    <a href="https://x.com/?lang=en" target='blank'>
                                        <img src={about_logo_3} alt="about_logo_3" />
                                    </a>
                                    <a href="https://telegram.org/" target='blank'>
                                        <img src={about_logo_4} alt="about_logo_4" />
                                    </a>
                                    <a href="#">
                                        <img src={about_logo_5} alt="about_logo_5" />
                                    </a>
                                </div>
                                <h2 className=' mb-0 ff-inter fw-900 text-64 lh-77 color_black py-3'>
                                    ECOSYSTEM
                                </h2>
                                <p className=" mb-0 ff-inter color_black opacty_80 fw-normal text-16 lh-25 mw_547">
                                    The $LHGG ecosystem is built upon the principles of inclusivity,  humor, and innovation. Our community-driven approach  empowers members to actively participate in governance,  decision-making, and promotional activities. Through social  media campaigns, memes, and creative content, we seek to  amplify the message of embracing humor in the crypto space  and challenging conventional narratives. Together, we aspire to
                                    foster a vibrant and engaging ecosystem where laughter reigns  supreme.
                                </p>
                                <button className=' mb-0 text-16 lh-19 ff-inter bg_black fw-semibold comn_btn mt-4'>
                                    Buy $GrayGensler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' glass_pos d-lg-block d-none'>
                    <img src={glasses} alt="glasses" />
                </div>
                <div className=' page d-md-block d-none'>
                    <img src={chart_paper} alt="chater_paper" />
                </div>
            </section >
        </>
    )
}

export default Ecosystem