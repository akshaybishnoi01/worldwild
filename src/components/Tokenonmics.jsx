import React from 'react'
import blacktopframe from '../assets/image/black_frametop.png'
import blackbottomframe from '../assets/image/black_framebottom.png'
const Tokenonmics = () => {
    return (
        <>
            <section>
                <div className='frametop'>
                    <img className=' w-100' src={blacktopframe} alt="#" />
                </div>
                <div className=" bg_black">
                    <div className=" container py-5">
                        <div className=' row py-4'>
                            <div className=' col-12 col-lg-5 d-flex justify-content-lg-start justify-content-center'>
                                <div>
                                    <h2 className=' mb-0 fw-900 text-64 lh-77 color_emphasis ff-inter pb-4'>
                                        TOKENOMICS
                                    </h2>
                                    <p className=" mb-0 ff-inter text-16 lh-30 color_emphasis opacty_80 mw_454 pb-3">
                                        Let's Hug GG ($LHGG) operates on a deflationary tokenomics model designed to incentivize selling Bitcoin.  With a fixed total supply and a burn mechanism in place, each transaction contributes to reducing the  circulating supply of $LHGG, thereby increasing its scarcity and value over time. Additionally, a portion of  transaction fees is allocated to
                                        liquidity pools, ensuring stability and liquidity for $LHGG holders.
                                    </p>
                                    <div className=" box_token mw_404">
                                        <div className=' d-flex gap-3 '>
                                            <div className=' d-flex flex-column'>
                                                <p className=" mb-0 ff-inter text-20 lh-30 fw-normal color_emphasis">
                                                    Token Name:
                                                </p>
                                                <p className=" mb-0 ff-inter text-20 lh-30 fw-normal color_emphasis py-2">
                                                    Token Symbol:
                                                </p>
                                                <p className=" mb-0 ff-inter text-20 lh-30 fw-normal color_emphasis">
                                                    Total Supply:
                                                </p>
                                                <p className=" mb-0 ff-inter text-20 lh-30 fw-normal color_emphasis pt-2">
                                                    Total Type:
                                                </p>
                                            </div>
                                            <div>
                                                <p className=" mb-0 ff-inter fw-bold text-20 lh-30 color_emphasis">
                                                    Let’s Hug GG
                                                </p>
                                                <p className=" mb-0 ff-inter fw-bold text-20 lh-30 color_emphasis py-2">
                                                    $LHGG
                                                </p>
                                                <p className=" mb-0 ff-inter fw-bold text-20 lh-30 color_emphasis">
                                                    1 Billion $LHGG
                                                </p>
                                                <p className=" mb-0 ff-inter fw-bold text-20 lh-30 color_emphasis pt-2">
                                                    Solana SPL Token
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' col-12 col-lg-7 d-flex justify-content-lg-end justify-content-center justify-content-xl-center pt-lg-0 pt-5'>
                                <div className=' mw_618'>
                                    <div className=' d-flex flex-sm-row flex-column gap-4 mt-sm-4'>
                                        <div className=' box_markting'>
                                            <p className=" mb-0 ff-inter fw-semibold text-20 lh-30 text-center">
                                                Marketing & Partnerships
                                            </p>
                                            <p className=" mb-0 ff-inter fw-semibold text-32 lh-30 text-center pt-1">
                                                5%
                                            </p>
                                        </div>
                                        <div className=' box_reserve mt-sm-0 mt-2'>
                                            <p className=" mb-0 ff-inter fw-semibold text-20 lh-30 text-center">
                                                Reserve
                                            </p>
                                            <p className=" mb-0 ff-inter fw-semibold text-32 lh-30 text-center pt-1">
                                                5%
                                            </p>
                                        </div>
                                        <div className=' box_sale  mt-sm-0 mt-2'>
                                            <p className=" mb-0 ff-inter fw-semibold text-20 lh-30 text-center">
                                                Public Sale
                                            </p>
                                            <p className=" mb-0 ff-inter fw-semibold text-32 lh-30 text-center pt-1">
                                                45%
                                            </p>
                                        </div>
                                    </div>
                                    <div className=' d-flex flex-sm-row flex-column gap-4 mt-3'>
                                        <div className=' box_community'>
                                            <p className=" mb-0 ff-inter fw-semibold text-20 lh-30 text-center">
                                                Community Development
                                            </p>
                                            <p className=" mb-0 ff-inter fw-semibold text-32 lh-30 text-center pt-1">
                                                15%
                                            </p>
                                        </div>
                                        <div className=' box_fund ms-sm-1  mt-sm-0 mt-2'>
                                            <p className=" mb-0 ff-inter fw-semibold text-20 lh-30 text-center">
                                                Ecosystem Fund
                                            </p>
                                            <p className=" mb-0 ff-inter fw-semibold text-32 lh-30 text-center pt-1">
                                                10%
                                            </p>
                                        </div>
                                    </div>
                                    <div className=' d-flex justify-content-center align-items-center mt-3'>
                                        <div className='box_adisors '>
                                            <p className=" mb-0 ff-inter fw-semibold text-20 lh-30 text-center">
                                                Team & Adisors
                                            </p>
                                            <p className=" mb-0 ff-inter fw-semibold text-32 lh-30 text-center pt-1">
                                                20%
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='framebottom'>
                    <img className=' w-100' src={blackbottomframe} alt="#" />
                </div>
            </section>
        </>
    )
}

export default Tokenonmics
