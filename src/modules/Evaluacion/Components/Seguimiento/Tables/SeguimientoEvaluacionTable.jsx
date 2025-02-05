'use client'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData'
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons'
import React from 'react'

import TemplateTablePagination from '@/shared/Components/Templates/TemplateTablePagination'
import { useSeguimientoService } from '@/modules/Evaluacion/Hooks/useSeguimientoService'
import { SeguimientoColumns } from '@/modules/Evaluacion/Constants/EvaluacionConstants'
import { useSeguimientoEvaluacion } from '@/modules/Evaluacion/Context/SeguimientoEvaluacionProvider'



function SeguimientoEvaluacionTable({ query }) {

    const { pagination, setPagination } = useSeguimientoEvaluacion()
    const { FetchEvaluaciones } = useSeguimientoService()
    const evaluacion = FetchEvaluaciones(pagination?.pageIndex + 1, query)

    if (evaluacion.error) return <TemplateErrorData />
    if (evaluacion.isLoading) return <TableSkeleton />
    return (
        <>
            {
                evaluacion && !evaluacion.error && !evaluacion.error && (
                    <TemplateTablePagination pagination={pagination} setPagination={setPagination} datos={evaluacion?.data?.data} columns={SeguimientoColumns} total={evaluacion?.data?.meta.total} />
                )
            }

        </>
    )
}

export default SeguimientoEvaluacionTable