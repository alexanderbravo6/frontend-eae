'use client'
import { useSession } from 'next-auth/react';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
} from "@nextui-org/react";

import { PeriodoAcademicoSelect } from '@/shared/Components/Form/Selects';
import { actionsLinks } from '@/shared/Constants/GlobalConstants';
function DesktopNavbar() {
    const { data: session } = useSession();
    return (
        <>
            <nav className='flex items-center gap-3'>
                <div className='w-40 '>
                    <PeriodoAcademicoSelect />
                </div>

            </nav>
            <div className='w-auto'>
                <div id="toast-notification" className="  md:block  hidden w-full  p-2 text-white bg-[#338EF7] rounded-lg shadow " role="alert">
                    <div className="flex items-center">
                        <div className="relative inline-block shrink-0">
                            <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-100 rounded-full ">
                                <span className="font-medium text-gray-600 ">AM</span>
                            </div>
                        </div>
                        <div className="ms-3 text-sm font-normal mr-2 gap-3 flex items-center">

                            <Dropdown>
                                <DropdownTrigger>
                                    <div

                                        data-dropdown-toggle="dropdownDivider"
                                        className="border-white border  rounded-lg cursor-pointer "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    </div>
                                </DropdownTrigger>
                                <DropdownMenu
                                    disabledKeys={["user"]}
                                    aria-label="acciones de usuario"
                                >
                                    <DropdownSection showDivider >
                                        <DropdownItem
                                            isReadOnly
                                            key="user"
                                            className=" gap-2 opacity-100"
                                        >
                                            <div className="flex flex-col  gap-1">
                                                <div className="text-xs font-medium text-gray-700 flex justify-between gap-2 items-center ">
                                                    {`Especialista DIFOID`}
                                                </div>
                                                <div className='font-extralight text-xs text-gray-500 flex justify-between gap-2 items-center ' >
                                                    Oficina MINEDU
                                                </div>
                                            </div>
                                        </DropdownItem>
                                    </DropdownSection>
                                    <DropdownSection title="Acciones">
                                        {
                                            actionsLinks &&
                                            actionsLinks.map((action) => (

                                                <DropdownItem href={action.url} key={action.name}>{action.name}</DropdownItem>

                                            ))
                                        }


                                    </DropdownSection>
                                    <DropdownItem
                                        key="delete"
                                        className="text-danger"
                                        color="danger"
                                    >
                                        Cerrar Sesión
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DesktopNavbar