import Link from 'next/link'
import React from 'react'

const BestSellers = () => {
    return (
        <section className='pb-20 mx-16 border-b border-slate-300'>
            <nav className="flex items-center justify-between border-slate-300 border-b py-3">

                <p className="text-3xl logo-span">
                    BESTSELLERS OF THE MONTH
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

                <div className='grid grid-cols-4 gap-x-6 mt-4'>
                    <div>
                        <div>
                            {/* <Image 
                            src=""
                            width={500}
                            height={500}
                            alt="fssff"
                                />
                            */}
                            <div style={{}} className="w-full h-72 bg-white">
                            </div>
                        </div>

                        <div className=' mt-4'>
                            <div className='space-y-2'>
                                <h2 className="text-lg leading-6">
                                    What's Mine and Yours
                                </h2>

                                <p className="text-xs tracking-wide text-slate-500">
                                    BY HASLEY STREET
                                </p>
                            </div>

                            <button className='py-3 mt-6 logo-span text-center w-full text-sm  border border-black'>
                                Buy for $14.99
                            </button>
                        </div>

                    </div>

                    <div>
                        <div>
                            {/* <Image 
                            src=""
                            width={500}
                            height={500}
                            alt="fssff"
                                />
                            */}
                            <div style={{}} className="w-full h-72 bg-white">
                            </div>
                        </div>

                        <div className=' mt-4'>
                            <div className='space-y-2'>
                                <h2 className="text-lg leading-6">
                                    The Committed: A Novel
                                </h2>

                                <p className="text-xs tracking-wide text-slate-500">
                                    BY VEET THANGH NGUYEN
                                </p>
                            </div>

                            <button className='py-3 mt-6 logo-span text-center w-full text-sm  border border-black'>
                                Buy for $14.99
                            </button>
                        </div>

                    </div>

                    <div>
                        <div>
                            {/* <Image 
                            src=""
                            width={500}
                            height={500}
                            alt="fssff"
                                />
                            */}
                            <div style={{}} className="w-full h-72 bg-white">
                            </div>
                        </div>

                        <div className=' mt-4'>
                            <div className='space-y-2'>
                                <h2 className="text-lg leading-6">
                                    Come Fly The World: Stories
                                </h2>

                                <p className="text-xs tracking-wide text-slate-500">
                                    BY JULIA COOKE
                                </p>
                            </div>

                            <button className='py-3 mt-6 logo-span text-center w-full text-sm  border border-black'>
                                Buy for $14.99
                            </button>
                        </div>

                    </div>

                    <div>
                        <div>
                            {/* <Image 
                            src=""
                            width={500}
                            height={500}
                            alt="fssff"
                                />
                            */}
                            <div style={{}} className="w-full h-72 bg-white">
                            </div>
                        </div>

                        <div className=' mt-4'>
                            <div className='space-y-2'>
                                <h2 className="text-lg leading-6">
                                    klara and the Sun: A novel
                                </h2>

                                <p className="text-xs tracking-wide text-slate-500">
                                    BY Kazuo Ishig
                                </p>
                            </div>

                            <button className='py-3 mt-6 logo-span text-center w-full text-sm  border border-black'>
                                Buy for $12.99
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestSellers