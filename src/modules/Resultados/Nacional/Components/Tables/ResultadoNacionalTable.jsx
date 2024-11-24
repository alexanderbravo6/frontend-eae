import React from 'react'
import { useResultadoNacionalService } from '../../Hooks/useResultadoNacionalService';
import { useSession } from 'next-auth/react';
import { TableSkeleton } from '@/shared/Components/Skeletons';
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard';
import TemplateBaseAlert from '@/shared/Components/Templates/TemplateBaseAlert';

function ResultadoNacionalTable({ idCiclo }) {
    const { data: session } = useSession();
    const { FetchCantidadEvaluadosNacional } = useResultadoNacionalService();
    const evaluados = FetchCantidadEvaluadosNacional(idCiclo, session?.user?.anio);
    if (evaluados.isLoading) return <TableSkeleton />
    if (evaluados.error) return <TemplateBaseAlert type='Attention' message='No se encontraron resultados' />

    if (evaluados.data?.data?.especialidades.length == 0) return <TemplateBaseAlert type='Attention' message='No se encontraron resultados' />
    const totals = evaluados?.data?.data?.tipoPrueba.map((_, tipoIndex) =>
        evaluados?.data?.data?.especialidades.reduce((sum, especialidad) => {
            const participante = especialidad.participantes[tipoIndex];
            return sum + (participante ? participante.cantidad : 0);
        }, 0)
    );
    return (

        <>
            <table className="w-full">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="py-3 px-4 text-left font-semibold">Programa de Estudios</th>
                        {
                            evaluados?.data?.data.tipoPrueba.map((item, index) => (
                                <th key={index} className="py-3 px-4 text-center font-semibold">{item.nombre}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        evaluados?.data?.data?.especialidades.map((item, index) => (
                            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors duration-200`}>
                                <td className="py-3 px-4 border-b">{item.nombre}</td>
                                {
                                    item?.participantes.map((participante, index) => (
                                        <>
                                            <td key={index} className="py-3 px-4 border-b text-center">{participante.cantidad}</td>
                                        </>
                                    )
                                    )
                                }
                            </tr>
                        ))}
                    <tr className="bg-blue-100 font-bold">
                        <td className="py-3 px-4 border-t-2 border-blue-500">Total</td>
                        {
                            totals?.map((total, index) => (
                                <td key={index} className="py-3 px-4 border-t-2 border-blue-500 text-center">{total}</td>
                            ))
                        }
                    </tr>
                </tbody>
            </table>
            <span className='mt-4 text-gray-400'>* Incluye a la Carrera de Computación e Informática y el Programa de Estudios de Educación Religiosa, que no tuvieron prueba de Conocimientos Pedagógicos.</span>

        </>
    )
}

export default ResultadoNacionalTable