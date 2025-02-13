
import { useUtils } from '@/shared/Hooks/useUtils';
import { Skeleton } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import React from 'react'

export const AnioSelect = () => {
    const { data: session, update } = useSession();


    return (

        <select onChange={(e) => {
            update({
                ...session,
                user: {
                    ...session.user,
                    anio: e.target.value,
                },
            });
        }} defaultValue={session?.user.anio} id='periodo_select_global' className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 ">
            <option value="0">Periodo</option>
            <option value="2021">2021</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
        </select>
    )
}


export const InstitucionesSelect = ({ ...props }) => {
    const { FetchAllInstituciones } = useUtils();
    const instituciones = FetchAllInstituciones();
    if (instituciones.error) return <Skeleton className="h-10 w-52 rounded-lg" />
    if (instituciones.isLoading) return <Skeleton className="h-10 w-52 rounded-lg" />
    return (

        <select
            {...props}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5  ">
            <option value="">Seleccionar</option>
            {
                instituciones?.data.data.map(institucion => (
                    <option key={institucion.id} value={institucion.id}>[{institucion.region}] - {institucion.nombre} </option>
                ))
            }

        </select>

    )
}
export const RegionesSelect = ({ ...props }) => {
    const { FetchAllRegiones } = useUtils();
    const regiones = FetchAllRegiones();
    if (regiones.error) return <Skeleton className="h-10 w-52 rounded-lg" />
    if (regiones.isLoading) return <Skeleton className="h-10 w-52 rounded-lg" />
    return (

        <select
            {...props}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg block w-full p-2.5  ">
            <option value="">Seleccionar</option>
            {
                regiones?.data.data.map(institucion => (
                    <option key={institucion.id} value={institucion.id}>{institucion.nombre} </option>
                ))
            }

        </select>

    )
}