import React from 'react'
import MenuTable from './Tables/MenuTable'
import RegistrarMenuModal from './Modals/RegistrarMenuModal'
import { useUtils } from '@/shared/Hooks/useUtils'

const IndexMenu = () => {
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESMEN', 'ACC')) return null
    return (
        <section>
            <RegistrarMenuModal />
            <MenuTable />
        </section>

    )
}

export default IndexMenu