import React from 'react'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <header className='max-w-screen-2xl mx-auto py-6 items-center' >
            <nav className='flex justify-between'>
                {/* left side  */}
                <div>
                    <Link to="/"> <HiBars3CenterLeft /></Link>
                    <div className="">
                    <IoIosSearch />
                        <input type="text" placeholder='Search here'  className='bg-[#EAEAEA] rounded-md 
                        focus:outline-none' />
                    </div>
                </div>

                {/* right side */}
                <div>icon</div>
            </nav>
        </header>

    )
}

export default Navbar
