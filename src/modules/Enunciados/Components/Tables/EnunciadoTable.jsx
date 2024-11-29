'use client'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData'
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons'
import TemplateTable from '@/shared/Components/Templates/TemplateTable'
import React from 'react'
import { enunciadoColumns } from '../../Constants/EnunciadoConstants'
import { useEnunciadoService } from '../../Hooks/useEnunciadoService'


function EnunciadoTable() {
    const { FetchEnunciados } = useEnunciadoService()
    const enunciados = FetchEnunciados()

    if (enunciados.error) return <TemplateErrorData />
    if (enunciados.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateTable datos={enunciados?.data?.data} columns={enunciadoColumns} total={enunciados?.data?.data.length} />
        </>
    )
}

export default EnunciadoTable