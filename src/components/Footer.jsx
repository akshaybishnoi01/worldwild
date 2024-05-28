import React from 'react'
import svg_1 from '../assets/image/navbar_svg.svg'
import twitter_svg from '../assets/image/twitter_svg.svg'
import telegram_svg from '../assets/image/telegram_svg.svg'
const Footer = () => {
    return (
        <>
            <footer className=' bg-black'>
                <div className=' container py-5'>
                    <div className=' row py-5  my-lg-5'>
                        <div className=' col-12 col-lg-4 col-sm-6'>
                            <h3 className=' mb-0 ff-inter gg lh-77 color_emphasis fw-900'>
                                G<span className=' color_secondary'>G</span>
                            </h3>
                            <p className=" mb-0 fw-normal ff-inter color_emphasis text-16 lh-25 pt-3 ">
                                @copyright2024
                            </p>
                        </div>
                        <div className=' col-6 col-lg-2 '>
                            <div className=' d-flex justify-content-between align-items-center pt-sm-0 pt-4'>
                                <div className=' line_ d-sm-block d-none'></div>
                                <ul className=' px-0 d-flex gap-4 flex-column pt-2'>
                                    <li className=' mb-0 fw-bold ff-inter text-16 lh-25 color_emphasis pb-3'>QUICK LINKS</li>
                                    <li><a className=' mb-0 fw-normal ff-inter text-16 lh-25 color_emphasis' href="">Twitter</a></li>
                                    <li><a className=' mb-0 fw-normal ff-inter text-16 lh-25 color_emphasis' href="">Telegram</a></li>
                                    <li><a className=' mb-0 fw-normal ff-inter text-16 lh-25 color_emphasis' href="">DexTools</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-6">
                            <div className=' d-flex flex-sm-row flex-column gap-4 justify-content-lg-end pt-lg-0 pt-4'>
                                <a className='shrink' href="https://www.google.com/search?q=dextools" target='blank'>
                                    <img src={svg_1} alt="svg_1" />
                                </a>
                                <a className='shrink' href="https://x.com/?lang=en" target='blank'>
                                    <img src={twitter_svg} alt="twitter" />
                                </a>
                                <a className='shrink' href="https://telegram.org/" target='blank'>
                                    <img src={telegram_svg} alt="telegram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
