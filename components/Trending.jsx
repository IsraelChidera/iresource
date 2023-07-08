import Link from 'next/link'
import React from 'react'

const Trending = () => {
    return (
        <section className='pb-20 mx-16 border-b border-slate-300'>
            <nav className="flex items-center justify-between border-slate-300 border-b py-3">

                <p className="text-3xl logo-span">
                    TODAY'S TRENDING
                </p>


                <Link href="#" className='text-sm underline text-slate-500 '>
                    View all
                </Link>
            </nav>

            <div>
                <div className='mt-10 flex items-center justify-between'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-x-10 mt-4'>
                    <div >
                        {/* <Image 
                        src=""
                        width={500}
                        height={500}
                        alt="fssff"
                            />
                         */}
                        <div style={{}} className="w-full h-40 bg-white">
                        </div>

                        <div className="font-light text-xs text-slate-400 mt-2 flex items-center justify-between">
                            <p className="space-x-3">
                                <span> July 11 </span> {' '}
                                <span> 2 mins read </span>
                            </p>

                            <div className="relative logo-span">
                                <div className="absolute top-1.5 -left-10 h-px w-5 bg-slate-600"></div>
                                <p>By Glenj Josh</p>
                            </div>
                        </div>

                        <div className="mt-2">
                            <h1 className="text-xl leading-6">
                                A Brit in America Makes Sense of the
                                Meghan Markle Oprah 
                                Interview
                            </h1>
                            
                        </div>
                    </div>

                    <div >
                        {/* <Image 
                        src=""
                        width={500}
                        height={500}
                        alt="fssff"
                            />
                         */}
                        <div style={{}} className="w-full h-40 bg-white">
                        </div>

                        <div className="font-light text-xs text-slate-400 mt-2 flex items-center justify-between">
                            <p className="space-x-3">
                                <span> July 11 </span> {' '}
                                <span> 2 mins read </span>
                            </p>

                            <div className="relative logo-span">
                                <div className="absolute top-1.5 -left-10 h-px w-5 bg-slate-600"></div>
                                <p>By Glenj Josh</p>
                            </div>
                        </div>

                        <div className="mt-2">
                            <h1 className="text-xl leading-6">
                                In Deborah Robert's Art, an Interrogation of What Society
                                Imposes on Black Children
                            </h1>
                            
                        </div>
                    </div>

                    <div >
                        {/* <Image 
                        src=""
                        width={500}
                        height={500}
                        alt="fssff"
                            />
                         */}
                        <div style={{}} className="w-full h-40 bg-white">
                        </div>

                        <div className="font-light text-xs text-slate-400 mt-2 flex items-center justify-between">
                            <p className="space-x-3">
                                <span> July 11 </span> {' '}
                                <span> 2 mins read </span>
                            </p>

                            <div className="relative logo-span">
                                <div className="absolute top-1.5 -left-10 h-px w-5 bg-slate-600"></div>
                                <p>By Glenj Josh</p>
                            </div>
                        </div>

                        <div className="mt-2">
                            <h1 className="text-xl leading-6">
                                Spring Skirts Have Sprung - 6 Ways
                                to Wear Them All Season Long
                            </h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending