import React from 'react'

const Newsletter = () => {
    return (
        <section className='text-center pb-20 md:mx-16 mx-4 border-b border-slate-300'>
            <h1 className='text-xl md:text-3xl mt-10'>
                SUBSCRIBE TO OUR NEWSLETTER
            </h1>
            <p className='mx-auto md:w-1/2 mt-2 text-sm'>
                Be virtually guided through interviews and video tutorials
                with people that have already done it (and done it well).
                The perks, discounts and events are the icing on the cake
            </p>

            <div className='mt-4 flex items-center justify-center'>
                <button className='text-xs md:text-sm py-3 px-6 bg-black text-white'>
                    Subscribe Now
                </button>
            </div>
        </section>
    )
}

export default Newsletter