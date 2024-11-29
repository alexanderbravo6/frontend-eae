'use client'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData'
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons'
import TemplateTable from '@/shared/Components/Templates/TemplateTable'
import React from 'react'
import { pruebaConstants } from '../../Constants/PruebaConstants'
import { usePruebaService } from '../../Hooks/usePruebaService'
import { useSession } from 'next-auth/react'


function PruebaTable() {
    const { data: session } = useSession()
    const { FetchPruebas } = usePruebaService()
    const pruebas = FetchPruebas(session?.user.anio)
    if (pruebas.error) return <TemplateErrorData />
    if (pruebas.isLoading) return <TableSkeleton />
    return (
        <>
            <TemplateTable datos={pruebas?.data?.data} columns={pruebaConstants} total={pruebas?.data?.data.length} />
        </>
    )
}

export default PruebaTable