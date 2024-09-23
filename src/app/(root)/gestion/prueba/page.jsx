'use client'
import PruebaIndex from '@/modules/Pruebas/Components/PruebaIndex'
import Breadcrumb from '@/shared/Components/Breadcrumb'
import PermissionDeniedScreeen from '@/shared/Components/PermissionDeniedScreeen';
import { useUtils } from '@/shared/Hooks/useUtils';
import { useGlobal } from '@/shared/Providers/GlobalProvider';
import React from 'react'

const itemBreadcrumbs = [
    {
        href: '/administracion/gestion-pruebas',
        name: 'Gestión de Pruebas'
    }
]

function GestionPruebasPage() {
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESPRU', 'ACC')) { return <PermissionDeniedScreeen /> }


    return (
        <>
            <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
                <h1 className='text-white font-thin  text-[1.1rem] '>GESTIÓN DE PRUEBAS</h1>
                <h2 className='text-white font-thin md:block hidden text-[1.1rem] '><Breadcrumb items={itemBreadcrumbs} /> </h2>

            </div>
            <PruebaIndex />
        </>
    )
}

export default GestionPruebasPage