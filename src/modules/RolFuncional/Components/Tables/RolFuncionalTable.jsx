
import React from 'react'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard';
import { TableSkeleton } from '@/shared/Components/Skeletons';
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable';
import { useRolFuncionalService } from '../../Hooks/useRolFuncionalService';
import { rolFuncionalColumns } from '../../Constants/RolFuncionalConstants';
function RolFuncionalTable() {
    const { FetchRolFuncional } = useRolFuncionalService()
    const roles = FetchRolFuncional()
    if (roles.error) return <LoadingErrorCard />
    if (roles.isLoading) return <TableSkeleton />
    return (
        <>

            {
                roles && (

                    <TemplateBaseTable datos={roles?.data.data} columns={rolFuncionalColumns} total={roles?.data.data.length} />

                )
            }

        </>
    )
}

export default RolFuncionalTable