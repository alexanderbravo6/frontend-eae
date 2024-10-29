'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import React from 'react'
import TemplateBaseTablePagination from '@/shared/Components/Templates/TemplateBaseTablePagination'
import { useResultadoInstitucional } from '../../Providers/ResultadoInstitucionalProvider'
import { useUtils } from '@/shared/Hooks/useUtils'
import { institucionResultadoColumns } from '../../Constants/ResultadoInstitucionConstants'



function InstitucionTable({ query }) {

    const { pagination, setPagination } = useResultadoInstitucional()
    const { FetchInstitucionesResultados } = useUtils()
    const instituciones = FetchInstitucionesResultados(pagination?.pageIndex + 1, query)

    if (instituciones.error) return <LoadingErrorCard />
    if (instituciones.isLoading) return <TableSkeleton />
    return (
        <>
            {
                instituciones && !instituciones.error && !instituciones.error && (
                    <TemplateBaseTablePagination pagination={pagination} setPagination={setPagination} datos={instituciones?.data?.data} columns={institucionResultadoColumns} total={instituciones?.data?.meta.total} />
                )
            }

        </>
    )
}

export default InstitucionTable