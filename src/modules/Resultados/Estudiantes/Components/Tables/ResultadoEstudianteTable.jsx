'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import React from 'react'
import { ResultadoEstudianteConstants } from '../../Constants/ResultadoEstudianteConstants'
import { useResultadoEstudianteService } from '../../Hooks/useResultadoEstudianteService'
import TemplateBaseTablePagination from '@/shared/Components/Templates/TemplateBaseTablePagination'
import { useResultadoEstudiante } from '../../Providers/ResultadoEstudianteProvider'
import { useSession } from 'next-auth/react'



function ResultadoEstudianteTable({ query }) {
    const { data: session } = useSession()
    const { pagination, setPagination } = useResultadoEstudiante()
    const { FetchResultadosEstudiantes } = useResultadoEstudianteService()

    const resultados = FetchResultadosEstudiantes(pagination?.pageIndex + 1, query, session?.user?.anio)

    if (resultados.error) return <LoadingErrorCard />
    if (resultados.isLoading) return <TableSkeleton />
    return (
        <>
            {
                resultados && !resultados.error && !resultados.error && (
                    <TemplateBaseTablePagination pagination={pagination} setPagination={setPagination} datos={resultados?.data?.data} columns={ResultadoEstudianteConstants} total={resultados?.data?.meta.total} />
                )
            }

        </>
    )
}

export default ResultadoEstudianteTable