import NivelDesempenioCard from '@/modules/Resultados/Shared/Cards/NivelDesempenioCard'
import { Tab } from '@nextui-org/react'
import React from 'react'

function NivelDesempenioItemTab() {
    return (
        <Tab key="pie_1" title="COMPRENSIÓN LECTORA">
            <section className=' flex flex-wrap gap-5'>
                <NivelDesempenioCard prueba={"PRUEBA DE COMPRENSIÓN LECTORA (PRIMER CICLO)"} />

            </section>
        </Tab>
    )
}

export default NivelDesempenioItemTab