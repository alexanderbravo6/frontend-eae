'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import React from 'react'
import TemplateBaseTablePagination from '@/shared/Components/Templates/TemplateBaseTablePagination'
import { useResultadoInstitucional, useResultadoRegional } from '../../Providers/ResultadoRegionalProvider'
import { useUtils } from '@/shared/Hooks/useUtils'
import { institucionResultadoColumns, regionResultadoColumns } from '../../Constants/ResultadoRegionalConstants'



function RegionTable({ query }) {

    const { pagination, setPagination } = useResultadoRegional()
    const { FetchRegionesResultados } = useUtils()
    const regiones = FetchRegionesResultados(pagination?.pageIndex + 1, query)

    if (regiones.error) return <LoadingErrorCard />
    if (regiones.isLoading) return <TableSkeleton />
    return (
        <>
            {
                regiones && !regiones.error && !regiones.error && (
                    <TemplateBaseTablePagination pagination={pagination} setPagination={setPagination} datos={regiones?.data?.data} columns={regionResultadoColumns} total={regiones?.data?.meta.total} />
                )
            }

        </>
    )
}

export default RegionTable