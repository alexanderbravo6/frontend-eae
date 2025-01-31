'use client'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData'
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons'
import TemplateTable from '@/shared/Components/Templates/TemplateTable'
import React from 'react'
import { cortesPuntajeConstants} from '../../Constants/PruebaConstants'
import { usePruebaService } from '../../Hooks/usePruebaService'



function CorteNivelDesempenioTable({ id }) {

    const { FetchCortesPuntajes } = usePruebaService()
    const cortes = FetchCortesPuntajes(id)
    if (cortes.error) return <TemplateErrorData />
    if (cortes.isLoading) return <TableSkeleton />
    return (
        <>
            <TemplateTable datos={cortes?.data?.data} columns={cortesPuntajeConstants} total={cortes?.data?.data.length} />
        </>
    )
}

export default CorteNivelDesempenioTable