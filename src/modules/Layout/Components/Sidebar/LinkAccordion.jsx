'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';

import LinkSubmenu from './LinkSubmenu';
import IconsSidebar from './IconsSidebar';

function LinkAccordion({
    index, ruta, nombre, icono, subModulos
}) {

    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li key={index} >
            <button
                href={ruta}
                onClick={() => setIsOpen(!isOpen)}
                className={`${pathname === ruta || pathname.startsWith(ruta) ? "active" : ""
                    } flex gap-2 items-center w-full p-2 my-2 transition duration-300 max-md:text-sm text-white rounded-lg dark:text-white hover:bg-[#338EF7] dark:hover:bg-[#338EF7] `}
            >
                <IconsSidebar name={"config"} />
                <span>{nombre}</span>
            </button>
            {isOpen && (
                subModulos.map((subModulo, index) => (
                    <LinkSubmenu key={index} nombre={subModulo.nombre} ruta={`/${subModulo.rutaRelativa}`} />
                ))

            )}
        </li>

    )
}

export default LinkAccordion