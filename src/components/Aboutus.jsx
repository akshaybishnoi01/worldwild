import React from 'react'
import menwithph from '../assets/image/menwithph.png'
import about_logo_1 from '../assets/image/about_logo_1.svg'
import about_logo_2 from '../assets/image/about_logo_2.svg'
import about_logo_3 from '../assets/image/about_logo_3.svg'
import about_logo_4 from '../assets/image/about_logo_4.svg'
import about_logo_5 from '../assets/image/about_logo_5.png'
import glasses from '../assets/image/glasses.svg'

const Aboutus = () => {
  return (
    <>
      <section className=' about_bg position-relative'>
        <div className=" container py-5">
          <div className=" row py-5 my-sm-5">
            <div className=" col-12 col-lg-6 pt-lg-5 mt-lg-5">
              <div className=' position-relative'>
                <img className=' w-100 about_img' src={menwithph} alt="#" />
                <div className='fuding_text1  d-lg-block d-none'>
                  <p className=" mb-0 ff-grands fw-900 text-32 lh-32 rotation_text color_ter">
                    I love FUDing
                  </p>
                </div>
                <div className='fuding_text2 d-xl-flex d-none'>
                  <p className=" mb-0 ff-grands fw-900 text-32 lh-32 rotation_text color_ter">
                    I love FUDing
                  </p>
                </div>
                <div className='fuding_text3  d-lg-flex d-none'>
                  <p className=" mb-0 ff-grands fw-900 text-32 lh-32 color_ter">
                    I love FUDing
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-12 col-lg-6 pt-5 d-flex  justify-content-center">
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
                <h1 className=' mb-0 ff-inter text-64 lh-77 color_black fw-900 py-4'>
                  ABOUT US
                </h1>
                <p className=" mb-0 text-16 lh-25 fw-normal color_black ff-inter opacty_80 mw_550">
                  In the ever-evolving landscape of cryptocurrency, where markets can swing on a tweet and sentiments wield as much power as technical analysis, one figure has recently stepped into the spotlight: Gary Gensler, or as we affectionately call him, GG. With his recent comments on Bitcoin, Gensler stirred the pot of fear, uncertainty,
                  and doubt (FUD), sending shockwaves through the crypto community.
                </p>
                <p className=" mb-0 text-16 lh-25 fw-normal color_black ff-inter opacty_80 mw_550 py-3">
                  But fear not, for in the midst of this whirlwind of emotions, there emerges a beacon of levity and laughter: Let's Hug GG ($LHGG).Hug GG We're not your average token; we're a humorous response to the serious business of crypto. Inspired by Gensler's remarks and the ensuing FUD frenzy, $LHGG aims to inject a healthy dose of humor into the conversation while
                  playfully encouraging individuals to consider selling their Bitcoins.
                </p>
                <p className=" mb-0 text-16 lh-25 fw-normal color_black ff-inter opacty_80 mw_550">
                  ou see, we believe that in times of uncertainty, a good laugh can be the best antidote. And what better way to address fear than with a hug—from behind, of course! Our slogan, "If you sell your BTC, we'll let you hug GG from behind so tightly," embodies our playful approach to
                  tackling the anxiety surrounding Bitcoin and the broader crypto market.
                </p>
                <p className=" mb-0 text-16 lh-25 fw-normal color_black ff-inter opacty_80 mw_550 pt-3">
                  So, buckle up and get ready for a rollercoaster ride of giggles, hugs, and maybe even a few profitable trades along the way. Because in the world of $LHGG, laughter
                  isn't just the best medicine—it's the best investment strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='glass d-sm-block d-none'>
          <img src={glasses} alt="glasses" />
        </div>
      </section>
    </>
  )
}

export default Aboutus