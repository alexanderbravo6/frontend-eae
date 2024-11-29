
import React from 'react'
import TemplateErrorData from '@/shared/Components/Templates/TemplateErrorData';
import { TableSkeleton } from '@/shared/Components/Skeletons/Skeletons';
import { useFetchAllMenus, useMenuService } from '../../Hooks/useMenuService';
import TemplateTable from '@/shared/Components/Templates/TemplateTable';
import { useMenu } from '@nextui-org/react';
import { menuColumns } from '../../Constants/MenuConstants';
function MenuTable() {
    const { FetchMenus } = useMenuService()
    const menus = FetchMenus()
    if (menus.error) return <TemplateErrorData />
    if (menus.isLoading) return <TableSkeleton />
    return (
        <>

            {
                menus && (

                    <TemplateTable datos={menus?.data.data} columns={menuColumns} total={menus?.data.data.length} />

                )
            }

        </>
    )
}

export default MenuTable