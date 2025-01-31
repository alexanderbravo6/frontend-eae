'use client'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData'
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons'
import TemplateTable from '@/shared/Components/Templates/TemplateTable'
import React from 'react'
import { descripcionNivelDesempenioConstants } from '../../Constants/PruebaConstants'
import { usePruebaService } from '../../Hooks/usePruebaService'



function DescripcionNivelDesempenioTable({ id }) {

    const { FetchDescripcionNivelDesempenio } = usePruebaService()
    const model = FetchDescripcionNivelDesempenio(id)
    if (model.error) return <TemplateErrorData />
    if (model.isLoading) return <TableSkeleton />
    return (
        <>
            <TemplateTable datos={model?.data?.data} columns={descripcionNivelDesempenioConstants} total={model?.data?.data.length} />
        </>
    )
}

export default DescripcionNivelDesempenioTable