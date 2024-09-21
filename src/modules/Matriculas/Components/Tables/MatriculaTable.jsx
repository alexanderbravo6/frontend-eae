'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { matriculaColumns, MatriculaConstants } from '../../Constants/MatriculaConstants'
import { useMatriculaService } from '../../Hooks/useMatriculaService'
import { useMatricula } from '../../Providers/MatriculaProvider'
import TemplateBaseTablePagination from '@/shared/Components/Templates/TemplateBaseTablePagination'



function MatriculaTable({ query }) {

    const { pagination, setPagination } = useMatricula()
    const { FecthMatriculas } = useMatriculaService()
    const matriculas = FecthMatriculas(pagination?.pageIndex + 1, query)

    if (matriculas.error) return <LoadingErrorCard />
    if (matriculas.isLoading) return <TableSkeleton />
    return (
        <>
            {
                matriculas && !matriculas.error && !matriculas.error && (
                    <TemplateBaseTablePagination pagination={pagination} setPagination={setPagination} datos={matriculas?.data?.data} columns={matriculaColumns} total={matriculas?.data?.meta.total} />
                )
            }

        </>
    )
}

export default MatriculaTable