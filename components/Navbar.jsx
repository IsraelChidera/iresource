"use client";

import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="flex items-center justify-center border-black border-b md:mx-16 pt-6 pb-3 mb-4">
            <div>
                <Link href="#" className="text-3xl logo-span">
                    <span className="font-bold">
                        I.C.
                    </span>{" "}
                    <span>
                        Studio
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar