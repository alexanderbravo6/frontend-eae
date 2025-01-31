import React from 'react'
import RolFuncionalTable from './Tables/RolFuncionalTable'
import RegistrarRolFuncionalModal from './Modals/RegistrarRolFuncionalModal'
import { useUtils } from '@/shared/Hooks/useUtils'

function IndexRolFuncional() {
    const { ValidarPermisos } = useUtils()
    if (!ValidarPermisos('GESROL', 'ACC')) return null
    return (
        <section>
            <RegistrarRolFuncionalModal />
            <RolFuncionalTable />
        </section>
    )
}

export default IndexRolFuncional