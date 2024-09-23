'use client'

import IndicacionIndex from '@/modules/Indicacion/components/IndicacionIndex';
import Breadcrumb from '@/shared/Components/Breadcrumb'
import PermissionDeniedScreeen from '@/shared/Components/PermissionDeniedScreeen';
import { useUtils } from '@/shared/Hooks/useUtils';
import React from 'react'

const itemBreadcrumbs = [
    {
        href: '/gestion/mantenimiento/indicacion',
        name: 'Gestión de Indicaciones'
    }
]
function IndicacionPage() {
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESENU', 'ACC')) { return <PermissionDeniedScreeen /> }



    return (
        <>
            <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
                <h1 className='text-white font-thin  text-[1.1rem] '>GESTIÓN DE INDICACIONES</h1>
                <h2 className='text-white font-thin md:block hidden text-[1.1rem] '><Breadcrumb items={itemBreadcrumbs} /> </h2>

            </div>
            <IndicacionIndex />
        </>
    )
}

export default IndicacionPage