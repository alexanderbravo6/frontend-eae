import React from 'react'

function Footer() {
    return (
        <>
            <footer className=" [grid-area:footer] w-full   ">
                <div className=" bottom-0  w-100 min-h-[50px]  mx-4  px-6 bg-white border-t border-gray-200 shadow flex items-center justify-between " >
                    <span className="md:text-xs text-[8px] text-gray-500 sm:text-center ">© {new Date().getFullYear()} <a href="https://www.minedu.gob.pe/superiorpedagogica/" className="hover:underline">DIFOID</a>. Todos los derechos reservados.
                    </span>
                    <ul className="flex flex-wrap items-center md:text-xs text-[8px] font-medium text-gray-500  sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Normativa</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Politica de Privacidad</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer