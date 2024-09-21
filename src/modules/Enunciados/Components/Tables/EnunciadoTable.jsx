'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { enunciadoColumns } from '../../Constants/EnunciadoConstants'
import { useEnunciadoService } from '../../Hooks/useEnunciadoService'


function EnunciadoTable() {
    const { FetchEnunciados } = useEnunciadoService()
    const enunciados = FetchEnunciados()

    if (enunciados.error) return <LoadingErrorCard />
    if (enunciados.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateBaseTable datos={enunciados?.data?.data} columns={enunciadoColumns} total={enunciados?.data?.data.length} />
        </>
    )
}

export default EnunciadoTable