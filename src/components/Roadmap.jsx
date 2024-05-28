import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toplayer from '../assets/image/toplayer.png'
import roadmap_line1 from '../assets/image/roadmap_line1.svg'
import roadmap_line2 from '../assets/image/roadmap_line2.svg'
import roadmap_line3 from '../assets/image/roadmap_line3.svg'
import roadmap_line4 from '../assets/image/roadmap_line4.svg'
import roadmap_line5 from '../assets/image/roadmap_line5.svg'
import bootomlayer from '../assets/image/bottomlayer.png'
const Roadmap = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 3000,
    autoplaySpeed: 0,
    slidesToShow: 5,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className=' overflow-hidden'>
        <div className='frametop'>
          <img className=' w-100' src={toplayer} alt="#" />
        </div>
        <div className=' bg_black py-lg-5'>
          <div className=' d-flex flex-column justify-content-center align-items-center py-5'>
            <h2 className=' mb-0 ff-inter fw-900 text-64 lh-77 color_emphasis text-center py-lg-5 py-4'>
              ROADMAP
            </h2>
            <p className=" mb-0 ff-inter fw-normal text-16 lh-30 color_emphasis opacity-75 text-center mw_894 pb-lg-5 pb-3">
              Our roadmap isn't just a journey; it's a comedic adventure  through the cryptoverse, filled with twists, turns, and plenty of  laughs alo
              ng the way. Here's a glimpse into what the future holds  for Let's Hug GG ($LHGG)
            </p>
          </div>
          <div className=' pb-5  ps-4    ms-auto'>
            <Slider className=' '  {...settings}>
              <div className=' '>
                <div className=' d-flex gap-2 pt-5 mt-4'>
                  <div>
                    <img src={roadmap_line1} alt="line1" />
                  </div>
                  <div className=' d-flex flex-column justify-content-end pb-4'>
                    <h4 className=' mb-0 ff-inter text-24 lh-29 fw-900 color_emphasis mw_185'>
                      Token Launch (Q1 2024)
                    </h4>
                    <p className=" mb-0 ff-inter fw-normal text-16 lh-30 color_emphasis opacity-75 mw_196 pb-2">
                      Launch $LHGG token, establish initial  liquidity.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className=' d-flex gap-2'>
                  <div>
                    <img src={roadmap_line2} alt="line2" />
                  </div>
                  <div className=' d-flex flex-column justify-content-center pb-3'>
                    <h4 className=' mb-0 ff-inter text-24 lh-29 fw-900 color_emphasis mw_237'>
                      Community Building (Q2 2024)
                    </h4>
                    <p className=" mb-0 ff-inter fw-normal text-16 lh-30 color_emphasis opacity-75 mw_196">
                      Grow vibrant community  through humor and engagement.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className=' d-flex gap-2 pb-5'>
                  <div>
                    <img src={roadmap_line3} alt="line3" />
                  </div>
                  <div className=' d-flex flex-column pt-3'>
                    <h4 className=' mb-0 ff-inter text-24 lh-29 fw-900 color_emphasis mw_237'>
                      Governance Implementation (Q3 2024)
                    </h4>
                    <p className=" mb-0 ff-inter fw-normal text-16 lh-30 color_emphasis opacity-75 mw_196">
                      Introduce community  governance mechanisms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=' d-flex gap-2'>
                  <div>
                    <img src={roadmap_line4} alt="line4" />
                  </div>
                  <div className=' d-flex flex-column justify-content-end pb-3'>
                    <h4 className=' mb-0 ff-inter text-24 lh-29 fw-900 color_emphasis mw_250 '>
                      Partnerships and Influencer Collaborations (Q4 2024)
                    </h4>
                    <p className=" mb-0 ff-inter fw-normal text-16 lh-30 color_emphasis opacity-75 mw_250 ">
                      Forge  strategic partnerships and collaborations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=' d-flex gap-2'>
                  <div>
                    <img src={roadmap_line5} alt="line5" />
                  </div>
                  <div className=' d-flex flex-column justify-content-center pb-3'>
                    <h4 className=' mb-0 ff-inter text-24 lh-29 fw-900 color_emphasis mw_237'>
                      Utility Expansion (Q1 2025)
                    </h4>
                    <p className=" mb-0 ff-inter fw-normal text-16 lh-30 color_emphasis opacity-75 mw_196">
                      Explore new use cases and  integrations for $LHGG.
                    </p>
                  </div>
                </div>
              </div>
              <div className=' '>
                <div className=' d-flex gap-2 pt-5 mt-4'>
                  <div>
                    <img src={roadmap_line1} alt="line1" />
                  </div>
                  <div className=' d-flex flex-column justify-content-end pb-4'>
                    <h4 className=' mb-0 ff-inter text-24 lh-29 fw-900 color_emphasis mw_185'>
                      Token Launch (Q1 2024)
                    </h4>
                    <p className=" mb-0 ff-inter fw-normal text-16 lh-30 color_emphasis opacity-75 mw_196 pb-2">
                      Launch $LHGG token, establish initial  liquidity.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className=' d-flex gap-2'>
                  <div>
                    <img src={roadmap_line2} alt="line2" />
                  </div>
                  <div className=' d-flex flex-column justify-content-center pb-3'>
                    <h4 className=' mb-0 ff-inter text-24 lh-29 fw-900 color_emphasis mw_237'>
                      Community Building (Q2 2024)
                    </h4>
                    <p className=" mb-0 ff-inter fw-normal text-16 lh-30 color_emphasis opacity-75 mw_196">
                      Grow vibrant community  through humor and engagement.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className=' d-flex gap-2 pb-5'>
                  <div>
                    <img src={roadmap_line3} alt="line3" />
                  </div>
                  <div className=' d-flex flex-column pt-3'>
                    <h4 className=' mb-0 ff-inter text-24 lh-29 fw-900 color_emphasis mw_237'>
                      Governance Implementation (Q3 2024)
                    </h4>
                    <p className=" mb-0 ff-inter fw-normal text-16 lh-30 color_emphasis opacity-75 mw_196">
                      Introduce community  governance mechanisms.
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className=' framebottom'>
          <img className=' w-100' src={bootomlayer} alt="#" />
        </div>
      </section>
    </>
  )
}

export default Roadmap