'use client'
import MatriculaIndex from '@/modules/Matriculas/Components/MatriculaIndex';
import { useMatricula } from '@/modules/Matriculas/Providers/MatriculaProvider';
import Breadcrumb from '@/shared/Components/Breadcrumbs/Breadcrumb'
import TemplateDeniedPermission from '@/shared/Components/Templates/TemplateDeniedPermission';
import { useGlobal } from '@/shared/Providers/GlobalProvider';
import React from 'react'

const itemBreadcrumbs = [
    {
        href: '/administracion/gestion-matriculas',
        name: 'Gestión de Matriculas'
    }
]

function MatriculaPage() {
    const { accesoActual } = useGlobal();
    const accesoPermitido = accesoActual[0]?.menus.filter(permiso => permiso?.codigo === "GESMAT").length > 0;
    if (!accesoPermitido) { return <TemplateDeniedPermission /> }

    return (
        <>
            <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
                <h1 className='text-white font-thin  text-[1.1rem] '>GESTIÓN DE MATRICULAS</h1>
                <h2 className='text-white font-thin md:block hidden text-[1.1rem] '><Breadcrumb items={itemBreadcrumbs} /> </h2>

            </div>
            <MatriculaIndex />
        </>
    )
}

export default MatriculaPage