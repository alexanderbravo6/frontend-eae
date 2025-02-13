import React from 'react'
import IndicacionTable from './Tables/IndicacionTable'
import RegistrarIndicacionModal from './Modals/RegistrarIndicacionModal'
import TemplateDeniedPermission from '@/shared/Components/Templates/TemplateDeniedPermission'
import { useUtils } from '@/shared/Hooks/useUtils'


const IndicacionIndex = () => {
    const { ValidarPermisos } = useUtils()

    if (!ValidarPermisos('GESIND', 'ACC')) return <TemplateDeniedPermission />
    return (
        <section>
            <RegistrarIndicacionModal />
            <IndicacionTable />
        </section>
    )
}

export default IndicacionIndex