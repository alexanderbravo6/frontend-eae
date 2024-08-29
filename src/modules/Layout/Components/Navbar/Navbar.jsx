'use client'

import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"


function Navbar() {
 
    return (
        <>
            <nav className='w-full [grid-area:header] sm:px-7 px-4 '>
                <div className='w-full hidden  md:flex  py-2  h-30  overflow-hidden  rounded-lg  justify-between items-center '>
                   <DesktopNavbar />
                </div>
                <div className=' md:hidden flex  shadow-md rounded-lg py-3 px-10 h-30 items-center  justify-between gap-5 ' >
                    <MobileNavbar />
                </div>
            </nav >
        </>
    )
}

export default Navbar