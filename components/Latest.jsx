import Link from 'next/link'
import React from 'react'

const Latest = ({ data }) => {

    return (
        <section className='pb-20 md:mx-16 mx-4 border-b border-slate-300'>
            <nav className="md:flex items-center justify-between border-slate-300 border-b py-3">

                <p className="md:text-3xl text-lg logo-span">
                    MOST VIEWED ARTICLES
                </p>


                <Link href="#" className='md:text-sm text-xs underline text-slate-500 '>
                    View all
                </Link>
            </nav>

            <div className='mt-14'>
                <div className='space-y-20'>
                    {
                        data.results.slice(0, 3).map((section) => (
                            <div className='md:grid grid-cols-3 space-x-20'>
                                <div className='col-span-1'>
                                    {section.media?.map((img) => (
                                        img['media-metadata'].slice(2,3).map((x) => (
                                            <>
                                                <img src={x.url}/>
                                            </>
                                        ))
                                    ))}
                                </div>

                                <div className='col-span-2 md:mt-0 mt-6'>
                                    <div className="relative logo-span">
                                        <div className="absolute top-1.5 -left-10 h-px w-5 bg-slate-600"></div>
                                        <p className='text-sm'>{section.byline}</p>
                                    </div>

                                    <div className='space-y-3'>
                                        <h1 className="text-2xl">
                                            {section.title}
                                        </h1>

                                        <p className="text-sm tracking-wide mt-2 text-slate-500">
                                            {section.abstract}
                                        </p>

                                        <p className="space-x-3 font-light text-xs text-slate-400">
                                            <span> {section.published_date.slice(0, 10)}</span> {' '}
                                            <span> {section.section} </span>
                                        </p>

                                        <div className="">
                                            <a className="text-xs hover:text-slate-700 underline text-slate-500" href={section.url}>
                                                Read Full Article
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Latest