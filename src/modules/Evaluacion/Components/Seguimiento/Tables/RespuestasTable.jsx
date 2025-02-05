'use client'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData'
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons'
import TemplateTable from '@/shared/Components/Templates/TemplateTable'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useSeguimientoService } from '@/modules/Evaluacion/Hooks/useSeguimientoService'
import { RespuestasColumns } from '@/modules/Evaluacion/Constants/EvaluacionConstants'


function RespuestasTable({ id }) {
    const { data: session } = useSession()
    const { FetchRespuestas } = useSeguimientoService()
    const respuestas = FetchRespuestas(id)
    if (respuestas.error) return <TemplateErrorData />
    if (respuestas.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateTable datos={respuestas?.data?.data} columns={RespuestasColumns} total={respuestas?.data?.data.length} />
        </>
    )
}

export default RespuestasTable