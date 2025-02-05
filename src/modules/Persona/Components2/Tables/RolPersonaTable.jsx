import React from 'react'
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons';
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData';
import { usePersonaService } from '../../Hooks/usePersonaService';
import EliminarRolAsignadoButton from '../Buttons/EliminarRolAsignadoButton';
import ActualizarRolPersonaModal from '../Modals/Roles/ActualizarRolPersonaModal';

const RolPersonaTable = ({ row }) => {


    const { FetchRolByPersona } = usePersonaService();
    const rolesAsignados = FetchRolByPersona(row.id);

    return (
        <>

            {
                rolesAsignados &&
                    rolesAsignados.error ? <TemplateErrorData /> :
                    rolesAsignados.isLoading ? <TableSkeleton /> :
                        (
                            <table key="table" className="w-full text-sm text-left rtl:text-right text-gray-500">
                                <thead key="thead" className="text-xs text-center text-gray-700 uppercase bg-gray-50 ">
                                    <tr key="trhead">
                                        <th key="numero" className="px-2 py-3">
                                            N°
                                        </th>
                                        <th key="rol" className="px-2 py-3">
                                            ROL
                                        </th>
                                        <th key="tipoSede" className="px-2 py-3">
                                            TIPO DE SEDE
                                        </th>
                                        <th key="sede" className="px-2 py-3">
                                            SEDE
                                        </th>

                                        <th key="porDefecto" className="px-2 py-3">
                                            POR DEFECTO
                                        </th>
                                        <th key="acciones" className="px-2 py-3">
                                            ACCIONES
                                        </th>
                                    </tr>
                                </thead>
                                <tbody key="tbody">
                                    {
                                        rolesAsignados?.data?.data.map((item, i) => (
                                            <tr key={i} className="border-b text-xs border-gray-200 hover:bg-gray-100">
                                                <td key="id" className=" text-center ">
                                                    {i + 1}
                                                </td>
                                                <td key="rol" className="px-2 py-3 ">
                                                    {item.rol}
                                                </td>
                                                <td key="tipoSede" className="px-2 py-3 ">
                                                    {item.sede.descripcionTipoSede}
                                                </td>
                                                <td key="sede" className="px-2  py-3 ">
                                                    {item.sede.descripcionSede}
                                                </td>
                                                <td key="porDefecto" className="px-2 text-center py-3 ">
                                                    {item.porDefecto ? "SI" : "NO"}
                                                </td>
                                                <td key="acciones" className="px-2 py-3 ">
                                                    <ActualizarRolPersonaModal data={item} />
                                                    <EliminarRolAsignadoButton data={item} />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>



                            </table>
                        )
            }

        </>
    )
}

export default RolPersonaTable