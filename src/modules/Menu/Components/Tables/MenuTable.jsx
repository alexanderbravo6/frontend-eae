
import React from 'react'
import LoadingErrorCard from '@/shared/Components/LoadingErrorCard';
import { TableSkeleton } from '@/shared/Components/Skeletons';
import { useFetchAllMenus, useMenuService } from '../../Hooks/useMenuService';
import TemplateBaseTable from '@/shared/Components/Templates/TemplateBaseTable';
import { useMenu } from '@nextui-org/react';
import { menuColumns } from '../../Constants/MenuConstants';
function MenuTable() {
    const { FetchMenus } = useMenuService()
    const menus = FetchMenus()
    if (menus.error) return <LoadingErrorCard />
    if (menus.isLoading) return <TableSkeleton />
    return (
        <>

            {
                menus && (

                    <TemplateBaseTable datos={menus?.data.data} columns={menuColumns} total={menus?.data.data.length} />

                )
            }

        </>
    )
}

export default MenuTable