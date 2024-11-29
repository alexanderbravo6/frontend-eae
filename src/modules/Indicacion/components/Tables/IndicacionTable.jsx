'use client'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData'
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons'
import TemplateTable from '@/shared/Components/Templates/TemplateTable'
import React from 'react'
import { useIndicacionService } from '../../Hooks/useIndicacionService'
import { indicacionColumns } from '../../Constants/IndicacionConstants'


function IndicacionTable() {
    const { FetchIndicaciones } = useIndicacionService()
    const indicaciones = FetchIndicaciones()

    if (indicaciones.error) return <TemplateErrorData />
    if (indicaciones.isLoading) return <TableSkeleton />

    return (
        <>
            <TemplateTable datos={indicaciones?.data?.data} columns={indicacionColumns} total={indicaciones?.data?.data.length} />
        </>
    )
}

export default IndicacionTable