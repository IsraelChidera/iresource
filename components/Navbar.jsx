"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
    const registeredUSer = true;

    const [providers, setProviders] = useState(null);

    useEffect(() => {
        const SetProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        SetProviders();
    })

    return (
        <nav className="flex items-center justify-between px-16 py-6">
            <div>
                <p className="text-xl">
                    iResource
                    <span className="" style={{ color: "#6365EF" }}>4</span>
                    Developers
                </p>
            </div>

            <ul style={{ color: "#5C5555" }} className="text-sm flex items-end space-x-16">
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
                    <div className="flex space-x-6">
                        <Link style={{ background: "#6365EF", color: "#ffffff" }} className="text-sm py-2 px-4 " href="/">
                            Add Resource
                        </Link>

                        <button className="text-sm border-b " style={{}}>
                            Sign Out
                        </button>

                        <div style={{ background: "#6365EF" }} className="flex items-center rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>
                        </div>
                    </div>
                }

                {/* 
                {
                    registeredUSer &&

                    <Link style={{ background: "#6365EF", color: "#ffffff" }} className="text-sm py-2 px-8 " href="/">
                        Sign Up
                    </Link>
                } */}

                {
                    providers &&
                    object.values(providers).map((provider) => (
                        <button style={{ background: "#6365EF", color: "#ffffff" }} className="text-sm py-2 px-8 " >
                            Sign Up
                        </button>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar