
import { useSession } from 'next-auth/react';
import React from 'react'

export const PeriodoAcademicoSelect = () => {
    const { data: session, update } = useSession();


    return (

        <select onChange={(e) => {
            update({
                ...session,
                user: {
                    ...session.user,
                    idPeriodoAcademico: e.target.value,
                },
            });
        }} defaultValue={session?.user.idPeriodoAcademico} id='periodo_select_global' className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 ">
            <option value="0">Periodo</option>
            <option value="1">2021</option>
            <option value="2">2023</option>
            <option value="3">2024</option>
        </select>
    )
}


