import Link from 'next/link'
import React from 'react'

const GlobalNews = () => {
    return (
        <section className='pb-20 mx-16 border-b border-slate-300'>
            <nav className="flex items-center justify-between border-slate-300 border-b py-3">

                <p className="text-3xl logo-span">
                    THE LATEST PODCASTS
                </p>


                <Link href="#" className='text-sm underline text-slate-500 '>
                    View all
                </Link>
            </nav>

            <div className='mt-14'>
                <div className='space-y-20'>

                    <div className='grid grid-cols-3 space-x-20'>
                        <div className='col-span-1'>
                            {/* <Image 
                            src=""
                            width={500}
                            height={500}
                            alt="fssff"
                                />
                            */}
                            <div style={{}} className="w-full h-40 bg-white">
                            </div>
                        </div>

                        <div className='col-span-2 '>
                            <div className="relative logo-span">
                                <div className="absolute top-1.5 -left-10 h-px w-5 bg-slate-600"></div>
                                <p className='text-sm'>By Glenj Josh</p>
                            </div>

                            <div className='space-y-3'>
                                <h1 className="text-2xl">
                                   How are the boundaries between masculine and 
                                   feminine being erased in fashion?
                                </h1>

                                <p className="text-sm tracking-wide mt-2 text-slate-500">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio cupiditate sunt assumenda? Sed totam
                                    veniam provident. Odio cupiditate sunt assumenda? Sed totam
                                    veniam provident.
                                </p>

                                <p className="space-x-3 font-light text-xs text-slate-400">
                                    <span> July 11 </span> {' '}
                                    <span> 2 mins read </span>
                                </p>

                            </div>


                        </div>
                    </div>

                    <div className='grid grid-cols-3 space-x-20'>
                        <div className='col-span-1'>
                            {/* <Image 
                            src=""
                            width={500}
                            height={500}
                            alt="fssff"
                                />
                            */}
                            <div style={{}} className="w-full h-40 bg-white">
                            </div>
                        </div>

                        <div className='col-span-2 '>
                            <div className="relative logo-span">
                                <div className="absolute top-1.5 -left-10 h-px w-5 bg-slate-600"></div>
                                <p className='text-sm'>By Glenj Josh</p>
                            </div>

                            <div className='space-y-3'>
                                <h1 className="text-2xl">
                                    What is the essence of Gandhi's philosophy?
                                </h1>

                                <p className="text-sm tracking-wide mt-2 text-slate-500">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio cupiditate sunt assumenda? Sed totam
                                    veniam provident. Odio cupiditate sunt assumenda? Sed totam
                                    veniam provident.
                                </p>

                                <p className="space-x-3 font-light text-xs text-slate-400">
                                    <span> July 11 </span> {' '}
                                    <span> 2 mins read </span>
                                </p>

                            </div>


                        </div>
                    </div>

                    <div className='grid grid-cols-3 space-x-20'>
                        <div className='col-span-1'>
                            {/* <Image 
                            src=""
                            width={500}
                            height={500}
                            alt="fssff"
                                />
                            */}
                            <div style={{}} className="w-full h-40 bg-white">
                            </div>
                        </div>

                        <div className='col-span-2 '>
                            <div className="relative logo-span">
                                <div className="absolute top-1.5 -left-10 h-px w-5 bg-slate-600"></div>
                                <p className='text-sm'>By Glenj Josh</p>
                            </div>

                            <div className='space-y-3'>
                                <h1 className="text-2xl">
                                    What is the tragedy behind Vrubel's paintings?
                                </h1>

                                <p className="text-sm tracking-wide mt-2 text-slate-500">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing
                                    elit. Odio cupiditate sunt assumenda? Sed totam
                                    veniam provident. Odio cupiditate sunt assumenda? Sed totam
                                    veniam provident.
                                </p>

                                <p className="space-x-3 font-light text-xs text-slate-400">
                                    <span> July 11 </span> {' '}
                                    <span> 2 mins read </span>
                                </p>

                            </div>


                        </div>
                    </div>                    

                </div>
            </div>
        </section>
    )
}

export default GlobalNews