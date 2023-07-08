import Image from "next/image"


const Header = () => {
    return (
        <section className="pt-5 border-b border-slate-300 pb-16 mx-16">
            <div className="md:grid grid-cols-5 gap-x-4">
                <div className="col-span-3 border-r border-slate-300 pr-4">
                    <div >
                        {/* <Image 
                        src=""
                        width={500}
                        height={500}
                        alt="fssff"
                            />
                         */}
                        <div style={{height:"500px"}} className="w-full bg-white">
                        </div>

                        <div className="font-light text-xs text-slate-400 mt-2 flex items-center justify-between">
                            <p className="space-x-6">
                                <span> Feb 11 </span> {' '}
                                <span> 5 mins read </span>
                            </p>

                            <div className="relative logo-span">
                                <div className="absolute top-1.5 -left-14 h-px w-10 bg-slate-600"></div>
                                <p>By Louis Shaw</p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h1 className="text-3xl">What Designers, Photographers, and Other Insiders Missed
                                About Paris Fashion Week
                            </h1>

                            <p className="text-xs tracking-wide mt-2 text-slate-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Odio cupiditate sunt assumenda? Sed totam
                                veniam provident. Voluptatum provident, quibusdam
                                delectus illum dolores alias similique quisquam
                                aperiam velit tempora. Veniam fugiat quidem odio
                                sed pariatur aliquid architecto minima molestias
                                ullam harum!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2 space-y-6">
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
                                <p>By Louis Shaw</p>
                            </div>
                        </div>

                        <div className="mt-2">
                            <h1 className="text-lg leading-6">
                                What Happens When One Partner is Vaccinated
                                and the Other isn't?
                            </h1>

                            <p className="text-xs tracking-wide text-slate-500 mt-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Odio cupiditate sunt assumenda? Sed totam
                                veniam provident. Voluptatum provident, quibusdam
                                delectus illum
                                aperiam velit tempora.
                            </p>
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
                                <p>By Louis Shaw</p>
                            </div>
                        </div>

                        <div className="mt-2">
                            <h1 className="text-lg leading-6">
                                What Happens When One Partner is Vaccinated
                                and the Other isn't?
                            </h1>

                            <p className="text-xs tracking-wide mt-2 text-slate-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Odio cupiditate sunt assumenda? Sed totam
                                veniam provident. Voluptatum provident, quibusdam
                                delectus illum dolores alias.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header