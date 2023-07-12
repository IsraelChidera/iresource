import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='md:flex justify-between items-center mx-16 py-2'>
            <p className="text-xl text-center logo-span">
                <span className="font-bold">
                    I.C.
                </span>{" "}
                <span>
                    Studio
                </span>
            </p>

            <p className='text-sm text-center mt-2 md:mt-0'>
                &copy;2023, designed by {' '}
                <Link href="#" className='underline'>
                    Israel Chidera
                </Link>
            </p>
        </footer>
    )
}

export default Footer