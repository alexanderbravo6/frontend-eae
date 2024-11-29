
import React from 'react'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData';
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons';
import TemplateTable from '@/shared/Components/Templates/TemplateTable';
import { useRolFuncionalService } from '../../Hooks/useRolFuncionalService';
import { rolFuncionalColumns } from '../../Constants/RolFuncionalConstants';
function RolFuncionalTable() {
    const { FetchRolFuncional } = useRolFuncionalService()
    const roles = FetchRolFuncional()
    if (roles.error) return <TemplateErrorData />
    if (roles.isLoading) return <TableSkeleton />
    return (
        <>

            {
                roles && (

                    <TemplateTable datos={roles?.data.data} columns={rolFuncionalColumns} total={roles?.data.data.length} />

                )
            }

        </>
    )
}

export default RolFuncionalTable