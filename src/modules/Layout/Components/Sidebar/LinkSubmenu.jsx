'use client'
import Link from 'next/link'
import React from 'react'
import IconsSidebar from './IconsSidebar'

function LinkSubmenu({
    nombre, ruta
}) {

    return (
        <>
            <div className='flex gap-2  text-white w-full hover:bg-[#338EF7] mb-3 bg-[#213052] max-md:text-xs text-xs  rounded-md px-2 font-normal     items-center tap-highlight-transparent outline-none  py-2  transition-opacity'>
                <Link href={`${ruta}`} className='w-full ' >
                    {nombre}
                </Link >
            </div>
        </>

    )
}

export default LinkSubmenu