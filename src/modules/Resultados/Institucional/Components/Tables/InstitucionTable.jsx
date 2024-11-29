'use client'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData'
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons'
import React from 'react'
import TemplateTablePagination from '@/shared/Components/Templates/TemplateTablePagination'
import { useResultadoInstitucional } from '../../Providers/ResultadoInstitucionalProvider'
import { useUtils } from '@/shared/Hooks/useUtils'
import { institucionResultadoColumns } from '../../Constants/ResultadoInstitucionConstants'
import { useSession } from 'next-auth/react'

function InstitucionTable({ query }) {
   const { pagination, setPagination } = useResultadoInstitucional()
    // si es idRol 3 (Institución) se filtra por idInstitucion

    const { FetchInstitucionesResultados } = useUtils()
    const instituciones = FetchInstitucionesResultados(pagination?.pageIndex + 1, query)

    if (instituciones?.error) return <TemplateErrorData />
    if (instituciones?.isLoading) return <TableSkeleton />

    return (
        <>
            {instituciones && !instituciones.error && (
                <TemplateTablePagination
                    pagination={pagination}
                    setPagination={setPagination}
                    datos={instituciones?.data?.data}
                    columns={institucionResultadoColumns}
                    total={instituciones?.data?.meta?.total}
                />
            )}
        </>
    )
}

export default InstitucionTable
