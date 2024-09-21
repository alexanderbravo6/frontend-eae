
import React, { useState } from 'react'
import { TableSkeleton } from '@/shared/Components/Skeletons';
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard';
import { useFetchAllPersonas, usePersonaService } from '../../Hooks/usePersonaService';
import TemplateBaseTablePagination from '@/shared/Components/Templates/TemplateBaseTablePagination';
import { usePersona } from '../../Providers/PersonaProvider';
function PersonaTable({ columns, query }) {
    const { pagination, setPagination } = usePersona()
    const { FetchAllPersonas } = usePersonaService()
    const personas = FetchAllPersonas(pagination?.pageIndex + 1, query)
    if (personas.error) return <LoadingErrorCard />
    if (personas.isLoading) return <TableSkeleton />

    return (
        <>
            {
                personas && !personas.error && !personas.error && (
                    <TemplateBaseTablePagination pagination={pagination} setPagination={setPagination} datos={personas?.data?.data} columns={columns} total={personas?.data?.meta.total} />
                )
            }

        </>
    )
}

export default PersonaTable