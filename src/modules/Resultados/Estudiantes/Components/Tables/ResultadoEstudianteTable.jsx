'use client'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData'
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons'
import React from 'react'
import { ResultadoEstudianteConstants } from '../../Constants/ResultadoEstudianteConstants'
import { useResultadoEstudianteService } from '../../Hooks/useResultadoEstudianteService'
import TemplateTablePagination from '@/shared/Components/Templates/TemplateTablePagination'
import { useResultadoEstudiante } from '../../Providers/ResultadoEstudianteProvider'
import { useSession } from 'next-auth/react'



function ResultadoEstudianteTable({ query }) {
    const { data: session } = useSession()
    const { pagination, setPagination } = useResultadoEstudiante()
    const { FetchResultadosEstudiantes } = useResultadoEstudianteService()

    const resultados = FetchResultadosEstudiantes(pagination?.pageIndex + 1, query, session?.user?.anio)

    if (resultados.error) return <TemplateErrorData />
    if (resultados.isLoading) return <TableSkeleton />
    return (
        <>
            {
                resultados && !resultados.error && !resultados.error && (
                    <TemplateTablePagination pagination={pagination} setPagination={setPagination} datos={resultados?.data?.data} columns={ResultadoEstudianteConstants} total={resultados?.data?.meta.total} />
                )
            }

        </>
    )
}

export default ResultadoEstudianteTable