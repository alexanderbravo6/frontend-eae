
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
        </select>
    )
}


