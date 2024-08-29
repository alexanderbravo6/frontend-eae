'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import IconsSidebar from './IconsSidebar'

function LinkSimple({
    index, ruta, icono, nombre
}) {
    const pathname = usePathname()

    return (
        <li key={index} >
            <Link
                href={`${ruta}`}
                className={`${pathname === ruta || pathname.startsWith(ruta) ? "active" : ""
                    } flex gap-2 items-center p-2 my-2 transition duration-300 max-md:text-sm text-white rounded-lg dark:text-white hover:bg-[#338EF7] dark:hover:bg-[#338EF7] `}
            >
                <IconsSidebar name={icono} />
                <span>{nombre}</span>
            </Link>
        </li>

    )
}

export default LinkSimple