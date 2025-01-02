import React from 'react'
import BannerImg from "../../assets/banner.png";
function Banner() {
    return (
        <div className='flex flex-col gap-12 md:flex-row-reverse'>

            <div className='w-full md:w-1/2'>
                <img src={BannerImg} alt="" />
            </div>

            <div className='w-full md:w-1/2'>
                <h1 className='text-2xl font-medium md:text-5xl mb-7'>New Releases This Week</h1>
                <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>


                {/* NOte: utlilities class we have made in app.css also used by name not by .className as below */}
                <button className='btn-primary'>Subscribe</button>
            </div>

        </div>
    )
}

export default Banner
