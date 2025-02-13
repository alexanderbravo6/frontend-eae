import React from 'react'
import RegistrarEnunciadoModal from './Modals/RegistrarEnunciadoModal'
import EnunciadoTable from './Tables/EnunciadoTable'
import { useUtils } from '@/shared/Hooks/useUtils'
import TemplateDeniedPermission from '@/shared/Components/Templates/TemplateDeniedPermission'

const EnunciadoIndex = () => {
    const { ValidarPermisos } = useUtils()

    if (!ValidarPermisos('GESENU', 'ACC')) return <TemplateDeniedPermission />
    return (
        <section>
            <RegistrarEnunciadoModal />
            <EnunciadoTable />
        </section>
    )
}

export default EnunciadoIndex