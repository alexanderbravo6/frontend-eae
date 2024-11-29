'use client'
import React from 'react'
import RolesCardList from '@/modules/Seguridad/Components/RolesCardList';
import Breadcrumb from '@/shared/Components/Breadcrumbs/Breadcrumb';
import { seguridadItemBreadCrumbs } from '@/modules/Seguridad/Constants/SeguridadConstants';
function SeguridadPage() {


    return (
        <>
            <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
                <h1 className='text-white font-bold md:text-[1.1rem]  text-[12px] '>MANEJO DE ROLES</h1>
                <h2 className='text-white font-normal md:block hidden text-[1.1rem] '><Breadcrumb items={seguridadItemBreadCrumbs} /> </h2>
            </div>
            <div className='w-full py-6 px-9'>
                <h4 className='text-gray-500' >
                    Listado de roles asignados al usuario
                </h4>
              
                    <RolesCardList />
 
            </div>

        </>


    )
}

export default SeguridadPage