'use client'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData'
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons'
import TemplateTable from '@/shared/Components/Templates/TemplateTable'
import React from 'react'
import { matriculaColumns, MatriculaConstants } from '../../Constants/MatriculaConstants'
import { useMatriculaService } from '../../Hooks/useMatriculaService'
import { useMatricula } from '../../Providers/MatriculaProvider'
import TemplateTablePagination from '@/shared/Components/Templates/TemplateTablePagination'



function MatriculaTable({ query }) {

    const { pagination, setPagination } = useMatricula()
    const { FecthMatriculas } = useMatriculaService()
    const matriculas = FecthMatriculas(pagination?.pageIndex + 1, query)

    if (matriculas.error) return <TemplateErrorData />
    if (matriculas.isLoading) return <TableSkeleton />
    return (
        <>
            {
                matriculas && !matriculas.error && !matriculas.error && (
                    <TemplateTablePagination pagination={pagination} setPagination={setPagination} datos={matriculas?.data?.data} columns={matriculaColumns} total={matriculas?.data?.meta.total} />
                )
            }

        </>
    )
}

export default MatriculaTable