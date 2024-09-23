'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { useIndicacionService } from '../../Hooks/useIndicacionService'
import { indicacionColumns } from '../../Constants/IndicacionConstants'


function IndicacionTable() {
    const { FetchIndicaciones } = useIndicacionService()
    const indicaciones = FetchIndicaciones()

    if (indicaciones.error) return <LoadingErrorCard />
    if (indicaciones.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateBaseTable datos={indicaciones?.data?.data} columns={indicacionColumns} total={indicaciones?.data?.data.length} />
        </>
    )
}

export default IndicacionTable