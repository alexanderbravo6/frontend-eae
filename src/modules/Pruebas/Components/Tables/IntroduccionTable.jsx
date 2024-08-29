import { IconEdit } from '@/shared/Components/Icons'
import React from 'react'
import ActualizarPruebaModal from '../Modals/ActualizarPruebaModal'

function IntroduccionTable() {
    return (
        <table key="table" className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead key="thead" className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr key="trhead">
                    <th key="numero" className="px-6 py-3">
                        N°
                    </th>
                    <th key="codigoRegistro" className="px-6 py-3">
                        CODIGO DE INTRODUCCIÓN
                    </th>
                    <th key="estado" className="px-6 py-3">
                        ESTADO
                    </th>
                    <th key="estado" className="px-6 py-3">
                        ACCIONES
                    </th>
                </tr>

            </thead>
            <tbody key="tbody">
                <tr >
                    <td className="px-6 py-4"> 1  </td>
                    <td className="px-6 py-4"> I-2024-1-00001 </td>
                    <td className="px-6 py-4">ACTIVO</td>
                    <td className="px-6 w-2 text-center py-4">
                        <ActualizarPruebaModal />
                    </td>
                </tr>
            </tbody>
        </table>

    )
}

export default IntroduccionTable