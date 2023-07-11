import Image from "next/image";

const Header = ({ data, frontPageData }) => {

    return (
        <section className="pt-5 border-b border-slate-300 pb-16 mx-16">

            <div className="md:grid grid-cols-5 gap-x-4">
                <div className="col-span-3 border-r border-slate-300 pr-4">
                    <div className=" space-y-6">
                        {frontPageData.results.slice(0, 2).map((section) => (
                            <>
                                <div>
                                    <div style={{}} className="w-full">

                                        {section.multimedia?.slice(0, 1).map((x) => (
                                            <>
                                                <img
                                                    src={x.url}
                                                    alt={x.copyright}
                                                />
                                            </>
                                        ))}

                                    </div>

                                    <div className="font-light text-xs text-slate-400 mt-2 flex items-center justify-between">
                                        <p className="space-x-3">
                                            <span> {section.published_date.slice(0, 10)}</span> {' '}
                                            <span> {section.section} </span>
                                        </p>

                                        <div className="relative logo-span">
                                            <div className="absolute top-1.5 -left-10 h-px w-5 bg-slate-600"></div>
                                            <p> {section.byline} </p>
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <h1 className="text-lg leading-6">
                                            {section.title}
                                        </h1>

                                        <p className="text-xs tracking-wide text-slate-500 mt-2">
                                            {section.abstract}
                                        </p>

                                        <div className="">
                                            <a className="text-xs hover:text-slate-700 underline text-slate-500" href={section.url}>
                                                Read Full Article
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>                   
                </div>

                <div className="col-span-2 space-y-6">
                    <div className=" space-y-6">
                        {data.results.slice(0, 3).map((section) => (
                            <>
                                <div>
                                    <div style={{}} className="w-full">

                                        {section.multimedia?.slice(2, 3).map((x) => (
                                            <>
                                                <img
                                                    src={x.url}
                                                    alt={x.copyright}
                                                />
                                            </>
                                        ))}

                                    </div>

                                    <div className="font-light text-xs text-slate-400 mt-2 flex items-center justify-between">
                                        <p className="space-x-3">
                                            <span> {section.published_date.slice(0, 10)}</span> {' '}
                                            <span> {section.section} </span>
                                        </p>

                                        <div className="relative logo-span">
                                            <div className="absolute top-1.5 -left-10 h-px w-5 bg-slate-600"></div>
                                            <p> {section.byline} </p>
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <h1 className="text-lg leading-6">
                                            {section.title}
                                        </h1>

                                        <p className="text-xs tracking-wide text-slate-500 mt-2">
                                            {section.abstract}
                                        </p>

                                        <div className="">
                                            <a className="text-xs hover:text-slate-700 underline text-slate-500" href={section.url}>
                                                Read Full Article
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Header