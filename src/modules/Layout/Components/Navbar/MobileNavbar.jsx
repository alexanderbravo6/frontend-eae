'use client'
import React from 'react'
import { useSession } from 'next-auth/react';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
} from "@nextui-org/react";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { InstitucionesRegionSelect, InstitucionesSelect, PeriodoAcademicoSelect } from '@/shared/Components/Form/Selects';
import { actionsLinks } from '@/shared/Constants/GlobalConstants';
import Sidebar from '../Sidebar/Sidebar';


function MobileNavbar() {
    const { data: session } = useSession();
    const [open, setOpen] = useState(false);
    return (
        <section className='w-full  flex justify-between items-center ' >
            <div className='flex max-w-44 justify-between flex-wrap items-center gap-3'>
                <div className='w-full '>
                    <PeriodoAcademicoSelect />
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <Dropdown>
                    <DropdownTrigger>
                        <div

                            data-dropdown-toggle="dropdownDivider"
                            className="border-white border  rounded-lg cursor-pointer "
                        >
                            <div className="relative inline-block shrink-0">
                                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
                                    <span className="font-medium text-gray-600 ">AM</span>
                                </div>
                            </div>
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
                                        Administrador
                                    </div>
                                    <div className='font-extralight text-xs text-gray-500 flex justify-between gap-2 items-center ' >
                                        OFICINA DIFOID
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
                <div>
                    <button onClick={() => setOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </button>
                    <Transition.Root show={open} as={Fragment}>
                        <Dialog className="relative z-10" onClose={setOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in duration-500"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-hidden">
                                <div className="absolute inset-0 overflow-hidden">
                                    <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                                        <Transition.Child
                                            as={Fragment}
                                        >
                                            <Dialog.Panel className="pointer-events-auto w-screen max-w-[200px] ">
                                                <div className="flex h-full flex-col overflow-y-scroll shadow-xl">
                                                    <Sidebar />
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </div>
                        </Dialog>
                    </Transition.Root>
                </div>

            </div>
        </section>
    )
}

export default MobileNavbar