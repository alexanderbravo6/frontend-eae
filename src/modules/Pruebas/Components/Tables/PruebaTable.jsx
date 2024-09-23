'use client'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard'
import { TableSkeleton } from '@/shared/Components/Skeletons'
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable'
import React from 'react'
import { pruebaConstants } from '../../Constants/PruebaConstants'
import { usePruebaService } from '../../Hooks/usePruebaService'
import { useSession } from 'next-auth/react'


function PruebaTable() {
    const { data: session } = useSession()
    const { FetchPruebas } = usePruebaService()
    const pruebas = FetchPruebas(session?.user.anio)
    if (pruebas.error) return <LoadingErrorCard />
    if (pruebas.isLoading) return <TableSkeleton />
    return (
        <>
            <TemplateBaseTable datos={pruebas?.data?.data} columns={pruebaConstants} total={pruebas?.data?.data.length} />
        </>
    )
}

export default PruebaTable