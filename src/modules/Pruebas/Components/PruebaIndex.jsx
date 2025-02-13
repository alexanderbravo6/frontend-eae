
import React from 'react'
import RegistrarPruebaModal from './Modals/RegistrarPruebaModal'
import PruebaTable from './Tables/PruebaTable'
import TemplateDeniedPermission from '@/shared/Components/Templates/TemplateDeniedPermission'
import { useUtils } from '@/shared/Hooks/useUtils'


const PruebaIndex = () => {
    const { ValidarPermisos } = useUtils()

    if (!ValidarPermisos('GESPRU', 'ACC')) return <TemplateDeniedPermission />
    return (
        <section>
            <RegistrarPruebaModal />
            <PruebaTable />
        </section>
    )
}

export default PruebaIndex