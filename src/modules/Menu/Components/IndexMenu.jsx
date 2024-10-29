import React from 'react'
import MenuTable from './Tables/MenuTable'
import RegistrarMenuModal from './Modals/RegistrarMenuModal'

const IndexMenu = () => {
    return (
        <section>
            <RegistrarMenuModal />
            <MenuTable />
        </section>

    )
}

export default IndexMenu