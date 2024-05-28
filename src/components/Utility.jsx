import React from 'react'
import utility_img from '../assets/image/utelty-img.webp'
import notebook from '../assets/image/notebook.svg'
const Utility = () => {
    return (
        <>
            <section className=' utility_bg position-relative overflow-hidden'>
                <div className=" container pt-5">
                    <div className=" row py-lg-5 mt-lg-5">
                        <div className=" order-lg-1 order-2  col-12 col-lg-6 d-flex align-items-center pt-lg-0 pt-5">
                            <div>
                                <h1 className=' mb-0 ff-inter text-64 lh-77 fw-900 color_black'>
                                    UTILITY
                                </h1>
                                <p className=" mb-0 ff-inter color_black text-16 lh-25 fw-normal opacty_80 py-3 mw_550">
                                    The utility of $LHGG extends beyond its humorous appeal.  Holders of $LHGG gain access to exclusive merchandise,  events, and community perks. Furthermore, $LHGG serves  as a medium of exchange within our ecosystem, facilitating  transactions and interactions among community members.  Through strategic partnerships and integrations, we aim to  expand the utility
                                    of $LHGG, creating additional avenues for  adoption and growth.
                                </p>
                                <button className=' mb-0 text-16 lh-19 ff-inter bg_black fw-semibold comn_btn'>
                                    Buy $GrayGensler
                                </button>
                            </div>
                        </div>
                        <div className=" order-lg-2 order-1 col-12 col-lg-6 d-flex flex-column-reverse">
                            <div>
                                <img className=' w-100 utilityimg_' src={utility_img} alt="utility_img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='utility_fuding1 d-lg-block d-none'>
                    <p className=" mb-0 ff-grands fw-900 text-32 lh-32 rotation_text color_ter">
                        I love FUDing
                    </p>
                </div>
                <div className='utility_fuding2 d-lg-block d-none'>
                    <p className=" mb-0 ff-grands fw-900 text-32 lh-32 rotation_text color_ter">
                        I love FUDing
                    </p>
                </div>
                <div className='utility_fuding3 d-lg-block d-none'>
                    <p className=" mb-0 ff-grands fw-900 text-32 lh-32 color_ter">
                        I love FUDing
                    </p>
                </div>
                <div className='note_book d-lg-block d-none'>
                    <img src={notebook} alt="notebook" />
                </div>
                <div className='banner mb-5 mt-lg-0 mt-4'>
                    <p className=" mb-0 ff-inter fw-900 text-36  lh-43 text-center place_bg">
                        PLACE YOURSELF ON THE RIGHT SIDE OF HISTORY
                    </p>
                </div>
            </section>
        </>
    )
}

export default Utility