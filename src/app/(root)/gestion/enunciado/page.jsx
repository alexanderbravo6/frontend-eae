'use client'
import EnunciadoIndex from '@/modules/Enunciados/Components/EnunciadoIndex'
import Breadcrumb from '@/shared/Components/Breadcrumbs/Breadcrumb'
import TemplateDeniedPermission from '@/shared/Components/Templates/TemplateDeniedPermission';
import { useUtils } from '@/shared/Hooks/useUtils';
import React from 'react'

const itemBreadcrumbs = [
    {
        href: '/administracion/gestion-enunciados',
        name: 'Gestión de Enunciados'
    }
]
function GestionEnunciadosPage() {
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESENU', 'ACC')) { return <TemplateDeniedPermission /> }



    return (
        <>
            <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
                <h1 className='text-white font-thin  text-[1.1rem] '>GESTIÓN DE ENUNCIADOS</h1>
                <h2 className='text-white font-thin md:block hidden text-[1.1rem] '><Breadcrumb items={itemBreadcrumbs} /> </h2>

            </div>
            <EnunciadoIndex />
        </>
    )
}

export default GestionEnunciadosPage