"use client";

import Link from "next/link";

const Navbar = () => {
    const registeredUSer = true;
    return (
        <nav className="flex items-center justify-between px-16 py-6">
            <div>
                <p className="text-xl">
                    iResource
                    <span className="" style={{ color: "#6365EF" }}>4</span>
                    Developers
                </p>
            </div>

            <ul className="text-sm flex items-end space-x-16">
                <li>
                    <Link href="#">
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        About us
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        How it works
                    </Link>
                </li>
            </ul>

            <div>
                {
                    !registeredUSer &&
                    <Link style={{ background: "#6365EF", color: "#ffffff" }} className="text-sm py-2 px-8 " href="/">
                        Login
                    </Link>
                }

                {
                    registeredUSer &&

                    <Link style={{ background: "#6365EF", color: "#ffffff" }} className="text-sm py-2 px-8 " href="/">
                        Sign Up
                    </Link>
                }
            </div>
        </nav>
    )
}

export default Navbar