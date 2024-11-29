
import React, { useState } from 'react'
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons';
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData';
import { useFetchAllPersonas, usePersonaService } from '../../Hooks/usePersonaService';
import TemplateTablePagination from '@/shared/Components/Templates/TemplateTablePagination';
import { usePersona } from '../../Providers/PersonaProvider';
function PersonaTable({ columns, query }) {
    const { pagination, setPagination } = usePersona()
    const { FetchAllPersonas } = usePersonaService()
    const personas = FetchAllPersonas(pagination?.pageIndex + 1, query)
    if (personas.error) return <TemplateErrorData />
    if (personas.isLoading) return <TableSkeleton />

    return (
        <>
            {
                personas && !personas.error && !personas.error && (
                    <TemplateTablePagination pagination={pagination} setPagination={setPagination} datos={personas?.data?.data} columns={columns} total={personas?.data?.meta.total} />
                )
            }

        </>
    )
}

export default PersonaTable