import React from 'react'
import RolFuncionalTable from './Tables/RolFuncionalTable'
import RegistrarRolFuncionalModal from './Modals/RegistrarRolFuncionalModal'

function IndexRolFuncional() {
    return (
        <section>
            <RegistrarRolFuncionalModal />
            <RolFuncionalTable />
        </section>
    )
}

export default IndexRolFuncional