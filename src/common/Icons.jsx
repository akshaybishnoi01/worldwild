import React from 'react'
import twitter_logo from '../assets/image/twitter_logo.svg'
import telegram_logo from '../assets/image/telegram_logo.svg'
import dextools_logo from '../assets/image/dextools_logo.svg'
const Icons = () => {
  return (
    <>
      <div className=' bg_yellow '>
        <div className=' container'>
          <div className=' d-flex flex-wrap gap-4 justify-content-between align-items-center padding_y_39'>
            <div className=' d-flex gap-3  align-items-center'>
              <a href="https://x.com/?lang=en" target='blank'>
                <img src={twitter_logo} alt="twitter" />
              </a>
              <h3 className=' mb-0 ff-inter fw-semibold text-48 lh-58 color_emphasis'>
                twitter
              </h3>
            </div>
            <div className=' d-flex gap-3  align-items-center'>
              <a href="https://telegram.org/" target='blank'>
                <img src={telegram_logo} alt="telegram_logo" />
              </a>
              <h3 className=' mb-0 ff-inter fw-semibold text-48 lh-58 color_emphasis'>
                Telegram
              </h3>
            </div>
            <div className=' d-flex gap-3  align-items-center'>
              <a href="https://www.google.com/search?q=dextools" target='blank'>
                <img src={dextools_logo} alt="dextools_logo" />
              </a>
              <h3 className=' mb-0 ff-inter fw-semibold text-48 lh-58 color_emphasis'>
                DEXTOOLS
              </h3>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Icons