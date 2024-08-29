'use client'
import Link from 'next/link'
import React from 'react'

function LinkSubmenu({
    nombre, ruta
}) {

    return (
        <>
            <div className='flex  text-white w-full hover:bg-[#338EF7] max-md:text-sm rounded-md px-2 font-normal    gap-3 items-center tap-highlight-transparent outline-none  py-2  transition-opacity'>
                <div>
                    {">"}
                </div>
                <Link href={`${ruta}`} className='w-full ' >
                    {nombre}
                </Link >
            </div>
        </>

    )
}

export default LinkSubmenu