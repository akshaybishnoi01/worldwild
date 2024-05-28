import React, { useState } from 'react'
import svg_1 from '../assets/image/navbar_svg.svg'
import twitter_svg from '../assets/image/twitter_svg.svg'
import telegram_svg from '../assets/image/telegram_svg.svg'
import file_icon from '../assets/image/bx_file.svg'
import men_img from '../assets/image/men_img.png'
import Icons from '../common/Icons'
const Herosection = () => {
  const [nav, setnav] = useState(false)
  return (
    <>
      <header className=' bg_black position-relative z-2'>
        <div className="container position-relative">
          <nav className='bg_nav padding_y_35'>
            <div className=' d-flex justify-content-between align-items-center '>
              <h1 className=' mb-0 text-40 lh-48 ff-inter color_emphasis'>
                Gxxx Gxxxxxx
              </h1>
              <div className={` ${nav ? "end-0" : "right_100"} mobile_view d-flex justify-content-center  align-items-center gap-4`}>
                <div className=' d-flex gap-4 pb-lg-0 pb-4'>
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
                <button className=' mb-0 text-16 fw-semibold ms-lg-4 color_emphasis lh-19 uniswap_btn '>
                  Buy On Uniswap
                </button>

              </div>
              <div className='icon-box  cur_pointer ' onClick={() => setnav(!nav)}>
                <span class="bar1"></span>
                <span class="bar2"></span>
                <span class="bar3"></span>
              </div>
            </div>
          </nav>
        </div>
        <div className=' container pt-5'>
          <div className=" row">
            <div className=' col-12 col-lg-6 col-md-8 py-5 mb-3'>
              <h2 className=' mb-0 text-108 fw-900 ff-inter lh-130 color_emphasis'>
                G<span className=' color_secondary'>G</span>
              </h2>
              <p className=" mb-0 ff-inter text-20 lh-24 color_emphasis">
                Join The <span className=' color_secondary'>Worldwide Blockchain</span> Protest Against Corrupt Government Bodies
              </p>
              <div className=' d-flex gap-4 mt-5 pt-4  mb-4'>
                <button className=' mb-0 text-16 lh-19 ff-inter bg_black fw-semibold comn_btn'>
                  Buy $GrayGensler
                </button>
                <button className='  mb-0 text-16 fw-semibold color_emphasis lh-19 uniswap_btn '>
                  How To Buy?
                </button>
              </div>
              <div className=' d-flex  align-items-center gap-2  bor_input mt-4 mb-4'>
                <input type="text" placeholder='dwqjddj324dnewdne3dewrrets' className=' mb-0 w-100 ff-inter text-20 lh-30 fw-normal input_bg color_emphasis' />
                <a href="">
                  <img src={file_icon} alt="file_icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=' men-img'>
          <img className='men_w_h' src={men_img} alt="men" />
        </div>

      </header>
    </>
  )
}

export default Herosection