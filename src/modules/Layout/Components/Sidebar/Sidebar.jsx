
import { Divider } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LinkSimple from './LinkSimple';
import IconsSidebar from './IconsSidebar';
import { useGlobal } from '@/shared/Providers/GlobalProvider';
import LinkAccordion from './LinkAccordion';


function Sidebar() {
    const { handleClickCerrarSesion, accesoActual } = useGlobal();
    const { data: session } = useSession();
    const pathname = usePathname()

    const menusPadre = accesoActual[0]?.menus.filter((menu) => menu.idMenuPadre === 0)


    return (
        <>

            <nav className='flex bg-[#111827] dark:bg-[#111827]   flex-col flex-1 ' >
                <div className='  px-6 pt-10 pb-6 ' >
                    <div className="flex flex-col gap-1 items-start">
                        <span className="text-xs text-white">{session?.user.nombreCompleto}</span>
                        <span className="text-[10px] text-foreground-400 ">{session?.user.descripcionRol}</span>
                    </div>

                    <Divider className=" text-white" />
                </div>
                <span id="react-aria447405898-:r1f:" role="presentation" className="px-6 text-sm text-foreground-500" data-slot="heading">Menú</span>
                <div className='p-4  flex justify-between flex-col flex-1' >
                    <ul>
                        <li>
                            <Link shallow={true} className={` ${pathname === "/gestion" ? "active" : ""} flex gap-2 max-md:text-sm items-center p-2 my-2  text-white rounded-lg dark:text-white hover:bg-[#338EF7] dark:hover:bg-[#338EF7] group`} href="/gestion">
                                <IconsSidebar name="home" />
                                <span >Inicio</span>
                            </Link>
                        </li>
                        {
                            menusPadre?.map((menu, index) => {
                                // Si el tipo de enlace es 'simple'
                                if (menu.esPadre === false) {
                                    return (
                                        <LinkSimple
                                            key={index}
                                            icono={menu.icono}
                                            nombre={menu.nombre}
                                            ruta={`/${menu.ruta}`}
                                        />
                                    );
                                } else {
                                    // Si el tipo de enlace es 'accordion', filtrar submódulos
                                    const subModulos = accesoActual[0]?.menus.filter(
                                        (subMenu) => subMenu.idMenuPadre === menu.idMenu
                                    );

                                    return (
                                        <LinkAccordion
                                            key={index}
                                            icono={menu.icono}
                                            nombre={menu.nombre}
                                            ruta={`/${menu.ruta}`}
                                            subModulos={subModulos}
                                        />
                                    );
                                }
                            })
                        }
                    </ul>
                    <button
                        onClick={handleClickCerrarSesion}
                        className=" last:pt-2 flex items-center w-full p-2 text-white rounded-lg dark:text-white hover:bg-[#338EF7] dark:hover:bg-[#338EF7] group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                            ></path>
                        </svg>
                        <span className="ms-3">Cerrar Sesión</span>
                    </button>
                </div>
            </nav>



            {
                /*    
    
    
                <aside
                    id="logo-sidebar"
                    className={`fixed ${isSidebarOpen ? "hidden" : ""
                        } [grid-area:aside]  max-w-64 top-0 left-0 z-40 h-screen transition-transform md:block translate-x-100  md:translate-x-0`}
                >
                    <div className="h-full rounded-e-md  px-3 py-4 overflow-y-auto bg-[#111827] dark:bg-[#111827] ">
                        <div
                            onClick={toggleSidebar}
                            className="flex text-white justify-end items-end mb-2 md:hidden"
                            type="button"
                        >
                            <svg
                                className="w-3 h-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                        </div>
                        <div
                            className="  flex justify-center items-center  ps-2.5 my-5"
                        >
                            <img
                                src="/hero-logo-minedu.png"
                                className=" w-full  me-3 sm:h-full"
                                alt="Ministerio"
                            />
                        </div>
                        <ul className="space-y-3 mt-10 font-medium">
                            <li>
                                <Link shallow={true} className={` ${pathname === "/home" ? "active" : ""} flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#338EF7] dark:hover:bg-[#338EF7] group`} href="/home"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                                </svg>
                                    <span className="ms-3">Inicio</span>
                                </Link>
                            </li>
                            {
                                modulos
                                    .filter((modulo) => modulo.rol === session?.user.idRolDefecto)
                                    .map((modulo) => (
                                        <li key={modulo.id}>
                                            <Link
                                                shallow={true}
                                                href={modulo.url}
                                                className={`${pathname === modulo.url ? "active" : ""
                                                    } flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-[#338EF7] dark:hover:bg-[#338EF7] group`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d={`${modulo.svg}`}
                                                    />
                                                </svg>
                                                <span className="ms-3">{modulo.nombre}</span>
                                            </Link>
                                        </li>
                                    ))}
                          
                        </ul>
                        <button
                                onClick={handleClickCerrarSesion}
                                className=" last:pt-2 flex items-center w-full p-2 text-white rounded-lg dark:text-white hover:bg-[#338EF7] dark:hover:bg-[#338EF7] group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                                    ></path>
                                </svg>
                                <span className="ms-3">Cerrar Sesión</span>
                            </button>
                    </div>
                </aside>
     */
            }
        </>
    )
}

export default Sidebar