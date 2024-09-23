import React from 'react'
import IndicacionTable from './Tables/IndicacionTable'
import RegistrarIndicacionModal from './Modals/RegistrarIndicacionModal'


const IndicacionIndex = () => {
    return (
        <section>
            <RegistrarIndicacionModal />
            <IndicacionTable />
        </section>
    )
}

export default IndicacionIndex