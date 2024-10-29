'use client'

import ResultadoNacionalIndex from '@/modules/Resultados/Nacional/Components/ResultadoNacionalIndex';
import Breadcrumb from '@/shared/Components/Breadcrumb'
import PermissionDeniedScreeen from '@/shared/Components/PermissionDeniedScreeen';
import { useGlobal } from '@/shared/Providers/GlobalProvider';
import React from 'react'

const itemBreadcrumbs = [
    {
        href: '/gestion/resultados/nacional',
        name: 'Resultados Nacionales'
    }
]

function ResultadoNacionalPage() {
    const { accesoActual } = useGlobal();
    const accesoPermitido = accesoActual[0]?.menus.filter(permiso => permiso?.codigo === "RESNAC").length > 0;
    if (!accesoPermitido) { return <PermissionDeniedScreeen /> }

    return (
        <>
            <div className='mb-4 w-full px-6 h-10 flex justify-between items-center bg-[#338EF7] rounded-md '>
                <h1 className='text-white font-thin  text-[1.1rem] '>RESULTADOS NACIONALES</h1>
                <h2 className='text-white font-thin md:block hidden text-[1.1rem] '><Breadcrumb items={itemBreadcrumbs} /> </h2>

            </div>
            <ResultadoNacionalIndex />
        </>
    )
}

export default ResultadoNacionalPage