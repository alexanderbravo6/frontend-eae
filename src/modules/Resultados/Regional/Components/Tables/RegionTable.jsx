'use client'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData'
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons'
import React from 'react'
import TemplateTablePagination from '@/shared/Components/Templates/TemplateTablePagination'
import { useResultadoInstitucional, useResultadoRegional } from '../../Providers/ResultadoRegionalProvider'
import { useUtils } from '@/shared/Hooks/useUtils'
import { institucionResultadoColumns, regionResultadoColumns } from '../../Constants/ResultadoRegionalConstants'



function RegionTable({ query }) {

    const { pagination, setPagination } = useResultadoRegional()
    const { FetchRegionesResultados } = useUtils()
    const regiones = FetchRegionesResultados(pagination?.pageIndex + 1, query)

    if (regiones.error) return <TemplateErrorData />
    if (regiones.isLoading) return <TableSkeleton />
    return (
        <>
            {
                regiones && !regiones.error && !regiones.error && (
                    <TemplateTablePagination pagination={pagination} setPagination={setPagination} datos={regiones?.data?.data} columns={regionResultadoColumns} total={regiones?.data?.meta.total} />
                )
            }

        </>
    )
}

export default RegionTable